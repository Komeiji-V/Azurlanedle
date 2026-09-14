import type { TagDefinition, TagKind, TagValueEntry } from "./game-core";
import { bundledOfficialCatalogs } from "./default-catalog.generated";

export type LocalTag = {
  id: number;
  name: string;
  kind: TagKind;
  unit: string;
  active: boolean;
  /** 默认显示的写法（"zh" / "en" / 以后可能加的 "ja"）。 */
  displayVariant: string;
  /** 判定使用哪一套写法，题库里是该标签的第一列。 */
  primaryVariant: string;
};

export type LocalCharacter = {
  id: number;
  name: string;
  aliases: string[];
  active: boolean;
};

export type LocalValue = {
  characterId: number;
  tagId: number;
  /** 写法标识：空串是主方案（判定用），其他为附加方案。 */
  variant: string;
  value: string;
  category?: string;
  entries?: TagValueEntry[];
};

export type LocalCatalog = {
  tags: LocalTag[];
  characters: LocalCharacter[];
  values: LocalValue[];
};

export type CatalogRecord = {
  id: string;
  name: string;
  official: boolean;
  catalog: LocalCatalog;
};

export type CatalogLibrary = {
  catalogs: CatalogRecord[];
  playCatalogId: string;
  editCatalogId: string;
};

export type LocalStorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem">;

export type CatalogMutation =
  | {
      action: "saveTag";
      id?: number;
      name?: string;
      kind?: TagKind;
      unit?: string;
      active?: boolean;
      displayVariant?: string;
    }
  | { action: "deleteTag"; id: number }
  | {
      action: "saveCharacter";
      id?: number;
      name?: string;
      aliases?: string[];
      active?: boolean;
      values?: Record<string, string>;
      categories?: Record<string, string>;
      multiValues?: Record<string, string>;
    }
  | { action: "deleteCharacter"; id: number };

const CATALOG_STORAGE_KEY = "hangyiba:catalog:v1";
const CATALOG_LIBRARY_STORAGE_KEY = "hangyiba:catalog-library:v2";
const ACTIVE_GAMES_STORAGE_KEY = "hangyiba:games:v1";
export const STANDARD_GAME_CATALOG_NAME = "航一把题库";

function getBundledOfficialCatalog(index: number) {
  const source = bundledOfficialCatalogs[index];
  if (!source) throw new Error("没有可用的内置官方题库。");
  return source;
}

function getBundledOfficialCatalogByName(name: string) {
  const source = bundledOfficialCatalogs.find((catalog) => catalog.name === name);
  if (!source) throw new Error(`没有找到内置官方题库“${name}”。`);
  return source;
}

function officialCatalogId(path: string): string {
  return `official:${encodeURIComponent(path)}`;
}

const DEFAULT_OFFICIAL_CATALOG_ID = officialCatalogId(getBundledOfficialCatalog(0).path);

function createBundledCatalog(source: LocalCatalog): LocalCatalog {
  return sortCatalog({
    tags: source.tags.map((tag) => ({ ...tag })),
    characters: source.characters.map((character) => ({ ...character, aliases: [...character.aliases] })),
    values: source.values.map((item) => ({
      ...item,
      ...(item.entries ? { entries: item.entries.map((entry) => ({ ...entry })) } : {}),
    })),
  });
}

export function createDefaultCatalog(): LocalCatalog {
  return createBundledCatalog(getBundledOfficialCatalog(0).catalog);
}

export function createCloseMatchCatalog(): LocalCatalog {
  return createBundledCatalog(getBundledOfficialCatalog(1).catalog);
}

export function createStandardGameCatalog(): LocalCatalog {
  return createBundledCatalog(getBundledOfficialCatalogByName(STANDARD_GAME_CATALOG_NAME).catalog);
}

function getBrowserStorage(): LocalStorageLike | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function cloneCatalog(catalog: LocalCatalog): LocalCatalog {
  return {
    tags: catalog.tags.map((tag) => ({ ...tag })),
    characters: catalog.characters.map((character) => ({ ...character, aliases: [...character.aliases] })),
    values: catalog.values.map((item) => ({ ...item, ...(item.entries ? { entries: item.entries.map((entry) => ({ ...entry })) } : {}) })),
  };
}

