/**
 * 反馈表的语言设置。
 *
 * 题库里每一列都存了多套写法（`@zh` 国服中文、`@en` 原版数据，以后可加 `@ja`）。
 * 这里决定游戏页显示哪一套：中文 / 英文是一键预设，自定义则逐列选择。
 * 判定不受影响 —— 它固定使用各标签的 primaryVariant（题库里是 `@zh`）。
 */
import type { TagDefinition } from "./game-core";

export type DisplayMode = "zh" | "en" | "custom";

export type DisplaySettings = {
  mode: DisplayMode;
  /** 自定义模式下逐列选的写法，键是标签 id。 */
  columns: Record<string, string>;
};

export const DISPLAY_STORAGE_KEY = "hangyiba:display:v2";

export const DEFAULT_DISPLAY_SETTINGS: DisplaySettings = { mode: "zh", columns: {} };

export const DISPLAY_PRESETS: Array<{ value: DisplayMode; label: string; detail: string }> = [
  { value: "zh", label: "中文", detail: "全部用国服中文" },
  { value: "en", label: "英文", detail: "全部用原版数据" },
  { value: "custom", label: "自定义", detail: "每一列单独设置" },
];

export const VARIANT_LABELS: Record<string, string> = { zh: "中文", en: "英文", ja: "日文" };

/** 该列在当前语言设置下应该显示哪一套写法。 */
export function resolveVariant(tag: TagDefinition, settings: DisplaySettings): string {
  if (settings.mode === "zh") return tag.variants?.includes("zh") ? "zh" : "";
  if (settings.mode === "en") return tag.variants?.includes("en") ? "en" : "";
  // 自定义：优先用玩家逐列选过的写法，否则跟随题库里的默认（中文）
  return settings.columns[String(tag.id)] ?? tag.displayVariant ?? "zh";
}

/** 解析 localStorage 里的设置；早期版本把英文预设写成 "original"，这里顺带迁移。 */
export function parseDisplaySettings(raw: string | null): DisplaySettings | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as { mode?: unknown; columns?: unknown };
    const mode = parsed.mode === "original" ? "en" : parsed.mode;
    if (mode !== "zh" && mode !== "en" && mode !== "custom") return null;
    const columns = parsed.columns && typeof parsed.columns === "object"
      ? Object.fromEntries(
          Object.entries(parsed.columns as Record<string, unknown>)
            .filter((entry): entry is [string, string] => typeof entry[1] === "string"),
        )
      : {};
    return { mode, columns };
  } catch {
    return null;
  }
}
