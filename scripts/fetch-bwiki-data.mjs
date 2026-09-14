#!/usr/bin/env node
/**
 * 从碧蓝航线 bwiki 抓取舰船图鉴与活动表数据，输出到 data/ 目录。
 *
 * 该脚本只在准备/更新题库时运行，游戏运行时不需要联网。
 * 限速与重试是为了避开 bwiki 的反爬（连续请求会整站返回 HTTP 567）。
 *
 * 用法：node scripts/fetch-bwiki-data.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = resolve(projectRoot, "data");
const API = "https://wiki.biligame.com/blhx/api.php";
const REQUEST_INTERVAL_MS = 1200;
const BATCH_SIZE = 50;
const TEMPLATE_TITLE = "Template:舰娘图鉴";
const EVENT_PAGE = "游戏活动表";

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Referer: "https://wiki.biligame.com/blhx/",
  "Accept-Language": "zh-CN,zh;q=0.9",
};

const SHIP_FIELDS = [
  "型号",
  "名称",
  "和谐名",
  "英文名",
  "日文名",
  "编号",
  "类型",
  "稀有度",
  "阵营",
  "耗时",
  "CV",
  "实装日期",
  "获得方式",
  "其他获取途径",
];

let lastRequestAt = 0;

function sleep(ms) {
  return new Promise((done) => setTimeout(done, ms));
}

async function api(params, { retries = 5 } = {}) {
  const url = new URL(API);
  for (const [key, value] of Object.entries({ ...params, format: "json", formatversion: "2" })) {
    url.searchParams.set(key, String(value));
  }
  let lastError = null;
  for (let attempt = 0; attempt < retries; attempt += 1) {
    const wait = lastRequestAt + REQUEST_INTERVAL_MS - Date.now();
    if (wait > 0) await sleep(wait);
    lastRequestAt = Date.now();
    try {
      const response = await fetch(url, { headers: HEADERS });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      if (payload.error) throw new Error(`API ${payload.error.code}: ${payload.error.info}`);
      return payload;
    } catch (error) {
      lastError = error;
      const backoff = 3000 * (attempt + 1);
      console.warn(`  请求失败（${error.message}），${backoff}ms 后重试（${attempt + 1}/${retries}）`);
      await sleep(backoff);
    }
  }
  throw lastError;
}

/** 列出所有嵌入 {{舰娘图鉴}} 的页面标题。 */
async function listShipPages() {
  const titles = [];
  let continuation = {};
  for (;;) {
    const payload = await api({
      action: "query",
      list: "embeddedin",
      eititle: TEMPLATE_TITLE,
      einamespace: 0,
      eilimit: 500,
      ...continuation,
    });
    for (const item of payload.query?.embeddedin ?? []) titles.push(item.title);
    if (!payload.continue) break;
    continuation = payload.continue;
  }
  return titles;
}

/** 去掉 wikitext 中的标记，留下可读文本。 */
function cleanWikitext(value) {
  return value
    .replace(/<ref[^>]*>[\s\S]*?<\/ref>/g, "")
    .replace(/<ref[^>]*\/>/g, "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/\[\[[^\]|]*\|([^\]]*)\]\]/g, "$1")
    .replace(/\[\[([^\]]*)\]\]/g, "$1")
    .replace(/\{\{[^{}]*\}\}/g, "")
    .replace(/\[https?:\/\/\S+\s*([^\]]*)\]/g, "$1")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/'''?/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/[ \t\u00a0]+/g, " ")
    .trim();
}

function parseTemplateFields(wikitext) {
  const fields = {};
  for (const line of wikitext.split("\n")) {
    const match = /^\s*\|\s*([^=|[\]{}<>]+?)\s*=\s*(.*)$/.exec(line);
    if (!match) continue;
    const key = match[1].trim();
    if (!SHIP_FIELDS.includes(key) || key in fields) continue;
    fields[key] = cleanWikitext(match[2]);
  }
  return fields;
}

async function fetchShipPages(titles) {
  const ships = {};
  for (let index = 0; index < titles.length; index += BATCH_SIZE) {
    const batch = titles.slice(index, index + BATCH_SIZE);
    const payload = await api({
      action: "query",
      prop: "revisions",
      rvprop: "content",
      rvslots: "main",
      titles: batch.join("|"),
      redirects: 1,
    });
    for (const page of payload.query?.pages ?? []) {
      const content = page.revisions?.[0]?.slots?.main?.content;
      if (typeof content !== "string") continue;
      ships[page.title] = parseTemplateFields(content);
    }
    const done = Math.min(index + BATCH_SIZE, titles.length);
    console.log(`  舰船页面 ${done}/${titles.length}`);
  }
  return ships;
}

function toIsoDate(text) {
  const match = /(\d{4})年(\d{1,2})月(\d{1,2})日/.exec(text ?? "");
  if (!match) return null;
  return `${match[1]}-${match[2].padStart(2, "0")}-${match[3].padStart(2, "0")}`;
}

/** 解析活动表：日期 → 该次更新中出现的活动名。 */
function parseEventPage(wikitext) {
  const byDate = {};
  let currentDate = null;
  for (const rawLine of wikitext.split("\n")) {
    const line = rawLine.trim();
    if (line.startsWith(";")) {
      currentDate = toIsoDate(line);
      continue;
    }
    if (!currentDate || !line.startsWith(":")) continue;
    const names = [];
    for (const match of line.matchAll(/『([^』]+)』/g)) {
      names.push(match[1].trim());
    }
    if (!names.length) continue;
    const bucket = (byDate[currentDate] ??= []);
    for (const name of names) if (!bucket.includes(name)) bucket.push(name);
  }
  return byDate;
}

async function main() {
  await mkdir(dataDir, { recursive: true });

  console.log("[1/3] 列出舰船页面…");
  const titles = await listShipPages();
  console.log(`  共 ${titles.length} 个页面`);

  console.log("[2/3] 抓取舰船数据…");
  const ships = await fetchShipPages(titles);
  const shipsPath = resolve(dataDir, "bwiki-ships.json");
  await writeFile(shipsPath, `${JSON.stringify(ships, null, 1)}\n`, "utf8");
  console.log(`  已写入 ${shipsPath}（${Object.keys(ships).length} 条）`);

  console.log("[3/3] 抓取活动表…");
  const payload = await api({ action: "parse", page: EVENT_PAGE, prop: "wikitext", redirects: 1 });
  const eventWikitext = payload.parse?.wikitext;
  if (typeof eventWikitext !== "string") throw new Error("活动表页面没有返回 wikitext。");
  const events = parseEventPage(eventWikitext);
  const eventsPath = resolve(dataDir, "bwiki-events.json");
  await writeFile(eventsPath, `${JSON.stringify(events, null, 1)}\n`, "utf8");
  const dates = Object.keys(events).sort();
  console.log(`  已写入 ${eventsPath}（${dates.length} 个日期，${dates[0]} ~ ${dates.at(-1)}）`);
  console.log("完成。");
}

await main();
