#!/usr/bin/env node
/**
 * 由 data/ 下的参考数据生成 db/航一把题库.csv。
 *
 * 数据来源：
 * - data/dle_data.json      原版 Azurlanedle 的题库（828 艘，提供舰级、建造时间、声优）
 * - data/bwiki-ships.json   bwiki 舰娘图鉴（提供中文船名、稀有度、阵营、舰种、实装日期）
 * - data/bwiki-events.json  bwiki 活动表（提供中文活动名与国服活动日期）
 *
 * 用法：node scripts/build-catalog-csv.mjs
 */
import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const readJson = async (name) =>
  JSON.parse(await readFile(resolve(projectRoot, "data", name), "utf8"));

const CSV_BASE_HEADERS = ["舰船名", "别名", "启用"];
const TAG_COLUMNS = [
  { name: "稀有度", kind: "exact" },
  { name: "阵营", kind: "exact" },
  { name: "舰种", kind: "exact" },
  { name: "舰级", kind: "exact" },
  { name: "建造时间", kind: "ordered" },
  { name: "实装活动", kind: "ordered" },
  { name: "声优", kind: "exact-multi" },
];

/** 原版建造时间里的获取方式标签 → 国服说法。Drop Only 与原版一样并入“无法建造”。 */
const TIMER_LABELS = new Map([
  ["Cannot be constructed", "无法建造"],
  ["Drop Only", "无法建造"],
  ["Research", "科研"],
  ["Cruise Missions", "巡游"],
  ["META Showdown", "META 作战"],
]);

/** 归一化后仍然对不上的联动/特殊形态，单独列出。 */
const MANUAL_PAGE_MAP = new Map([
  ["Neptune (Neptunia)", "涅普顿"],
  ["Kaga(BB)", "加贺BB"],
  ["Kaga", "加贺"],
  ["Amagi(CV)", "天城CV"],
  ["Kizuna AI", "绊爱"],
  ["Elegant Kizuna AI", "绊爱·Elegant"],
  ["Anniversary Kizuna AI", "绊爱·Anniversary"],
  ["Super Gamer Kizuna AI", "绊爱·SuperGamer"],
  ["Enterprise (Royal Navy)", "进取"],
  ["Fubuki (Senran Kagura)", "雪不归"],
  ["Kasumi (Venus Vacation)", "霞DOA"],
  ["Prototype Bulin MKII", "试作型布里MKII"],
  ["Specialized Bulin Custom MKIII", "特装型布里MKIII"],
  // wiki 把名字拼成了 Ritsuko Akizukii，多一个 i，直接按页面名指定
  ["Ritsuko Akizuki", "秋月律子"],
]);

/** 活动表条目里属于“复刻”的场次，用于选择首发名称。 */
const RERUN_PREFIX = /^(轻量化)?复刻[：:]/;

