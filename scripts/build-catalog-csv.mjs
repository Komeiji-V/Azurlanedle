#!/usr/bin/env node
/**
 * 由 data/ 下的参考数据生成 db/航一把题库.csv。
 *
 * 数据来源：
 * - data/dle_data.json      原版 Azurlanedle 的题库（828 艘，提供舰级、建造时间与建造方式）
 * - data/bwiki-ships.json   bwiki 舰娘图鉴（提供中文船名、阵营、舰种、舰级、实装日期）
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

/** 稀有度的中文写法（国服），用于「中文」方案。 */
const RARITY_ZH = new Map([
  ["Normal", "普通"],
  ["Rare", "稀有"],
  ["Elite", "精锐"],
  ["Super Rare", "超稀有"],
  ["Ultra Rare", "海上传奇"],
  ["Priority", "最高方案"],
  ["Decisive", "决战方案"],
]);

/**
 * 题库列定义。
 *
 * 每一列都有两套写法：
 *   primary —— 判定与默认显示用的主值（wiki 中文，稀有度除外，见下）
 *   variants.original —— 原版 Azurlanedle 的原始数据
 * 后台可以逐列切换显示哪一套；判定只看主值，换显示方案不会影响对局。
 * CSV 里附加方案写成「列名@方案（类型：kind）」，例如「阵营@original（类型：exact）」。
 */
const TAG_COLUMNS = [
  {
    name: "稀有度",
    kind: "exact",
    variants: {
      zh: (ctx) => RARITY_ZH.get(ctx.dle.rarity) ?? "",
      en: (ctx) => ctx.dle.rarity,
    },
  },
  {
    name: "阵营",
    kind: "exact",
    variants: {
      zh: (ctx) => ctx.wiki?.["阵营"] ?? "",
      en: (ctx) => ctx.dle.nation,
    },
  },
  {
    name: "舰种",
    kind: "exact",
    variants: {
      zh: (ctx) => ctx.wiki?.["类型"] ?? "",
      en: (ctx) => ctx.dle.hull,
    },
  },
  {
    name: "舰级",
    kind: "exact",
    variants: {
      zh: (ctx) => ctx.shipClass,
      en: (ctx) => ctx.dle.class,
    },
  },
  {
    name: "建造时间",
    kind: "ordered",
    // 建造时间本身就是数字，两种语言只有「无法建造」这类标签不同，留一列就够
    variants: {
      zh: (ctx) => ctx.timer,
    },
  },
  {
    name: "实装活动",
    kind: "ordered",
    variants: {
      zh: (ctx) => ctx.eventValue,
      en: (ctx) => ctx.eventValueOriginal,
    },
  },
];

/** 列名 → 标签类型，用于报表里按「列名@写法（类型：kind）」定位列。 */
const TAG_KIND_BY_NAME = new Map(TAG_COLUMNS.map((column) => [column.name, column.kind]));

/** 原版建造时间里的获取方式标签 → 国服说法。Drop Only 与原版一样并入“无法建造”。 */
const TIMER_LABELS = new Map([
  ["Cannot be constructed", "无法建造"],
  ["Drop Only", "无法建造"],
  ["Research", "科研"],
  ["Cruise Missions", "巡游"],
  ["META Showdown", "META 作战"],
]);

/** 舰级里的描述词：这些是舰种说明而不是舰级名。 */
const CLASS_DESCRIPTOR = /^(轻型|重型|大型|中型|小型|装甲|护航|实验|试验|试作|量产|计划|改装|正规|高速|低速|条约|泛用|特殊|新锐|旧式|飞机维修)/;

/** 舰种词：「XX级/XX型」紧跟着它的时候，这个「XX」才是真正的舰级名。 */
const SHIP_TYPE_WORD = /^(航空母舰|战列巡洋舰|战列舰|重巡洋舰|轻巡洋舰|巡洋舰|驱逐舰|潜水舰|潜水母舰|水上机母舰|潜艇|空母|航母|战舰|工作舰|维修舰|运输舰|练习舰)/;

/**
 * 一个英文舰级对应多个中文子级时，多数票必然分散，只能人工定名。
 * 例如 Town 级在 wiki 里分南安普顿级 / 格罗斯特级 / 爱丁堡级，County 级分伦敦级 / 肯特级 / 诺福克级。
 */
const MANUAL_CLASS_LABELS = new Map([
  ["Town", "城级"],
  ["County", "郡级"],
  ["A and B", "A级／B级"],
  ["Bulin", "布里"],
]);

/** 两个英文名是否指同一艘船（忽略海军前缀、macron、大小写与标点）。 */
function isSameShipName(left, right) {
  const target = nameVariants(right ?? "");
  for (const key of nameVariants(stripNavyPrefix(left ?? ""))) {
    if (target.has(key)) return true;
  }
  return false;
}

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
 * 「最上型重巡洋舰一番舰」→「最上型」。取不到时返回空串，由调用方回退。
 */
