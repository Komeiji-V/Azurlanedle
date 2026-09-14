/**
 * Azurlanedle 的 Skill / Luck 评估与 Bot 最优路径回放。
 *
 * 算法移植自原版 Python 实现（main.py 的 eval_skill_entropy / eval_luck_entropy / sim_play）：
 * - Skill：当前候选集下，这一步的信息熵相对最优/最差猜测的归一化排名（0-100）
 * - Luck：这一步把答案留在了多大的分支里，分支越小越走运（0-100）
 * - Bot 路径：每步都选信息熵最高的猜测，直到猜中
 *
 * 为了让 828×828 的反馈表能在浏览器里算得动，这里把每个取值预先归一化、提前解析有序值，
 * 反馈分组用「答案索引数组」而不是位图，单次评分只需遍历每个猜测的全部分组，总体是 O(n²)。
 * 判定语义与 game-core 的 compareGuess 保持一致，并有对照测试覆盖。
 */
import {
  compareGuess,
  parseOrderedValue,
  type CharacterValue,
  type OrderedValue,
  type TagDefinition,
  type TagValueEntry,
} from "./game-core";

function normalize(value: string): string {
  return value.trim().toLocaleLowerCase("zh-CN").replace(/[\s·・_-]/g, "");
}

type PreparedEntry = TagValueEntry & { normalized: string };

type PreparedValue = {
  normalized: string;
  ordered: OrderedValue | null;
  entries: PreparedEntry[];
};

export type EvalShip = {
  index: number;
  id: number;
  name: string;
  values: Map<number, PreparedValue>;
};

function prepareValue(value: CharacterValue): PreparedValue {
  const entries = value.entries ?? [{
    value: value.value,
    ...(value.category ? { category: value.category } : {}),
  }];
  return {
    normalized: normalize(value.value),
    ordered: parseOrderedValue(value.value),
    entries: entries
      .map((entry) => ({ ...entry, normalized: normalize(entry.value) }))
      .filter((entry) => entry.normalized),
  };
}

export function prepareShips(
  characters: ReadonlyArray<{ id: number; name: string }>,
  values: ReadonlyArray<CharacterValue & { characterId: number; variant?: string }>,
  tags: ReadonlyArray<{ id: number; primaryVariant?: string }> = [],
): EvalShip[] {
  // 同一列存了多套语言写法，判定只认各标签指定的那一列
  const primaryByTag = new Map(tags.map((tag) => [tag.id, tag.primaryVariant ?? "zh"]));
  const byCharacter = new Map<number, Map<number, PreparedValue>>();
  for (const value of values) {
    if (tags.length && value.variant !== primaryByTag.get(value.tagId)) continue;
    let bucket = byCharacter.get(value.characterId);
    if (!bucket) {
      bucket = new Map();
      byCharacter.set(value.characterId, bucket);
    }
    bucket.set(value.tagId, prepareValue(value));
  }
  return characters.map((character, index) => ({
    index,
    id: character.id,
    name: character.name,
    values: byCharacter.get(character.id) ?? new Map(),
  }));
}

function toCharacterValue(tagId: number, value: PreparedValue | undefined): CharacterValue {
  return {
    tagId,
    value: value?.entries[0]?.value ?? "",
    entries: value?.entries.map((entry) => ({
      value: entry.value,
      ...(entry.category ? { category: entry.category } : {}),
    })),
  };
}

/** 单个标签的反馈签名：签名相同即代表玩家看到的反馈完全一样，属于同一分支。 */
function feedbackSignature(
  tag: TagDefinition,
  guess: PreparedValue | undefined,
  answer: PreparedValue | undefined,
): string {
  const guessText = guess?.normalized ?? "";
  const answerText = answer?.normalized ?? "";

  if (tag.kind === "ordered") {
    const guessOrdered = guess?.ordered ?? null;
    const answerOrdered = answer?.ordered ?? null;
    if (guessOrdered && answerOrdered) {
      // 与原版一致：解析后的数值相等即命中（compareGuess 同款判断）。
      // 少了这一档会把「完全命中」和「接近且同方向」并成同一个分支，
      // 从而高估剩余候选数、污染后续每一步的 Skill / Luck。
      if (guessOrdered.number === answerOrdered.number) return "y";
      const distance = Math.abs(guessOrdered.number - answerOrdered.number);
      const threshold = Math.max(guessOrdered.threshold, answerOrdered.threshold);
      const state = distance <= threshold ? "c" : "m";
      return `${state}${guessOrdered.number < answerOrdered.number ? "u" : "d"}`;
    }
    return guessText === answerText ? "y" : "n";
  }

  if (tag.kind === "exact-multi") {
    const guessEntries = guess?.entries ?? [];
    const answerEntries = answer?.entries ?? [];
    const matched = guessEntries
      .filter((entry) => answerEntries.some((target) => target.normalized === entry.normalized))
      .map((entry) => entry.normalized)
      .sort();
    return matched.length ? `y:${matched.join("|")}` : "n";
  }

  // 航一把题库不使用这几种类型，退化到通用实现，保证语义完全一致
  if (tag.kind === "category" || tag.kind === "category-multi" || tag.kind === "exact-close") {
    return JSON.stringify(compareGuess([tag], [toCharacterValue(tag.id, guess)], [toCharacterValue(tag.id, answer)]));
  }

  return guessText === answerText ? "y" : "n";
}