function createOfficialCatalogs(): CatalogRecord[] {
  return bundledOfficialCatalogs.map((source) => ({
    id: officialCatalogId(source.path),
    name: source.name,
    official: true,
    catalog: createBundledCatalog(source.catalog),
  }));
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isTagKind(value: unknown): value is TagKind {
  return ["exact", "exact-close", "ordered", "category", "exact-multi", "category-multi"].includes(String(value));
}

export function parseMultiValueText(source: string, singleValueAsCategory = false): TagValueEntry[] {
  return source
    .split(/\r?\n|\s*\|\s*/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const separatorIndex = part.indexOf(">");
      if (separatorIndex < 0) return singleValueAsCategory ? { category: part, value: "" } : { value: part };
      const category = part.slice(0, separatorIndex).trim();
      const value = part.slice(separatorIndex + 1).trim();
      return { value, ...(category ? { category } : {}) };
    })
    .filter((entry) => entry.value || entry.category);
}

export function formatMultiValueText(entries: TagValueEntry[] | undefined, separator = "\n") {
  return (entries ?? []).map((entry) => {
    const category = entry.category?.trim() ?? "";
    const value = entry.value.trim();
    return category && value ? `${category} > ${value}` : category || value;
  }).join(separator);
}

function parseCatalog(value: string): LocalCatalog | null {
  try {
    const parsed: unknown = JSON.parse(value);
    if (!isRecord(parsed) || !Array.isArray(parsed.tags) || !Array.isArray(parsed.characters) || !Array.isArray(parsed.values)) {
      return null;
    }

    const tags = parsed.tags.map((item) => {
      if (!isRecord(item) || typeof item.name !== "string") return null;
      const id = Number(item.id);
      if (!Number.isInteger(id)) return null;
      return {
        id,
        name: item.name,
        kind: isTagKind(item.kind) ? item.kind : "exact",
        unit: typeof item.unit === "string" ? item.unit : "",
        active: item.active !== false && item.active !== 0,
        displayVariant: typeof item.displayVariant === "string" ? item.displayVariant : "",
        primaryVariant: typeof item.primaryVariant === "string" ? item.primaryVariant : "zh",
      };
    });
    const characters = parsed.characters.map((item) => {
      if (!isRecord(item) || typeof item.name !== "string") return null;
      const id = Number(item.id);
      if (!Number.isInteger(id)) return null;
      const aliases = Array.isArray(item.aliases)
        ? item.aliases.filter((alias): alias is string => typeof alias === "string")
        : [];
      return { id, name: item.name, aliases, active: item.active !== false && item.active !== 0 };
    });
    const values = parsed.values.map((item) => {
      if (!isRecord(item) || typeof item.value !== "string") return null;
      const characterId = Number(item.characterId);
      const tagId = Number(item.tagId);
      if (!Number.isInteger(characterId) || !Number.isInteger(tagId)) return null;
      const entries = Array.isArray(item.entries)
        ? item.entries
            .filter((entry): entry is Record<string, unknown> => isRecord(entry) && typeof entry.value === "string")
            .map((entry) => ({
              value: String(entry.value).trim(),
              ...(typeof entry.category === "string" && entry.category.trim() ? { category: entry.category.trim() } : {}),
            }))
            .filter((entry) => entry.value || entry.category)
        : undefined;
      return {
        characterId,
        tagId,
        variant: typeof item.variant === "string" ? item.variant : "",
        value: item.value,
        ...(typeof item.category === "string" && item.category.trim() ? { category: item.category.trim() } : {}),
        ...(entries ? { entries } : {}),
      };
    });

    if (tags.some((item) => item === null) || characters.some((item) => item === null) || values.some((item) => item === null)) {
      return null;
    }
    return sortCatalog({
      tags: tags as LocalTag[],
      characters: characters as LocalCharacter[],
      values: values as LocalValue[],
    });
  } catch {
    return null;
  }
}

/**
 * 标签按题库中定义的顺序（id）排列。
 * 反馈表、标签后台与导出的 CSV 都用这个顺序，玩家按「稀有度 → 阵营 → 舰种 → 舰级 →
 * 建造时间 → 实装活动 → 声优」的固定次阅读反馈，比按名称首字排序直观得多。
 */
export function sortTags(tags: LocalTag[]): LocalTag[] {
  return [...tags].sort((a, b) => a.id - b.id);
}

function sortCatalog(catalog: LocalCatalog): LocalCatalog {
  return {
    tags: sortTags(catalog.tags),
    characters: [...catalog.characters].sort((a, b) => a.name.localeCompare(b.name, "zh-CN")),
    values: [...catalog.values].sort((a, b) =>
      a.characterId - b.characterId || a.tagId - b.tagId || a.variant.localeCompare(b.variant)),
  };
}

