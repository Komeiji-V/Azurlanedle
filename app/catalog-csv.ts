import {
  escapeCategoryName,
  findCategorySeparator,
  formatMultiValueText,
  parseMultiValueText,
  sortTags,
  unescapeCategoryName,
  type LocalCatalog,
  type LocalCharacter,
  type LocalTag,
  type LocalValue,
} from "./local-catalog";
import type { TagKind } from "./game-core";

export const CSV_BASE_HEADERS = ["舰船名", "别名", "启用"] as const;

export type CatalogCsvPreview = {
  headers: string[];
  tagNames: string[];
  tagKinds: TagKind[];
  /** 每列对应的写法：空串是主方案，其他为附加方案（zh / ja / original …）。 */
  tagVariants: string[];
  rows: string[][];
};

export type CatalogCsvImportMode = "append" | "replace";

export const CATEGORY_VALUE_SEPARATOR = " > ";

const TAG_KINDS: readonly TagKind[] = ["exact", "exact-close", "ordered", "category", "exact-multi", "category-multi"];
const TAG_HEADER_PATTERN = /^(.+?)(?:@([A-Za-z0-9_-]+))?（类型：(exact|exact-close|ordered|category|exact-multi|category-multi)）$/;

function formatTagHeader(tag: Pick<LocalTag, "name" | "kind">, variant = ""): string {
  return `${tag.name}${variant ? `@${variant}` : ""}（类型：${tag.kind}）`;
}

/** 收集每个标签出现了哪些写法，用于导出多列（玩家自建标签可能仍在用空写法）。 */
function collectVariants(catalog: LocalCatalog): Map<number, string[]> {
  const byTag = new Map<number, string[]>();
  for (const value of catalog.values) {
    const list = byTag.get(value.tagId) ?? [];
    if (!list.includes(value.variant)) list.push(value.variant);
    byTag.set(value.tagId, list);
  }
  const primaryByTag = new Map(catalog.tags.map((tag) => [tag.id, tag.primaryVariant ?? ""]));
  for (const [tagId, list] of byTag) {
    // 判定列必须排在该标签的第一列：导入时按「第一列即判定列」重建 primaryVariant，
    // 若按名字排序（@en 排在 @zh 前），导出再导入一次就会把判定列悄悄换成英文写法。
    const primary = primaryByTag.get(tagId) ?? "";
    list.sort((left, right) => {
      if (left === right) return 0;
      if (left === primary) return -1;
      if (right === primary) return 1;
      return left.localeCompare(right);
    });
  }
  return byTag;
}

function parseTagHeader(header: string): Pick<LocalTag, "name" | "kind"> & { variant: string } {
  const match = TAG_HEADER_PATTERN.exec(header);
  const name = match?.[1].trim() ?? "";
  const kind = match?.[3];
  if (!name || !TAG_KINDS.includes(kind as TagKind)) {
    throw new Error(`CSV 标签列表头“${header}”格式无效，应为“标签名（类型：类型代码）”。`);
  }
  return { name, kind: kind as TagKind, variant: match?.[2] ?? "" };
}

function parseTagValue(rawValue: string, tag: LocalTag): Pick<LocalValue, "value" | "category" | "entries"> {
  if (tag.kind === "exact-multi" || tag.kind === "category-multi") {
    const entries = parseMultiValueText(rawValue, tag.kind === "category-multi");
    const first = entries[0];
    return {
      value: first?.value ?? "",
      ...(first?.category ? { category: first.category } : {}),
      entries,
    };
  }
  if (tag.kind !== "category") return { value: rawValue };
  // 只认第一个未被转义的 `>`：这样「大类 > 小类」里小类为空（行尾空格被 CSV 读取去掉）
  // 以及大类名本身含 `>` 两种情况都能正确还原
  const separatorIndex = findCategorySeparator(rawValue);
  if (separatorIndex < 0) return { value: rawValue };
  const category = unescapeCategoryName(rawValue.slice(0, separatorIndex));
  const value = rawValue.slice(separatorIndex + 1).trim();
  return { value, ...(category ? { category } : {}) };
}