function signatureFor(tags: readonly TagDefinition[], guess: EvalShip, answer: EvalShip): string {
  let signature = "";
  for (const tag of tags) {
    signature += `${feedbackSignature(tag, guess.values.get(tag.id), answer.values.get(tag.id))};`;
  }
  return signature;
}

export type FeedbackIndex = {
  /** branches[guessIndex] 是该猜测的所有反馈分支，每个分支是答案在 ships 里的下标数组。 */
  branches: Int32Array[][];
};

/** 预计算每个猜测的「反馈签名 → 候选集合」，对应原版的 guess_fb_map。 */
export function buildFeedbackIndex(
  ships: readonly EvalShip[],
  tags: readonly TagDefinition[],
): FeedbackIndex {
  const branches: Int32Array[][] = [];
  for (let guessIndex = 0; guessIndex < ships.length; guessIndex += 1) {
    const groups = new Map<string, number[]>();
    for (let answerIndex = 0; answerIndex < ships.length; answerIndex += 1) {
      if (guessIndex === answerIndex) continue;
      const signature = signatureFor(tags, ships[guessIndex], ships[answerIndex]);
      const bucket = groups.get(signature);
      if (bucket) bucket.push(answerIndex);
      else groups.set(signature, [answerIndex]);
    }
    branches.push([...groups.values()].map((ids) => Int32Array.from(ids)));
  }
  return { branches };
}

/** 候选集的布尔标记，配合 count 使用。 */
export type CandidateSet = {
  flags: Uint8Array;
  count: number;
};

function fullCandidates(size: number): CandidateSet {
  return { flags: new Uint8Array(size).fill(1), count: size };
}

function keepCandidates(candidates: CandidateSet, ids: Int32Array): CandidateSet {
  const flags = new Uint8Array(candidates.flags.length);
  let count = 0;
  for (let index = 0; index < ids.length; index += 1) {
    const id = ids[index];
    if (candidates.flags[id]) {
      flags[id] = 1;
      count += 1;
    }
  }
  return { flags, count };
}

/**
 * 计算每个猜测在当前候选集下的信息熵，并按原版方式归一化到 0-100。
 * 原版把「猜中即结束」那一支排除在 guess_fb_map 之外，因此这里按候选集内/外分别补偿。
 */
function skillScores(index: FeedbackIndex, candidates: CandidateSet): Float64Array {
  const size = index.branches.length;
  const scores = new Float64Array(size);

  // 候选只剩一个：猜它就是最优，与原版返回 100 分一致
  if (candidates.count <= 1) {
    if (candidates.count === 1) {
      const onlyIndex = candidates.flags.indexOf(1);
      if (onlyIndex >= 0) scores[onlyIndex] = 100;
    }
    return scores;
  }

  const raw = new Float64Array(size);
  let best = -Infinity;
  let worst = Infinity;

  for (let guessIndex = 0; guessIndex < size; guessIndex += 1) {
    let entropy = 0;
    for (const ids of index.branches[guessIndex]) {
      let branchSize = 0;
      for (let position = 0; position < ids.length; position += 1) {
        if (candidates.flags[ids[position]]) branchSize += 1;
      }
      if (branchSize === 0) continue;
      const probability = branchSize / candidates.count;
      entropy -= probability * Math.log2(probability);
    }
    if (candidates.flags[guessIndex]) {
      const probability = 1 / candidates.count;
      entropy -= probability * Math.log2(probability);
    } else {
      entropy /= 2;
    }
    raw[guessIndex] = entropy;
    if (entropy > best) best = entropy;
    if (entropy < worst) worst = entropy;
  }

  if (best > 0 && best > worst) {
    for (let guessIndex = 0; guessIndex < size; guessIndex += 1) {
      scores[guessIndex] = Math.round((100 * (raw[guessIndex] - worst)) / (best - worst));
    }
  }
  return scores;
}

function branchCounts(index: FeedbackIndex, guessIndex: number, candidates: CandidateSet, answerIndex: number) {
  const branchList = index.branches[guessIndex];
  const sizes = new Int32Array(branchList.length);
  let answerBranch = -1;
  for (let branch = 0; branch < branchList.length; branch += 1) {
    const ids = branchList[branch];
    let count = 0;
    for (let position = 0; position < ids.length; position += 1) {
      const id = ids[position];
      if (!candidates.flags[id]) continue;
      count += 1;
      if (id === answerIndex) answerBranch = branch;
    }
    sizes[branch] = count;
  }
  return { sizes, answerSize: answerBranch >= 0 ? sizes[answerBranch] : -1 };
}