export function loadLocalCatalog(storage: LocalStorageLike | null = getBrowserStorage()): LocalCatalog {
  const library = loadCatalogLibrary(storage);
  return cloneCatalog(library.catalogs.find((item) => item.id === library.playCatalogId)?.catalog ?? createDefaultCatalog());
}

export function saveLocalCatalog(catalog: LocalCatalog, storage: LocalStorageLike | null = getBrowserStorage()) {
  if (!storage) return;
  const library = loadCatalogLibrary(storage);
  const editing = library.catalogs.find((item) => item.id === library.editCatalogId);
  if (editing && !editing.official) {
    updatePlayerCatalog(editing.id, catalog, storage);
    return;
  }
  const created = createPlayerCatalog(`${editing?.name ?? "题库"} 副本`, catalog, storage);
  selectPlayCatalog(created.id, storage);
}

export function resetLocalCatalog(storage: LocalStorageLike | null = getBrowserStorage()): LocalCatalog {
  const catalog = createDefaultCatalog();
  saveLocalCatalog(catalog, storage);
  return catalog;
}

type StoredCatalogLibrary = {
  players: Array<{ id: string; name: string; catalog: LocalCatalog }>;
  playCatalogId: string;
  editCatalogId: string;
  officialCatalogVersions: Record<string, string>;
};

function getOfficialCatalogVersions(): Record<string, string> {
  return Object.fromEntries(bundledOfficialCatalogs.map((source) => [
    officialCatalogId(source.path),
    source.sha256,
  ]));
}

function parseStoredCatalogLibrary(value: string | null): StoredCatalogLibrary | null {
  if (!value) return null;
  try {
    const parsed: unknown = JSON.parse(value);
    if (!isRecord(parsed) || !Array.isArray(parsed.players)) return null;
    // 逐条容错：某一条玩家题库损坏时只丢弃它，不能把整个库判为无效 ——
    // 否则只要有一条脏数据，其余完好的题库都会被当成「没有存档」而清空。
    const players = parsed.players.flatMap((item) => {
      if (!isRecord(item) || typeof item.id !== "string" || typeof item.name !== "string") return [];
      const catalog = parseCatalog(JSON.stringify(item.catalog));
      if (!catalog || !item.id.startsWith("player:") || !item.name.trim()) return [];
      return [{ id: item.id, name: item.name.trim(), catalog }];
    });
    return {
      players,
      playCatalogId: typeof parsed.playCatalogId === "string" ? parsed.playCatalogId : DEFAULT_OFFICIAL_CATALOG_ID,
      editCatalogId: typeof parsed.editCatalogId === "string" ? parsed.editCatalogId : DEFAULT_OFFICIAL_CATALOG_ID,
      officialCatalogVersions: isRecord(parsed.officialCatalogVersions)
        ? Object.fromEntries(Object.entries(parsed.officialCatalogVersions).filter((entry): entry is [string, string] => typeof entry[1] === "string"))
        : {},
    };
  } catch {
    return null;
  }
}

function serializeCatalogLibrary(library: CatalogLibrary): string {
  const validIds = new Set(library.catalogs.map((item) => item.id));
  return JSON.stringify({
    players: library.catalogs
      .filter((item) => !item.official)
      .map((item) => ({ id: item.id, name: item.name, catalog: sortCatalog(cloneCatalog(item.catalog)) })),
    playCatalogId: validIds.has(library.playCatalogId) ? library.playCatalogId : DEFAULT_OFFICIAL_CATALOG_ID,
    editCatalogId: validIds.has(library.editCatalogId) ? library.editCatalogId : DEFAULT_OFFICIAL_CATALOG_ID,
    officialCatalogVersions: getOfficialCatalogVersions(),
  } satisfies StoredCatalogLibrary);
}

function persistCatalogLibrary(library: CatalogLibrary, storage: LocalStorageLike) {
  storage.setItem(CATALOG_LIBRARY_STORAGE_KEY, serializeCatalogLibrary(library));
}