function parseCsvRows(source: string): string[][] {
  const text = source.replace(/^\uFEFF/, "");
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (quoted) {
      if (character === '"' && text[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (character === '"') {
        quoted = false;
      } else {
        field += character;
      }
      continue;
    }

    if (character === '"') quoted = true;
    else if (character === ",") {
      row.push(field);
      field = "";
    } else if (character === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (character !== "\r") field += character;
  }

  if (quoted) throw new Error("CSV 中存在未闭合的双引号。");
  if (field || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((item) => item.some((cell) => cell.trim() !== ""));
}

export function getCatalogCsvHeaders(catalog: LocalCatalog): string[] {
  const variants = collectVariants(catalog);
  return [
    ...CSV_BASE_HEADERS,
    ...sortTags(catalog.tags).flatMap((tag) => (variants.get(tag.id) ?? []).map((variant) => formatTagHeader(tag, variant))),
  ];
}

export function hasSameCsvHeaders(catalog: LocalCatalog, preview: CatalogCsvPreview): boolean {
  // 一个标签可能导出成多列（主方案 + 各套写法），比较时按去重后的标签名
  const currentTagNames = catalog.tags.map((tag) => tag.name).sort();
  const previewTagNames = [...new Set(preview.tagNames)].sort();
  return currentTagNames.length === previewTagNames.length
    && currentTagNames.every((name, index) => name === previewTagNames[index]);
}

export function parseCatalogCsv(source: string): CatalogCsvPreview {
  const rows = parseCsvRows(source);
  if (rows.length === 0) throw new Error("CSV 文件为空。");

  const headers = rows[0].map((header) => header.trim());
  if (headers.length < CSV_BASE_HEADERS.length) throw new Error("CSV 表头缺少舰船名、别名或启用列。");
  if (!CSV_BASE_HEADERS.every((header, index) => headers[index] === header)) {
    throw new Error(`CSV 前三列表头必须依次为：${CSV_BASE_HEADERS.join("、")}。`);
  }
  if (headers.some((header) => !header)) throw new Error("CSV 表头不能包含空列名。");
  if (new Set(headers).size !== headers.length) throw new Error("CSV 表头不能包含重复列名。");

  const csvTags = headers.slice(CSV_BASE_HEADERS.length).map(parseTagHeader);
  const tagNames = csvTags.map((tag) => tag.name);
  const columnKeys = csvTags.map((tag) => `${tag.name}\u0000${tag.variant}`);
  if (new Set(columnKeys).size !== columnKeys.length) {
    throw new Error("CSV 表头不能包含重复的标签列。");
  }

  const dataRows = rows.slice(1).map((row, index) => {
    if (row.length > headers.length) throw new Error(`CSV 第 ${index + 2} 行的列数多于表头。`);
    return Array.from({ length: headers.length }, (_, column) => row[column]?.trim() ?? "");
  });
  if (dataRows.length === 0) throw new Error("CSV 中没有舰船数据。");
  const names = dataRows.map((row) => row[0]);
  if (names.some((name) => !name)) throw new Error("CSV 中的舰船名不能为空。");
  if (new Set(names).size !== names.length) throw new Error("CSV 中不能包含重复舰船名。");

  return {
    headers,
    tagNames,
    tagKinds: csvTags.map((tag) => tag.kind),
    tagVariants: csvTags.map((tag) => tag.variant),
    rows: dataRows,
  };
}

function parseActive(value: string): boolean {
  const normalized = value.trim().toLowerCase();
  if (["", "1", "true", "是", "启用", "yes"].includes(normalized)) return true;
  if (["0", "false", "否", "停用", "no"].includes(normalized)) return false;
  throw new Error(`无法识别启用状态“${value}”，请填写是/否或 1/0。`);
}

function createCharactersAndValues(
  rows: string[][],
  columns: Array<{ tag: LocalTag; variant: string }>,
  firstId: number,
) {
  const characters: LocalCharacter[] = [];
  const values: LocalValue[] = [];
  rows.forEach((row, index) => {
    const characterId = firstId + index;
    characters.push({
      id: characterId,
      name: row[0],
      aliases: [...new Set(row[1].split(/[、|｜]/).map((alias) => alias.trim()).filter(Boolean))],
      active: parseActive(row[2]),
    });
    columns.forEach((column, columnIndex) => {
      values.push({
        characterId,
        tagId: column.tag.id,
        variant: column.variant,
        ...parseTagValue(row[CSV_BASE_HEADERS.length + columnIndex] ?? "", column.tag),
      });
    });
  });
  return { characters, values };
}

export function importCatalogCsv(
  catalog: LocalCatalog,
  preview: CatalogCsvPreview,
  mode: CatalogCsvImportMode,
): LocalCatalog {
  const sameHeaders = hasSameCsvHeaders(catalog, preview);
  if (mode === "append" && !sameHeaders) throw new Error("CSV 表头与当前题库不同，只能选择替换。");

  if (mode === "append") {
    const existingNames = new Set(catalog.characters.map((character) => character.name));
    const duplicate = preview.rows.find((row) => existingNames.has(row[0]));
    if (duplicate) throw new Error(`舰船“${duplicate[0]}”已存在；添加模式不会覆盖现有舰船。`);
    const firstId = catalog.characters.reduce((highest, character) => Math.max(highest, character.id), 0) + 1;
    const currentTagsByName = new Map(catalog.tags.map((tag) => [tag.name, tag]));
    const columns = preview.tagNames.map((name, index) => {
      const tag = currentTagsByName.get(name)!;
      // 表头没写 @写法 时对齐到既有标签的判定列：写成空串的话判定层取不到这些值，
      // 新加的舰船会整船判为「未知 / 不符」
      return { tag, variant: preview.tagVariants[index] || tag.primaryVariant || "" };
    });
    const tags = sortTags(catalog.tags);
    const additions = createCharactersAndValues(preview.rows, columns, firstId);
    return {
      tags,
      characters: [...catalog.characters, ...additions.characters].sort((a, b) => a.name.localeCompare(b.name, "zh-CN")),
      values: [...catalog.values, ...additions.values].sort((a, b) =>
        a.characterId - b.characterId || a.tagId - b.tagId || a.variant.localeCompare(b.variant)),
    };
  }

  // 同一个标签的多套写法（列名带 @方案）合并成同一个标签
  const tagList: LocalTag[] = [];
  const tagIndexByName = new Map<string, number>();
  const usedIds = new Set<number>();
  let nextId = 1;
  const allocateId = () => {
    while (usedIds.has(nextId)) nextId += 1;
    usedIds.add(nextId);
    return nextId;
  };
  preview.tagNames.forEach((name, index) => {
    if (tagIndexByName.has(name)) return;
    const kind = preview.tagKinds[index];
    const existing = catalog.tags.find((tag) => tag.name === name && tag.kind === kind);
    tagIndexByName.set(name, tagList.length);
    // 该标签的第一列作为判定列
    const primaryVariant = preview.tagVariants[index] ?? "";
    // 同名同类型的老标签沿用原 id：显示语言设置是按 tag id 记录的，
    // 重新按列顺序编号会让原有的逐列设置落到别的列上
    let tagId: number;
    if (existing && !usedIds.has(existing.id)) {
      tagId = existing.id;
      usedIds.add(tagId);
    } else {
      tagId = allocateId();
    }
    tagList.push(existing
      ? { ...existing, id: tagId, primaryVariant }
      : { id: tagId, name, kind, unit: "", active: true, displayVariant: "zh", primaryVariant });
  });
  const columns = preview.tagNames.map((name, index) => ({
    tag: tagList[tagIndexByName.get(name)!],
    variant: preview.tagVariants[index] ?? "",
  }));
  const replacement = createCharactersAndValues(preview.rows, columns, 1);
  return { tags: sortTags(tagList), ...replacement };
}

function csvCell(value: string): string {
  return /[",\r\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value;
}

export function exportCatalogCsv(catalog: LocalCatalog): string {
  const tags = sortTags(catalog.tags);
  const variants = collectVariants(catalog);
  // 还没有任何取值的标签也要导出至少一列，否则替换导入时整个标签会连同类型一起消失
  const variantsFor = (tag: LocalTag) => variants.get(tag.id) ?? [tag.primaryVariant ?? ""];
  const headers = [
    ...CSV_BASE_HEADERS,
    ...tags.flatMap((tag) => variantsFor(tag).map((variant) => formatTagHeader(tag, variant))),
  ];
  const valueMap = new Map(catalog.values.map((item) => [`${item.characterId}:${item.tagId}:${item.variant}`, item]));
  const formatValue = (item: LocalValue | undefined, tag: LocalTag) => {
    if (!item) return "";
    if (tag.kind === "exact-multi" || tag.kind === "category-multi") {
      return formatMultiValueText(
        item.entries ?? [{ value: item.value, ...(item.category ? { category: item.category } : {}) }],
        " | ",
      );
    }
    return tag.kind === "category" && item.category
      ? `${escapeCategoryName(item.category)}${CATEGORY_VALUE_SEPARATOR}${item.value}`
      : item.value;
  };
  const rows = catalog.characters.map((character) => [
    character.name,
    character.aliases.join("、"),
    character.active ? "是" : "否",
    ...tags.flatMap((tag) => variantsFor(tag).map((variant) =>
      formatValue(valueMap.get(`${character.id}:${tag.id}:${variant}`), tag))),
  ]);
  return `\uFEFF${[headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n")}\r\n`;
}