function luckScore(index: FeedbackIndex, guessIndex: number, candidates: CandidateSet, answerIndex: number): number {
  if (guessIndex === answerIndex) return 100;
  const { sizes, answerSize } = branchCounts(index, guessIndex, candidates, answerIndex);
  let lowest = candidates.flags[guessIndex] ? 0 : candidates.count;
  let highest = 0;
  for (let branch = 0; branch < sizes.length; branch += 1) {
    const size = sizes[branch];
    // 空分支在实际对局中不会出现，原版同样跳过
    if (size === 0) continue;
    if (size < lowest) lowest = size;
    if (size > highest) highest = size;
  }
  if (highest > lowest) {
    const target = answerSize >= 0 ? answerSize : 0;
    return Math.max(0, Math.min(100, Math.round((100 * (highest - target)) / (highest - lowest))));
  }
  return highest === 0 ? 100 : 50;
}

function bestGuess(scores: Float64Array): number {
  let bestIndex = 0;
  let bestScore = -Infinity;
  for (let guessIndex = 0; guessIndex < scores.length; guessIndex += 1) {
    if (scores[guessIndex] > bestScore) {
      bestScore = scores[guessIndex];
      bestIndex = guessIndex;
    }
  }
  return bestIndex;
}

export type EvalStep = {
  guessName: string;
  skill: number;
  luck: number;
  botGuessName: string;
  remainingCount: number;
  remainingNames: string[];
};

export type EvalResult = {
  steps: EvalStep[];
  botPath: string[];
  averageSkill: number;
  averageLuck: number;
  comment: string;
};

const REMAINING_NAME_LIMIT = 8;

function advance(candidates: CandidateSet, index: FeedbackIndex, guessIndex: number, answerIndex: number): CandidateSet {
  const signature = index.branches[guessIndex].find((ids) => ids.includes(answerIndex));
  if (!signature) return { flags: new Uint8Array(candidates.flags.length), count: 0 };
  return keepCandidates(candidates, signature);
}

function simulateBot(
  ships: readonly EvalShip[],
  index: FeedbackIndex,
  answerIndex: number,
  candidates: CandidateSet,
  limit = 12,
): string[] {
  const path: string[] = [];
  let current = candidates;
  while (current.count > 0 && path.length < limit) {
    const scores = skillScores(index, current);
    const guessIndex = bestGuess(scores);
    path.push(ships[guessIndex].name);
    if (guessIndex === answerIndex) break;
    current = advance(current, index, guessIndex, answerIndex);
  }
  return path;
}

function commentFor(steps: readonly EvalStep[], averageSkill: number, averageLuck: number): string {
  if (!steps.length) return "本局没有提交任何猜测。";
  if (steps.length === 1) return "一发入魂！你是不是偷看了答案？";
  if (steps.every((step) => step.skill === 100)) return "教科书级的路线，每一步都踩在最优解上！";
  if (averageLuck > 80) return "这次运气好得离谱，下次可没这么走运了～";
  if (averageSkill < 20) return "这条路线……连圣地亚哥都能猜得比你好。";
  if (averageSkill > 50) return "嗯，至少你努力过了，下次会更好。";
  return "练度不够，明天再来！";
}

export type EvaluateOptions = {
  ships: readonly EvalShip[];
  tags: readonly TagDefinition[];
  answerIndex: number;
  /** 玩家猜过的船在 ships 里的下标，按先后顺序。 */
  guessedIndexes: readonly number[];
  index?: FeedbackIndex;
};

export function evaluateGame({ ships, tags, answerIndex, guessedIndexes, index }: EvaluateOptions): EvalResult {
  if (!ships.length || !tags.length) throw new Error("题库为空，无法评估。");
  const feedbackIndex = index ?? buildFeedbackIndex(ships, tags);
  let candidates = fullCandidates(ships.length);
  const steps: EvalStep[] = [];

  for (const guessIndex of guessedIndexes) {
    const scores = skillScores(feedbackIndex, candidates);
    const skill = scores[guessIndex] ?? 0;
    const luck = luckScore(feedbackIndex, guessIndex, candidates, answerIndex);
    const botIndex = bestGuess(scores);
    const next = advance(candidates, feedbackIndex, guessIndex, answerIndex);
    const remainingNames = next.count > 0 && next.count <= REMAINING_NAME_LIMIT
      ? [...next.flags].flatMap((flag, shipIndex) => (flag ? [ships[shipIndex].name] : []))
      : [];
    steps.push({
      guessName: ships[guessIndex].name,
      skill,
      luck,
      botGuessName: ships[botIndex].name,
      remainingCount: next.count,
      remainingNames,
    });
    candidates = next.count > 0 ? next : candidates;
    if (guessIndex === answerIndex) break;
  }

  const average = (values: number[]) => values.length
    ? values.reduce((sum, value) => sum + value, 0) / values.length
    : null;
  const averageSkill = average(steps.map((step) => step.skill)) ?? 0;
  const averageLuck = average(steps.map((step) => step.luck)) ?? 0;

  return {
    steps,
    botPath: simulateBot(ships, feedbackIndex, answerIndex, fullCandidates(ships.length)),
    averageSkill,
    averageLuck,
    comment: commentFor(steps, averageSkill, averageLuck),
  };
}