export function loadCatalogLibrary(storage: LocalStorageLike | null = getBrowserStorage()): CatalogLibrary {
  const officials = createOfficialCatalogs();
  if (!storage) return { catalogs: officials, playCatalogId: DEFAULT_OFFICIAL_CATALOG_ID, editCatalogId: DEFAULT_OFFICIAL_CATALOG_ID };

  let stored = parseStoredCatalogLibrary(storage.getItem(CATALOG_LIBRARY_STORAGE_KEY));
  if (!stored) {
    const legacy = parseCatalog(storage.getItem(CATALOG_STORAGE_KEY) ?? "");
    stored = legacy
      ? { players: [{ id: "player:1", name: "我的题库", catalog: legacy }], playCatalogId: "player:1", editCatalogId: "player:1", officialCatalogVersions: getOfficialCatalogVersions() }
      : { players: [], playCatalogId: DEFAULT_OFFICIAL_CATALOG_ID, editCatalogId: DEFAULT_OFFICIAL_CATALOG_ID, officialCatalogVersions: getOfficialCatalogVersions() };
  }

  const currentOfficialVersions = getOfficialCatalogVersions();
  const selectedOfficialVersion = currentOfficialVersions[stored.playCatalogId];
  if (selectedOfficialVersion && stored.officialCatalogVersions[stored.playCatalogId] !== selectedOfficialVersion) {
    storage.removeItem(ACTIVE_GAMES_STORAGE_KEY);
  }

  const catalogs: CatalogRecord[] = [
    ...officials,
    ...stored.players.map((item) => ({ ...item, official: false, catalog: cloneCatalog(item.catalog) })),
  ];
  const ids = new Set(catalogs.map((item) => item.id));
  const library = {
    catalogs,
    playCatalogId: ids.has(stored.playCatalogId) ? stored.playCatalogId : DEFAULT_OFFICIAL_CATALOG_ID,
    editCatalogId: ids.has(stored.editCatalogId) ? stored.editCatalogId : DEFAULT_OFFICIAL_CATALOG_ID,
  };
  // 读路径只在确有必要时修复写回：内容没变就不落盘；写失败（配额满、隐私模式）
  // 也不能把异常抛回 useEffect，否则 React 会卸载整棵树变成白屏。
  const serialized = serializeCatalogLibrary(library);
  if (storage.getItem(CATALOG_LIBRARY_STORAGE_KEY) !== serialized) {
    try {
      storage.setItem(CATALOG_LIBRARY_STORAGE_KEY, serialized);
    } catch {
      // 内存里的结果照常返回，写入失败留给后续显式操作去提示
    }
  }
  return library;
}

function nextPlayerCatalogId(catalogs: CatalogRecord[]): string {
  const highest = catalogs.reduce((value, item) => {
    const match = /^player:(\d+)$/.exec(item.id);
    return Math.max(value, match ? Number(match[1]) : 0);
  }, 0);
  return `player:${highest + 1}`;
}

export function createEmptyCatalog(): LocalCatalog {
  return { tags: [], characters: [], values: [] };
}

export function createPlayerCatalog(
  name: string,
  catalog: LocalCatalog = createEmptyCatalog(),
  storage: LocalStorageLike | null = getBrowserStorage(),
): CatalogRecord {
  const trimmedName = name.trim();
  if (!trimmedName) throw new Error("题库名称不能为空。");
  const library = loadCatalogLibrary(storage);
  const record = { id: nextPlayerCatalogId(library.catalogs), name: trimmedName, official: false, catalog: sortCatalog(cloneCatalog(catalog)) };
  library.catalogs.push(record);
  library.editCatalogId = record.id;
  if (storage) persistCatalogLibrary(library, storage);
  return { ...record, catalog: cloneCatalog(record.catalog) };
}

export function copyCatalog(catalogId: string, storage: LocalStorageLike | null = getBrowserStorage()): CatalogRecord {
  const source = loadCatalogLibrary(storage).catalogs.find((item) => item.id === catalogId);
  if (!source) throw new Error("题库不存在。");
  return createPlayerCatalog(`${source.name} 副本`, source.catalog, storage);
}

export function updatePlayerCatalog(
  catalogId: string,
  catalog: LocalCatalog,
  storage: LocalStorageLike | null = getBrowserStorage(),
) {
  const library = loadCatalogLibrary(storage);
  const record = library.catalogs.find((item) => item.id === catalogId);
  if (!record) throw new Error("题库不存在。");
  if (record.official) throw new Error("官方题库不能直接修改，请先创建副本。");
  record.catalog = sortCatalog(cloneCatalog(catalog));
  if (storage) persistCatalogLibrary(library, storage);
}