function chineseShipClass(model) {
  const text = (model ?? "").trim();
  if (!text) return "";
  const candidates = [...text.matchAll(/([\u4e00-\u9fa5A-Za-z0-9－·\-]{1,10}?[级型])/g)]
    .map((match) => ({ value: match[1], end: (match.index ?? 0) + match[1].length }))
    // 「轻型」「护航」这类是舰种描述而不是舰级名
    .filter((item) => !CLASS_DESCRIPTOR.test(item.value))
    // 「XX吨重巡洋舰方案改型」「1047工程超重型」这类是设计方案名，也不是舰级
    .filter((item) => !/[舰艇船吨案程]/.test(item.value))
    // 「G-14级」这类带连字符的设计编号不是舰级名；
    // 德国 Z 驱的「1934型」「1936A型」是正式舰级名，必须保留
    .filter((item) => !/\d\s*-\s*\d|[A-Za-z]\s*-\s*\d/.test(item.value));
  if (!candidates.length) return "";
  // 「特I型吹雪级驱逐舰二番舰」会先匹配到「特I型」，所以要优先取后面紧跟舰种词的那个；
  // 都不跟舰种词时取最后一个（越靠后越接近真正的舰级名）
  const withTypeWord = candidates.find((item) => SHIP_TYPE_WORD.test(text.slice(item.end)));
  return (withTypeWord ?? candidates[candidates.length - 1]).value;
}

/**
 * META 舰在原版数据里的「舰级」是 META 作战名（Cinders of Hope 之类），
 * wiki 的型号又是空的，只能回到本体舰船去取舰级：「苍龙·META」→「苍龙级」。
 */
function metaBaseClassLabel(wiki, ships, dleData, classLabels) {
  const chineseName = (wiki?.["名称"] ?? "").trim();
  if (!chineseName.endsWith("·META")) return null;
  const baseName = chineseName.slice(0, -"·META".length);
  const baseEnglish = stripNavyPrefix(ships[baseName]?.["英文名"] ?? "");
  if (!baseEnglish) return `${baseName}级`;
  const baseShip = Object.values(dleData).find((item) => isSameShipName(item.name, baseEnglish));
  return (baseShip && classLabels.get(baseShip.class)) || `${baseName}级`;
}

