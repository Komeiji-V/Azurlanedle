export type MatchState = "match" | "close" | "miss";
export type TagKind = "exact" | "exact-close" | "ordered" | "category" | "exact-multi" | "category-multi";

export type TagValueEntry = {
  value: string;
  category?: string;
};

export type TagDefinition = {
  id: number;
  name: string;
  kind: TagKind;
  unit: string;
  /**
   * 该列默认显示哪一套写法（空串为主方案）。判定始终用主方案，这里只影响显示。
   */
  displayVariant?: string;
  /** 该列可选的附加写法（如 "zh"、"en"），用于游戏页的语言切换。 */
  variants?: string[];
  /** 判定用哪一套写法，题库里每列的第一列就是它。 */
  primaryVariant?: string;
};

export type CharacterValue = {
  tagId: number;
  value: string;
  category?: string;
  entries?: TagValueEntry[];
};

export type GuessFeedback = {
  tagId: number;
  value: string;
  category?: string;
  matches?: TagValueEntry[];
  matchedCategories?: string[];
  matchedValues?: string[];
  state: MatchState;
  direction?: "higher" | "lower";
};

export function normalizeName(value: string) {
  return value.trim().toLocaleLowerCase("zh-CN").replace(/[\s·・_-]/g, "");
}

function entriesFor(item: CharacterValue | undefined): TagValueEntry[] {
  if (item?.entries) {
    return item.entries
      .map((entry) => ({ value: entry.value.trim(), ...(entry.category?.trim() ? { category: entry.category.trim() } : {}) }))
      .filter((entry) => entry.value || entry.category);
  }
  if (!item) return [];
  return [{ value: item.value, ...(item.category ? { category: item.category } : {}) }];
}

function sameEntry(left: TagValueEntry, right: TagValueEntry) {
  return normalizeName(left.value) === normalizeName(right.value) &&
    normalizeName(left.category ?? "") === normalizeName(right.category ?? "");
}

function uniqueEntries(entries: TagValueEntry[]) {
  return entries.filter((entry, index) => entries.findIndex((candidate) => sameEntry(candidate, entry)) === index);
}

function uniqueNames(values: string[]) {
  return values.filter((value, index) => values.findIndex((candidate) => normalizeName(candidate) === normalizeName(value)) === index);
}

function parseExactCloseValue(source: string) {
  const separatorIndex = source.indexOf(">");
  if (separatorIndex < 0) return { primary: source.trim(), close: [] as string[] };
  return {
    primary: source.slice(0, separatorIndex).trim(),
    close: source.slice(separatorIndex + 1).split("|").map((item) => item.trim()).filter(Boolean),
  };
}

export type OrderedValue = {
  /** 用于比较的数值，单位随取值类型而定。 */
  number: number;
  /** 相差不超过该值即判为“接近”。 */
  threshold: number;
  /** 取值类型，用于展示与测试。 */
  kind: "number" | "duration" | "date";
  /** 展示时作为次要信息的前缀，目前只有日期型取值会带。 */
  prefix?: string;
};

/**
 * 解析有序标签的取值，支持三种写法：
 * - 纯数字，如 `1997`：相差不超过 5 判为接近（与航一把行为一致）
 * - 建造时间 `HH:MM:SS`：按秒比较，相差不超过 5 分钟判为接近
 * - 日期开头的文本，如 `2018-12-13 异色格`：按天比较，相差不超过 30 天判为接近
 * 无法解析的取值（如“无法建造”）返回 null，此时只判命中或不符，不给方向箭头。
 */
export function parseOrderedValue(source: string): OrderedValue | null {
  const text = source.trim();
  if (!text) return null;

  const dateMatch = /^(\d{4})-(\d{2})-(\d{2})/.exec(text);
  if (dateMatch) {
    const timestamp = Date.UTC(Number(dateMatch[1]), Number(dateMatch[2]) - 1, Number(dateMatch[3]));
    if (Number.isFinite(timestamp)) {
      return {
        number: Math.floor(timestamp / 86_400_000),
        threshold: 30,
        kind: "date",
        prefix: `${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}`,
      };
    }
  }

  const durationMatch = /^(\d{1,3}):([0-5]\d):([0-5]\d)$/.exec(text);
  if (durationMatch) {
    return {
      number: Number(durationMatch[1]) * 3600 + Number(durationMatch[2]) * 60 + Number(durationMatch[3]),
      threshold: 300,
      kind: "duration",
    };
  }

  if (/^-?\d+(?:\.\d+)?$/.test(text)) {
    return { number: Number(text), threshold: 5, kind: "number" };
  }

  return null;
}

/** 有序标签的展示拆分：日期型取值把日期与后面的名称分开显示。 */
export function splitOrderedDisplay(value: string): { prefix: string; text: string } {
  // 先 trim：parseOrderedValue 能容忍前导空白，但按 prefix.length 切片会在原串上切错位
  const trimmed = value.trim();
  const ordered = parseOrderedValue(trimmed);
  if (ordered?.kind === "date" && ordered.prefix) {
    return { prefix: ordered.prefix, text: trimmed.slice(ordered.prefix.length).trim() };
  }
  return { prefix: "", text: trimmed };
}