export function renamePlayerCatalog(catalogId: string, name: string, storage: LocalStorageLike | null = getBrowserStorage()) {
  const trimmedName = name.trim();
  if (!trimmedName) throw new Error("题库名称不能为空。");
  const library = loadCatalogLibrary(storage);
  const record = library.catalogs.find((item) => item.id === catalogId);
  if (!record) throw new Error("题库不存在。");
  if (record.official) throw new Error("官方题库不能重命名。");
  record.name = trimmedName;
  if (storage) persistCatalogLibrary(library, storage);
}

export function deletePlayerCatalog(catalogId: string, storage: LocalStorageLike | null = getBrowserStorage()) {
  const library = loadCatalogLibrary(storage);
  const record = library.catalogs.find((item) => item.id === catalogId);
  if (!record) throw new Error("题库不存在。");
  if (record.official) throw new Error("官方题库不能删除。");
  library.catalogs = library.catalogs.filter((item) => item.id !== catalogId);
  const wasPlaying = library.playCatalogId === catalogId;
  if (wasPlaying) library.playCatalogId = DEFAULT_OFFICIAL_CATALOG_ID;
  if (library.editCatalogId === catalogId) library.editCatalogId = DEFAULT_OFFICIAL_CATALOG_ID;
  if (storage) {
    persistCatalogLibrary(library, storage);
    if (wasPlaying) storage.removeItem(ACTIVE_GAMES_STORAGE_KEY);
  }
}

function selectCatalog(kind: "playCatalogId" | "editCatalogId", catalogId: string, storage: LocalStorageLike | null) {
  const library = loadCatalogLibrary(storage);
  if (!library.catalogs.some((item) => item.id === catalogId)) throw new Error("题库不存在。");
  library[kind] = catalogId;
  if (storage) persistCatalogLibrary(library, storage);
}

export function selectPlayCatalog(catalogId: string, storage: LocalStorageLike | null = getBrowserStorage()) {
  const currentId = loadCatalogLibrary(storage).playCatalogId;
  selectCatalog("playCatalogId", catalogId, storage);
  if (storage && currentId !== catalogId) storage.removeItem(ACTIVE_GAMES_STORAGE_KEY);
}

export function selectEditCatalog(catalogId: string, storage: LocalStorageLike | null = getBrowserStorage()) {
  selectCatalog("editCatalogId", catalogId, storage);
}

export function getActiveTags(catalog: LocalCatalog): LocalTag[] {
  return sortTags(catalog.tags.filter((tag) => tag.active));
}

export function getActiveCharacters(catalog: LocalCatalog): LocalCharacter[] {
  return catalog.characters.filter((character) => character.active).sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
}

export function toTagDefinitions(tags: LocalTag[], values: LocalValue[] = []): TagDefinition[] {
  // 每列有哪些附加写法，供游戏页的「中文 / 原版」整体切换使用
  const variantsByTag = new Map<number, string[]>();
  for (const value of values) {
    if (!value.variant) continue;
    const list = variantsByTag.get(value.tagId) ?? [];
    if (!list.includes(value.variant)) list.push(value.variant);
    variantsByTag.set(value.tagId, list);
  }
  return tags.map(({ id, name, kind, unit, displayVariant, primaryVariant }) => ({
    id,
    name,
    kind,
    unit,
    displayVariant,
    primaryVariant,
    variants: (variantsByTag.get(id) ?? []).sort(),
  }));
}

function nextId(items: Array<{ id: number }>) {
  return items.reduce((highest, item) => Math.max(highest, item.id), 0) + 1;
}

function assertUniqueName(items: Array<{ id: number; name: string }>, name: string, id?: number) {
  if (items.some((item) => item.name === name && item.id !== id)) {
    throw new Error(`名称“${name}”已经存在。`);
  }
}

/**
 * 后台编辑表单要显示的行：一个标签只取判定列（primaryVariant），取不到再退回显示列、
 * 最后退回该标签的第一行。若直接取全部写法，同标签的多套写法会互相覆盖，
 * 表单显示的可能不是判定列，保存后又写回判定列，把判定值覆盖掉。
 */
export function characterValuesForEditing(catalog: LocalCatalog, characterId: number): LocalValue[] {
  const tagsById = new Map(catalog.tags.map((tag) => [tag.id, tag]));
  const tagIds = [...new Set(
    catalog.values.filter((item) => item.characterId === characterId).map((item) => item.tagId),
  )];
  return tagIds.map((tagId) => {
    const rows = catalog.values.filter((item) => item.characterId === characterId && item.tagId === tagId);
    const tag = tagsById.get(tagId);
    return rows.find((item) => item.variant === (tag?.primaryVariant ?? ""))
      ?? rows.find((item) => item.variant === (tag?.displayVariant ?? ""))
      ?? rows[0];
  });
}

