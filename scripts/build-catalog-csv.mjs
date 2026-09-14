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

/** 声优字段里的噪声词：用来切分名字与社交账号、节目名。 */
const VOICE_NOISE = /(?:微博|推特|简历|B站|b站|5sing|事务所|公开|个人|介绍|主页|官网|官方|直播|频道|访谈|博客|音乐|平台|账号|节目|电台|广播|粉丝|贴吧|论坛|媒体|社交|碧蓝|航线|IG|FB)/g;
/** 声优字段里的角色标记前缀。 */
const VOICE_PREFIX = /^(中配|日配|艺名|本名|旧名|CV)\s*[：:]\s*/;
/** 舰级里的描述词：这些是舰种说明而不是舰级名。 */
const CLASS_DESCRIPTOR = /^(轻型|重型|大型|中型|小型|装甲|护航|实验|试验|试作|量产|计划|改装|正规|高速|低速|条约|泛用|特殊|新锐|旧式|飞机维修)/;

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

/**
 * 从 bwiki 的「型号」字段提取中文舰级。
 * 「高雄级重巡洋舰一番舰」→「高雄级」；「战列舰F 俾斯麦级战列舰1号舰」→「俾斯麦级」；
 * 「最上型重巡洋舰一番舰」→「最上型」。取不到时返回空串，由调用方回退到原版英文舰级。
 */
function chineseShipClass(model) {
  const match = /([\u4e00-\u9fa5A-Za-z0-9－·\-]{1,10}?[级型])/.exec((model ?? "").trim());
  if (!match) return "";
  const value = match[1];
  // 「轻型」「护航」这类是舰种描述而不是舰级名
  if (CLASS_DESCRIPTOR.test(value)) return "";
  // 「XX吨重巡洋舰方案改型」「1047工程超重型」这类是设计方案名，也不是舰级
  if (/[舰艇船吨案程]/.test(value)) return "";
  return value;
}

/**
 * 解析 bwiki 的 CV 字段，返回至多三个写法：中文名、日文写法、次中文名（多声优时）。
 * 字段格式很杂，例如：
 *   加隈 亚衣（かくま あい Kakuma Ai）推特 / 碧蓝广播
 *   长绳麻理亚 / 長縄 まりあ / ながなわ まりあ / Maria Naganawa / 个人推特 / 事务所简历
 *   中配：张琦 / 个人微博 日配：法元 明菜 / ほうもと あきな / Houmoto Akina
 */
function parseVoiceActors(raw) {
  const source = raw ?? "";
  const stripped = source
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/twi:\S+/gi, " ")
    // 假名单独提取，先剥离，避免「内田 真礼 うちだ まあや」这类中日混排干扰
    .replace(/[\u3040-\u30ff]+/g, " ")
    .replace(/[A-Za-z][A-Za-z.'\-]*(?:\s+[A-Za-z][A-Za-z.'\-]*)*/g, " ");

  const chinese = [];
  for (const rawPart of stripped.split(/[/／、,，（）()|[\]]/)) {
    // 噪声词当分隔符：名字可能在噪声词之前（「中条 智世 个人推特」），
    // 也可能在之后（「个人官网 布里德卡特·塞拉·惠美」），所以逐段扫描而不是只取一段
    for (const candidate of rawPart.split(VOICE_NOISE)) {
      // 先压掉空格与数字符号（「石川 由依」「内田彩 1986.7.23-」），再整段取中文
      const compact = candidate.trim().replace(VOICE_PREFIX, "").replace(/[\s：:（）()\[\]0-9.\-]+/g, "");
      for (const match of compact.matchAll(/[\u4e00-\u9fa5·]{2,12}/g)) {
        const name = match[0].replace(/^·+|·+$/g, "");
        if (name.length < 2 || chinese.includes(name)) continue;
        chinese.push(name);
      }
    }
  }

  // 日文写法优先取「汉字 + 假名」的组合，例如「長縄 まりあ」
  const japanese = (/([\u4e00-\u9fa5]{1,5}(?:[\s·][\u4e00-\u9fa5]{1,5})?[\s·][\u3040-\u30ff]{2,}(?:[\s·][\u3040-\u30ff]{2,})?)/.exec(source)?.[1] ?? "")
    .replace(/\s+/g, " ")
    .trim();
  const kana = [...source.matchAll(/[\u3040-\u30ff]{2,}(?:[\s·][\u3040-\u30ff]{2,})*/g)]
    .map((match) => match[0].replace(/\s+/g, " ").trim())
    .sort((left, right) => right.length - left.length)[0] ?? "";

  const values = [];
  const push = (value) => {
    if (!value || values.length >= 3) return;
    if (values.some((existing) => existing.includes(value) || value.includes(existing))) return;
    values.push(value);
  };
  push(chinese[0]);
  push(japanese || kana);
  for (const name of chinese.slice(1)) push(name);
  push(kana);

  return values;
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

  // 第一轮：为每个英文舰级选出最一致的中文译名（同舰级的船应当给出同一个「XX级」）
  const classVotes = new Map();
  for (const ship of Object.values(dleData)) {
    const page = findPage(indexes, ship.name);
    const chineseClass = chineseShipClass(ships[page]?.["型号"]);
    if (!chineseClass) continue;
    const votes = classVotes.get(ship.class) ?? new Map();
    votes.set(chineseClass, (votes.get(chineseClass) ?? 0) + 1);
    classVotes.set(ship.class, votes);
  }
  const classLabels = new Map();
  for (const [englishClass, votes] of classVotes) {
    const total = [...votes.values()].reduce((sum, count) => sum + count, 0);
    const [bestLabel, bestCount] = [...votes.entries()].sort((left, right) => right[1] - left[1])[0];
    // 一致率太低说明这个英文舰级没有统一的中文写法，保留英文
    if (bestLabel && bestCount / total >= 0.6) classLabels.set(englishClass, bestLabel);
  }

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
    // 稀有度直接沿用原版 Azurlanedle 的写法（Normal / Rare / Elite / Super Rare / Ultra Rare / Priority / Decisive）
    const rarity = ship.rarity;
    const shipClass = classLabels.get(ship.class)
      ?? (ship.class === "No Class" ? "无舰级" : ship.class);

    // 声优转成中文名 + 日文写法，多项之间任意一项相同即算命中
    const voiceValues = parseVoiceActors(wiki?.["CV"]);
    const voiceActors = voiceValues.length
      ? voiceValues.join(" | ")
      : ship.VA.split(" & ").map((name) => name.trim()).filter(Boolean).join(" | ");

    rows.push([
      chineseName,
      [...aliases].join("、"),
      "是",
      rarity,
      wiki?.["阵营"] ?? "",
      wiki?.["类型"] ?? "",
      shipClass,
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
  console.log(`  稀有度：${[...new Set(rows.map((row) => row[3]))].sort().join(" / ")}`);
  console.log(`  舰级中文译名：${rows.filter((row) => /[\u4e00-\u9fa5]/.test(row[6])).length}/${rows.length}`);
  console.log(`  声优中文名：${rows.filter((row) => /[\u4e00-\u9fa5]/.test(row[9])).length}/${rows.length}`);
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