export function compareGuess(
  tags: TagDefinition[],
  guessValues: CharacterValue[],
  answerValues: CharacterValue[],
): GuessFeedback[] {
  const guessed = new Map(guessValues.map((item) => [item.tagId, item]));
  const answer = new Map(answerValues.map((item) => [item.tagId, item]));

  return tags.map((tag) => {
    const guessedValue = guessed.get(tag.id);
    const answerValue = answer.get(tag.id);
    // 比较一律用真实取值（缺值即空串），只有展示才用「未知」占位符：
    // 否则同一语义（两侧都没有该标签的取值）会因为「字段缺失」还是「空串」得到相反结果。
    const guessedRaw = guessedValue?.value ?? "";
    const value = guessedValue?.value ?? "未知";
    const target = answerValue?.value ?? "";
    const category = guessedValue?.category?.trim() ?? "";
    const targetCategory = answerValue?.category?.trim() ?? "";

    if (tag.kind === "exact-close") {
      const guessedLabel = parseExactCloseValue(guessedRaw).primary;
      const displayLabel = guessedLabel || value;
      const targetLabels = parseExactCloseValue(target);
      if (normalizeName(guessedLabel) === normalizeName(targetLabels.primary)) {
        return { tagId: tag.id, value: displayLabel, state: "match" };
      }
      if (targetLabels.close.some((label) => normalizeName(guessedLabel) === normalizeName(label))) {
        return { tagId: tag.id, value: displayLabel, state: "close" };
      }
      return { tagId: tag.id, value: displayLabel, state: "miss" };
    }

    if (tag.kind === "category-multi") {
      const guessedEntries = entriesFor(guessedValue);
      const answerEntries = entriesFor(answerValue);
      const matchedCategories = uniqueNames(
        guessedEntries
          .map((entry) => entry.category?.trim() ?? "")
          .filter((guessedCategory) => guessedCategory && answerEntries.some((entry) => normalizeName(entry.category ?? "") === normalizeName(guessedCategory))),
      );
      const matchedValues = uniqueNames(
        guessedEntries
          .map((entry) => entry.value.trim())
          .filter((guessedSmallValue) => guessedSmallValue && answerEntries.some((entry) => normalizeName(entry.value) === normalizeName(guessedSmallValue))),
      );
      const hasMatchedEmptyValue = guessedEntries.some((guessedEntry) => {
        const guessedCategory = guessedEntry.category?.trim() ?? "";
        return guessedCategory && !guessedEntry.value.trim() && answerEntries.some((answerEntry) => (
          !answerEntry.value.trim() &&
          normalizeName(answerEntry.category ?? "") === normalizeName(guessedCategory)
        ));
      });

      if (matchedCategories.length && (matchedValues.length || hasMatchedEmptyValue)) {
        return {
          tagId: tag.id,
          value: matchedValues.join("、"),
          matchedCategories,
          matchedValues,
          state: "match",
        };
      }
      if (matchedCategories.length) {
        return { tagId: tag.id, value: "无小类匹配", matchedCategories, matchedValues: [], state: "close" };
      }
      return { tagId: tag.id, value: "无匹配", matchedCategories: [], matchedValues: [], state: "miss" };
    }

    if (tag.kind === "exact-multi") {
      const guessedEntries = entriesFor(guessedValue);
      const answerEntries = entriesFor(answerValue);
      const exactMatches = uniqueEntries(guessedEntries.filter((entry) => answerEntries.some((targetEntry) => sameEntry(entry, targetEntry))));
      if (exactMatches.length) {
        return { tagId: tag.id, value: exactMatches.map((entry) => entry.value).join("、"), matches: exactMatches, state: "match" };
      }
      return { tagId: tag.id, value: "无匹配", matches: [], state: "miss" };
    }

    if (
      normalizeName(guessedRaw) === normalizeName(target) &&
      (tag.kind !== "category" || normalizeName(category) === normalizeName(targetCategory))
    ) {
      return { tagId: tag.id, value, ...(category ? { category } : {}), state: "match" };
    }

    if (
      tag.kind === "category" &&
      category &&
      targetCategory &&
      normalizeName(category) === normalizeName(targetCategory)
    ) {
      return { tagId: tag.id, value, category, state: "close" };
    }

    if (tag.kind === "ordered") {
      const guessOrdered = parseOrderedValue(guessedRaw);
      const answerOrdered = parseOrderedValue(target);
      if (guessOrdered && answerOrdered) {
        // 与原版 Azurlanedle 一致：解析后的数值相等就是命中，不再给方向箭头
        if (guessOrdered.number === answerOrdered.number) {
          return { tagId: tag.id, value, state: "match" };
        }
        const distance = Math.abs(guessOrdered.number - answerOrdered.number);
        const threshold = Math.max(guessOrdered.threshold, answerOrdered.threshold);
        return {
          tagId: tag.id,
          value,
          state: distance <= threshold ? "close" : "miss",
          direction: guessOrdered.number < answerOrdered.number ? "higher" : "lower",
        };
      }
    }

    return { tagId: tag.id, value, ...(category ? { category } : {}), state: "miss" };
  });
}