/**
 * 解析 bwiki 的 CV 字段，拆成中文名与日文写法两组。
 * 字段格式很杂，例如：
 *   加隈 亚衣（かくま あい Kakuma Ai）推特 / 碧蓝广播
 *   长绳麻理亚 / 長縄 まりあ / ながなわ まりあ / Maria Naganawa / 个人推特 / 事务所简历
 *   中配：张琦 / 个人微博 日配：法元 明菜 / ほうもと あきな / Houmoto Akina
 */
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
  const [dleData, ships, bwikiEvents, research, cruise, showdown, legacyEvents] = await Promise.all([
    readJson("dle_data.json"),
    readJson("bwiki-ships.json"),
    // 国服活动表：日期 → 中文活动名
    readJson("bwiki-events.json"),
    readJson("research.json"),
    readJson("cruise.json"),
    readJson("showdown.json"),
    // 原版活动日期表：英文活动名 → YYYYMMDD，用于 wiki 缺实装日期时兜底
    readJson("events.json"),
  ]);

  const indexes = buildIndexes(ships);
  const lookupEvent = createEventLookup(bwikiEvents, 7);

  // 原版按建造方式选择活动日期表，这里保持一致，仅用于 wiki 缺少实装日期时兜底
  const legacyDateTables = { Research: research, "META Showdown": showdown, "Cruise Missions": cruise };
  const legacyEventDate = (ship) => {
    const table = legacyDateTables[ship.timer] ?? legacyEvents;
    return toIsoDateFromCompact(table?.[ship.event]);
  };

  const unmatched = [];
  const rows = [];
  const pageUsage = new Map();

  // 第一轮：为每个英文舰级选出最一致的中文译名（同舰级的船应当给出同一个「XX级」）
  // 投票时把「XX型」和「XX级」归一成同一个 key：wiki 两种写法混用，
  // 不归一的话同一级的票会被拆成两半，两边都过不了 60% 的门槛，最后整级退回英文
  const classVotes = new Map();
  for (const ship of Object.values(dleData)) {
    const page = findPage(indexes, ship.name);
    const chineseClass = chineseShipClass(ships[page]?.["型号"]);
    if (!chineseClass) continue;
    const key = chineseClass.replace(/型$/, "级");
    const votes = classVotes.get(ship.class) ?? new Map();
    const entry = votes.get(key) ?? { count: 0, forms: new Map() };
    entry.count += 1;
    entry.forms.set(chineseClass, (entry.forms.get(chineseClass) ?? 0) + 1);
    votes.set(key, entry);
    classVotes.set(ship.class, votes);
  }
  const classLabels = new Map();
  for (const [englishClass, votes] of classVotes) {
    const total = [...votes.values()].reduce((sum, item) => sum + item.count, 0);
    const [bestKey, bestEntry] = [...votes.entries()].sort((left, right) => right[1].count - left[1].count)[0];
    // 一致率太低说明这个英文舰级没有统一的中文写法，保留英文
    if (!bestKey || bestEntry.count / total < 0.6) continue;
    // 输出该 key 下出现最多的原始写法（保留 wiki 自己的 级 / 型 风格）
    const form = [...bestEntry.forms.entries()].sort((left, right) => right[1] - left[1])[0][0];
    classLabels.set(englishClass, form);
  }
  // 多数票没定的舰级，用「命名舰」的译名补：英文舰名与英文舰级相同的船就是该级的命名舰，
  // 它的中文名 / 型号最权威（例如 Fubuki→吹雪级、Shiratsuyu→白露级、Taihou→大凤级）。
  // 英文名与日文名都看：个别页面（如金狮）把两个字段填反了。
  const leadLabels = new Map();
  for (const ship of Object.values(dleData)) {
    const page = findPage(indexes, ship.name);
    const wiki = page ? ships[page] : null;
    if (!wiki) continue;
    const isNamesake = isSameShipName(wiki["英文名"], ship.class) || isSameShipName(wiki["日文名"], ship.class);
    if (!isNamesake) continue;
    const chineseName = (wiki["名称"] ?? "").trim();
    const label = chineseShipClass(wiki["型号"]) || (chineseName ? `${chineseName}级` : "");
    if (label && !leadLabels.has(ship.class)) leadLabels.set(ship.class, label);
  }
  for (const [englishClass, label] of leadLabels) {
    if (!classLabels.has(englishClass)) classLabels.set(englishClass, label);
  }
  for (const [englishClass, label] of MANUAL_CLASS_LABELS) {
    if (!classLabels.has(englishClass)) classLabels.set(englishClass, label);
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

    // 中文方案按国服实装日期对齐国服活动名；原版方案用同一日期配 Azurlanedle 的英文活动名
    let eventValue = "无活动";
    let eventValueOriginal = "No Event";
    if (ship.event !== "No Event") {
      const isoDate = toIsoDateFromOrdinal(wiki?.["实装日期"]) ?? legacyEventDate(ship);
      const matched = lookupEvent(isoDate);
      const dateText = matched?.iso ?? isoDate ?? "";
      eventValue = [dateText, matched?.name ?? ""].filter(Boolean).join(" ").trim() || "无活动";
      eventValueOriginal = [dateText, ship.event].filter(Boolean).join(" ").trim() || "No Event";
    }

    const timer = TIMER_LABELS.get(ship.timer) ?? ship.timer;
    const shipClass = classLabels.get(ship.class)
      ?? metaBaseClassLabel(wiki, ships, dleData, classLabels)
      ?? (ship.class === "No Class" ? "无舰级" : ship.class);

    const context = { dle: ship, wiki, timer, eventValue, eventValueOriginal, shipClass };
    const cells = [];
    for (const column of TAG_COLUMNS) {
      for (const pick of Object.values(column.variants)) cells.push(pick(context) || "");
    }

    rows.push([chineseName, [...aliases].join("、"), "是", ...cells]);
  }

  const headers = [
    ...CSV_BASE_HEADERS,
    ...TAG_COLUMNS.flatMap((column) =>
      Object.keys(column.variants).map((key) => `${column.name}@${key}（类型：${column.kind}）`)),
  ];
  const csv = `\uFEFF${[headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n")}\r\n`;
  const outputPath = resolve(projectRoot, "db", "航一把题库.csv");
  await writeFile(outputPath, csv, "utf8");

  const columnAt = (name, variant = "zh") => headers.indexOf(`${name}@${variant}（类型：${TAG_KIND_BY_NAME.get(name)}）`);
  const eventIndex = columnAt("实装活动");
  const classIndex = columnAt("舰级");
  const eventCells = rows.map((row) => row[eventIndex]);
  const withEventName = eventCells.filter((cell) => /\d{4}-\d{2}-\d{2} \S/.test(cell)).length;
  const withDateOnly = eventCells.filter((cell) => /^\d{4}-\d{2}-\d{2}$/.test(cell)).length;
  const noEvent = eventCells.filter((cell) => cell === "无活动").length;

  console.log(`已写入 ${outputPath}`);
  console.log(`  船只总数：${rows.length}`);
  console.log(`  稀有度：${[...new Set(rows.map((row) => row[columnAt("稀有度", "en")]))].sort().join(" / ")}`);
  console.log(`  舰级中文译名：${rows.filter((row) => /[\u4e00-\u9fa5]/.test(row[classIndex])).length}/${rows.length}`);
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