function updateCharacterValues(
  catalog: LocalCatalog,
  characterId: number,
  values: Record<string, string> = {},
  categories: Record<string, string> = {},
  multiValues: Record<string, string> = {},
) {
  const tagsById = new Map(catalog.tags.map((tag) => [tag.id, tag]));
  // 按「舰船+标签+写法」建索引，逐格编辑只覆盖判定列，其它语言写法原样保留
  const valueMap = new Map(catalog.values.map((item) => [`${item.characterId}:${item.tagId}:${item.variant}`, item]));
  // 只填了「大类」的 category 标签不会出现在 values 里，必须一并纳入待处理集合
  const tagIds = new Set([...Object.keys(values), ...Object.keys(categories), ...Object.keys(multiValues)]);
  for (const tagIdText of tagIds) {
    const value = values[tagIdText] ?? "";
    const tagId = Number(tagIdText);
    const tag = tagsById.get(tagId);
    if (!Number.isInteger(tagId) || !tag) continue;
    // 写回该标签的判定列，避免和题库里的 @zh 分叉
    const variant = tag.primaryVariant || "zh";
    if (tag.kind === "exact-multi" || tag.kind === "category-multi") {
      const entries = parseMultiValueText(multiValues[tagIdText] ?? value, tag.kind === "category-multi");
      const first = entries[0];
      valueMap.set(`${characterId}:${tagId}:${variant}`, {
        characterId,
        tagId,
        variant,
        value: first?.value ?? "",
        ...(first?.category ? { category: first.category } : {}),
        entries,
      });
      continue;
    }
    const category = categories[tagIdText]?.trim() ?? "";
    valueMap.set(`${characterId}:${tagId}:${variant}`, {
      characterId,
      tagId,
      variant,
      value: value.trim(),
      ...(category ? { category } : {}),
    });
  }
  catalog.values = [...valueMap.values()];
}

export function applyCatalogMutation(catalog: LocalCatalog, mutation: CatalogMutation): LocalCatalog {
  const next = cloneCatalog(catalog);

  if (mutation.action === "saveTag") {
    const name = mutation.name?.trim() ?? "";
    if (!name) throw new Error("标签名不能为空。");
    assertUniqueName(next.tags, name, mutation.id);
    const existing = next.tags.find((item) => item.id === mutation.id);
    const tag: LocalTag = {
      id: mutation.id ?? nextId(next.tags),
      name,
      kind: isTagKind(mutation.kind) ? mutation.kind : "exact",
      unit: mutation.unit?.trim() ?? "",
      active: mutation.active !== false,
      displayVariant: mutation.displayVariant ?? existing?.displayVariant ?? "",
      primaryVariant: existing?.primaryVariant ?? "zh",
    };
    const index = next.tags.findIndex((item) => item.id === tag.id);
    if (index >= 0) next.tags[index] = tag;
    else next.tags.push(tag);
    return sortCatalog(next);
  }

  if (mutation.action === "deleteTag") {
    if (!next.tags.some((tag) => tag.id === mutation.id)) throw new Error("标签不存在。");
    next.tags = next.tags.filter((tag) => tag.id !== mutation.id);
    next.values = next.values.filter((item) => item.tagId !== mutation.id);
    return sortCatalog(next);
  }

  if (mutation.action === "saveCharacter") {
    const name = mutation.name?.trim() ?? "";
    if (!name) throw new Error("舰船名不能为空。");
    assertUniqueName(next.characters, name, mutation.id);
    const character = {
      id: mutation.id ?? nextId(next.characters),
      name,
      aliases: [...new Set((mutation.aliases ?? []).map((alias) => alias.trim()).filter(Boolean))],
      active: mutation.active !== false,
    };
    const index = next.characters.findIndex((item) => item.id === character.id);
    if (index >= 0) next.characters[index] = character;
    else next.characters.push(character);
    updateCharacterValues(next, character.id, mutation.values, mutation.categories, mutation.multiValues);
    return sortCatalog(next);
  }

  if (!next.characters.some((character) => character.id === mutation.id)) throw new Error("舰船不存在。");
  next.characters = next.characters.filter((character) => character.id !== mutation.id);
  next.values = next.values.filter((item) => item.characterId !== mutation.id);
  return sortCatalog(next);
}