const STRIP_CHARS = /[.\-_\u00b7\u30fb'\u2019()\uff08\uff09[\]\u3010\u3011\s]/g;
const MACRON_DOUBLE = { "\u014d": "ou", "\u016b": "uu", "\u0101": "aa", "\u0113": "ee", "\u012b": "ii" };
const MACRON_OO = { "\u014d": "oo", "\u016b": "uu", "\u0101": "aa", "\u0113": "ee", "\u012b": "ii" };
const MACRON_STRIP = { "\u014d": "o", "\u016b": "u", "\u0101": "a", "\u0113": "e", "\u012b": "i" };

function translate(text, table) {
  return text.replace(/[\u014d\u016b\u0101\u0113\u012b]/g, (char) => table[char] ?? char);
}

/** 去掉变音符号：é/è→e、ü→u、ō→o。用于兼容各来源不一致的拼写。 */
function stripDiacritics(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/** 生成一个名称的各种归一化写法，用于跨语言/跨罗马音方案匹配。 */
export function nameVariants(name) {
  const base = name.trim().replace(/[\u2019']/g, "").replace(/\u00b5/g, "\u03bc");
  const tokens = base.split(/[\s\u00b7\u30fb]+/).filter(Boolean);

  // 只把全大写缩写（IJN / USS / KMS / PRAN…）当作可以去掉的海军前缀。
  // 若对任意首词都做后缀裁剪，"Ritsuko Akizuki" 会退化成 "Akizuki" 而误匹配到“秋月”。
  const withoutPrefix = tokens.length > 1 && /^[A-Z]{2,6}\.?$/.test(tokens[0]) ? tokens.slice(1) : null;
  const tokenForms = [tokens];
  if (withoutPrefix) tokenForms.push(withoutPrefix);
  if (tokens.length > 1) tokenForms.push([...tokens].reverse());
  if (withoutPrefix && withoutPrefix.length > 1) tokenForms.push([...withoutPrefix].reverse());

  const keys = new Set();
  for (const form of tokenForms) {
    const text = form.join(" ").toLowerCase();
    for (const variant of new Set([
      text,
      translate(text, MACRON_DOUBLE),
      translate(text, MACRON_OO),
      translate(text, MACRON_STRIP),
      stripDiacritics(text),
      stripDiacritics(translate(text, MACRON_DOUBLE)),
    ])) {
      const joined = variant.replace(STRIP_CHARS, "");
      if (!joined) continue;
      keys.add(joined);
      keys.add(joined.replace(/ou/g, "o").replace(/uu/g, "u"));
    }
  }

  // wiki 的英文名对本体与 μ 版完全相同，查 μ 页面索引时需要去掉 μ 后缀
  for (const key of [...keys]) {
    if (key.endsWith("\u03bc")) keys.add(key.slice(0, -1));
  }
  return keys;
}

function isMuVariant(page, fields) {
  return page.includes("\u03bc\u5175\u88c5") || (fields["\u540d\u79f0"] ?? "").includes("\u03bc\u5175\u88c5");
}

/** 建立 归一化名称 → 页面 的两套索引：普通页面与 μ 兵装页面分开。 */
function buildIndexes(ships) {
  const normal = new Map();
  const mu = new Map();
  const fieldOrder = ["英文名", "名称", "和谐名", "日文名"];
  for (const [page, fields] of Object.entries(ships)) {
    const index = isMuVariant(page, fields) ? mu : normal;
    for (const field of fieldOrder) {
      for (const token of (fields[field] ?? "").split(/[/、,，]/)) {
        const trimmed = token.trim();
        if (!trimmed) continue;
        for (const key of nameVariants(trimmed)) {
          if (!index.has(key)) index.set(key, page);
        }
      }
    }
  }
  return { normal, mu };
}

function findPage(indexes, originalName) {
  const manual = MANUAL_PAGE_MAP.get(originalName);
  if (manual) return manual;
  const index = /[\u00b5\u03bc]/.test(originalName) ? indexes.mu : indexes.normal;
  for (const key of nameVariants(originalName)) {
    const page = index.get(key);
    if (page) return page;
  }
  return null;
}

/** 去掉 IJN / USS / KMS 之类的海军前缀，便于玩家直接用英文名搜索。 */
function stripNavyPrefix(name) {
  return name.trim().replace(/^[A-Z]{2,6}\s+/, "").trim();
}

function toIsoDateFromOrdinal(text) {
  const match = /(\d{4})\u5e74(\d{1,2})\u6708(\d{1,2})\u65e5/.exec(text ?? "");
  if (!match) return null;
  const month = String(match[2]).padStart(2, "0");
  const day = String(match[3]).padStart(2, "0");
  return `${match[1]}-${month}-${day}`;
}

function ordinalOf(iso) {
  const [year, month, day] = iso.split("-").map(Number);
  return Math.floor(Date.UTC(year, month - 1, day) / 86_400_000);
}

/** 原版 events.json 里的活动日期是 YYYYMMDD 整数。 */
function toIsoDateFromCompact(value) {
  if (!Number.isInteger(value)) return null;
  const text = String(value);
  if (text.length !== 8) return null;
  return `${text.slice(0, 4)}-${text.slice(4, 6)}-${text.slice(6, 8)}`;
}

function pickEventName(names) {
  if (!names?.length) return "";
  const firstRun = names.find((name) => !RERUN_PREFIX.test(name));
  return firstRun ?? names[0];
}

/** 建立 活动日期序号 → 活动名，并提供 ±window 天内的匹配。 */
function createEventLookup(events, window = 7) {
  const entries = Object.entries(events).map(([iso, names]) => ({
    iso,
    ordinal: ordinalOf(iso),
    name: pickEventName(names),
  }));
  return (iso) => {
    if (!iso) return null;
    const ordinal = ordinalOf(iso);
    let best = null;
    for (const entry of entries) {
      const distance = Math.abs(entry.ordinal - ordinal);
      if (distance > window) continue;
      if (!best || distance < best.distance) best = { ...entry, distance };
    }
    return best;
  };
}

function csvCell(value) {
  return /[",\r\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value;
}

async function main() {
  const [dleData, ships, events, research, cruise, showdown] = await Promise.all([
    readJson("dle_data.json"),
    readJson("bwiki-ships.json"),
    readJson("bwiki-events.json"),
    readJson("research.json"),
    readJson("cruise.json"),
    readJson("showdown.json"),
  ]);

  const indexes = buildIndexes(ships);
  const lookupEvent = createEventLookup(events, 7);

  // 原版按建造方式选择活动日期表，这里保持一致，仅用于 wiki 缺少实装日期时兜底
  const legacyDateTables = { Research: research, "META Showdown": showdown, "Cruise Missions": cruise };
  const legacyEventDate = (ship) => {
    const table = legacyDateTables[ship.timer] ?? events;
    return toIsoDateFromCompact(table?.[ship.event]);
  };

  const unmatched = [];
  const rows = [];
  const pageUsage = new Map();

  for (const [id, ship] of Object.entries(dleData)) {
    const page = findPage(indexes, ship.name);
    const wiki = page ? ships[page] : null;
    if (!wiki) unmatched.push(`${ship.name} (id=${id})`);
    if (page) {
      const list = pageUsage.get(page) ?? [];
      list.push(ship.name);
      pageUsage.set(page, list);
    }

    const chineseName = wiki?.["名称"]?.trim() || ship.name;
    const aliases = new Set();
    for (const candidate of [wiki?.["和谐名"], stripNavyPrefix(wiki?.["英文名"] ?? ""), ship.name]) {
      const value = (candidate ?? "").trim();
      if (value && value !== chineseName) aliases.add(value);
    }

    // 实装活动：与原版一致，“无活动”的船不带日期，彼此之间恒为命中
    let eventValue = "无活动";
    if (ship.event !== "No Event") {
      const isoDate = toIsoDateFromOrdinal(wiki?.["实装日期"]) ?? legacyEventDate(ship);
      const matched = lookupEvent(isoDate);
      const dateText = matched?.iso ?? isoDate ?? "";
      const nameText = matched?.name ?? "";
      eventValue = [dateText, nameText].filter(Boolean).join(" ").trim() || "无活动";
    }

    const timer = TIMER_LABELS.get(ship.timer) ?? ship.timer;
    // 原版用 " & " 连接多位声优，这里转成 CSV 的多标签写法，比较时任意一位相同即算命中
    const voiceActors = ship.VA
      .split(" & ")
      .map((name) => name.trim())
      .filter(Boolean)
      .join(" | ");

    rows.push([
      chineseName,
      [...aliases].join("、"),
      "是",
      wiki?.["稀有度"] ?? "",
      wiki?.["阵营"] ?? "",
      wiki?.["类型"] ?? "",
      ship.class,
      timer,
      eventValue,
      voiceActors,
    ]);
  }

  const headers = [
    ...CSV_BASE_HEADERS,
    ...TAG_COLUMNS.map(({ name, kind }) => `${name}（类型：${kind}）`),
  ];
  const csv = `\uFEFF${[headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n")}\r\n`;
  const outputPath = resolve(projectRoot, "db", "航一把题库.csv");
  await writeFile(outputPath, csv, "utf8");

  const withEventName = rows.filter((row) => /\d{4}-\d{2}-\d{2} \S/.test(row[8])).length;
  const withDateOnly = rows.filter((row) => /^\d{4}-\d{2}-\d{2}$/.test(row[8])).length;
  const noEvent = rows.filter((row) => row[8] === "无活动").length;

  console.log(`已写入 ${outputPath}`);
  console.log(`  船只总数：${rows.length}`);
  console.log(`  实装活动：日期+活动名 ${withEventName}，仅日期 ${withDateOnly}，无活动 ${noEvent}`);
  console.log(`  未匹配 wiki 页面：${unmatched.length}`);
  if (unmatched.length) console.log(`    ${unmatched.join("、")}`);

  const conflicts = [...pageUsage].filter(([, names]) => names.length > 1);
  console.log(`  同一 wiki 页面被多艘船命中：${conflicts.length}`);
  for (const [page, names] of conflicts) console.log(`    ${page} ← ${names.join(" / ")}`);

  const missingFields = rows.filter((row) => row.slice(3, 7).some((cell) => !cell)).length;
  if (missingFields) console.log(`  注意：${missingFields} 行的稀有度/阵营/舰种/舰级为空，需要人工补齐。`);
}

await main();
