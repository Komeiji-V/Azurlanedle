import assert from "node:assert/strict";
import test from "node:test";
import {
  applyCatalogMutation,
  characterValuesForEditing,
  copyCatalog,
  createStandardGameCatalog,
  createPlayerCatalog,
  createDefaultCatalog,
  deletePlayerCatalog,
  loadCatalogLibrary,
  loadLocalCatalog,
  selectEditCatalog,
  selectPlayCatalog,
  saveLocalCatalog,
  toTagDefinitions,
  updatePlayerCatalog,
  type LocalCatalog,
} from "../app/local-catalog";
import {
  CHALLENGE_EPOCH,
  challengeNumber,
  createNextTenMatchGame,
  createLocalGame,
  createNextUnlimitedGame,
  createSpecifiedLocalGame,
  discardLocalGame,
  expireTenMatchGame,
  getElapsedMs,
  getTenMatchRemainingMs,
  loadActiveGameSessionIds,
  loadGameCatalog,
  loadGameRecords,
  loadLocalGame,
  loadTimingStats,
  recordCompletedTiming,
  saveLocalGame,
  submitLocalGuess,
  TEN_MATCH_INITIAL_MS,
  TEN_MATCH_RULES,
  TEN_MATCH_ROUNDS,
  type TenMatchDifficulty,
} from "../app/local-game";
import {
  exportCatalogCsv,
  hasSameCsvHeaders,
  importCatalogCsv,
  parseCatalogCsv,
} from "../app/catalog-csv";

class MemoryStorage {
  private values = new Map<string, string>();

  getItem(key: string) {
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string) {
    this.values.set(key, value);
  }

  removeItem(key: string) {
    this.values.delete(key);
  }
}

test("默认题库可以在本地存储中读写", () => {
  const storage = new MemoryStorage();
  const catalog = createDefaultCatalog();
  saveLocalCatalog(catalog, storage);

  const loaded = loadLocalCatalog(storage);
  assert.equal(loaded.characters.length, 828);
  assert.equal(loaded.tags.length, 6);
  // 828 艘 × 6 个标签，判定列统一是 @zh
  assert.equal(loaded.values.filter((item) => item.variant === "zh").length, 4968);
  // 其中 5 列另有 @en；建造时间是数字，不需要第二套写法
  assert.equal(loaded.values.filter((item) => item.variant === "en").length, 4140);
  assert.deepEqual(
    loaded.tags.map((tag) => [tag.name, loaded.values.some((item) => item.tagId === tag.id && item.variant === "en")]),
    [
      ["稀有度", true],
      ["阵营", true],
      ["舰种", true],
      ["舰级", true],
      ["建造时间", false],
      ["实装活动", true],
    ],
  );
  assert.equal(loaded.tags.find((item) => item.name === "建造时间")?.kind, "ordered");
  assert.equal(loaded.tags.find((item) => item.name === "实装活动")?.kind, "ordered");
  assert.equal(loaded.tags.find((item) => item.name === "舰种")?.kind, "exact");
  assert.deepEqual(loaded.characters.find((item) => item.name === "高雄")?.aliases, ["獒", "Takao"]);
  assert.deepEqual(loaded.characters.find((item) => item.name === "雪风")?.aliases, ["莲", "Yukikaze"]);
});

test("标准模式题库指向内置的航一把题库", () => {
  const standard = createStandardGameCatalog();
  const legacyDefault = createDefaultCatalog();

  assert.deepEqual(standard, legacyDefault);
});

test("每日、十番战与无限模式忽略玩家选择，自定义模式使用玩家选择的题库", () => {
  const storage = new MemoryStorage();
  const playerCatalog = applyCatalogMutation(createDefaultCatalog(), { action: "saveTag", name: "玩家专属标签" });
  const player = createPlayerCatalog("玩家题库", playerCatalog, storage);
  selectPlayCatalog(player.id, storage);

  assert.equal(loadGameCatalog("daily", storage).tags.some((tag) => tag.name === "玩家专属标签"), false);
  assert.equal(loadGameCatalog("ten", storage).tags.some((tag) => tag.name === "玩家专属标签"), false);
  assert.equal(loadGameCatalog("unlimited", storage).tags.some((tag) => tag.name === "玩家专属标签"), false);
  assert.equal(loadGameCatalog("custom", storage).tags.some((tag) => tag.name === "玩家专属标签"), true);
});

test("题库集合将官方题库排在玩家题库之前并分别保存游玩与编辑选择", () => {
  const storage = new MemoryStorage();
  const initial = loadCatalogLibrary(storage);
  assert.equal(initial.catalogs.length, 1);
  assert.deepEqual(initial.catalogs.map((item) => [item.name, item.official]), [
    ["航一把题库", true],
  ]);

  const first = createPlayerCatalog("玩家甲", createDefaultCatalog(), storage);
  const second = createPlayerCatalog("玩家乙", createDefaultCatalog(), storage);
  storage.setItem("hangyiba:games:v1", "旧的进行中游戏");
  selectPlayCatalog(first.id, storage);
  selectEditCatalog(second.id, storage);

  const loaded = loadCatalogLibrary(storage);
  assert.deepEqual(loaded.catalogs.map((item) => [item.name, item.official]), [
    ["航一把题库", true],
    ["玩家甲", false],
    ["玩家乙", false],
  ]);
  assert.equal(loaded.playCatalogId, first.id);
  assert.equal(loaded.editCatalogId, second.id);
  assert.equal(storage.getItem("hangyiba:games:v1"), null);
});

test("当前官方题库内容更新后会清除旧的进行中游戏", () => {
  const storage = new MemoryStorage();
  const library = loadCatalogLibrary(storage);
  const catalog = loadLocalCatalog(storage);
  saveLocalGame(createLocalGame(catalog, "daily"), storage, catalog);

  const storedLibrary = JSON.parse(storage.getItem("hangyiba:catalog-library:v2")!);
  storedLibrary.officialCatalogVersions[library.playCatalogId] = "outdated";
  storage.setItem("hangyiba:catalog-library:v2", JSON.stringify(storedLibrary));

  loadCatalogLibrary(storage);
  assert.equal(storage.getItem("hangyiba:games:v1"), null);
});

test("未游玩的官方题库更新不会清除玩家题库的进行中游戏", () => {
  const storage = new MemoryStorage();
  const player = createPlayerCatalog("玩家题库", createDefaultCatalog(), storage);
  selectPlayCatalog(player.id, storage);
  const catalog = loadLocalCatalog(storage);
  saveLocalGame(createLocalGame(catalog, "daily"), storage, catalog);

  const storedLibrary = JSON.parse(storage.getItem("hangyiba:catalog-library:v2")!);
  for (const officialId of Object.keys(storedLibrary.officialCatalogVersions)) {
    storedLibrary.officialCatalogVersions[officialId] = "outdated";
  }
  storage.setItem("hangyiba:catalog-library:v2", JSON.stringify(storedLibrary));

  loadCatalogLibrary(storage);
  assert.notEqual(storage.getItem("hangyiba:games:v1"), null);
});

test("官方题库不能删除或直接写入，编辑副本不会改变官方内容", () => {
  const storage = new MemoryStorage();
  const official = loadCatalogLibrary(storage).catalogs[0];
  assert.throws(() => deletePlayerCatalog(official.id, storage), /官方题库不能删除/);
  assert.throws(() => updatePlayerCatalog(official.id, createDefaultCatalog(), storage), /不能直接修改/);

  const copied = copyCatalog(official.id, storage);
  const changed = applyCatalogMutation(copied.catalog, { action: "saveTag", name: "副本标签" });
  updatePlayerCatalog(copied.id, changed, storage);

  const loaded = loadCatalogLibrary(storage);
  assert.equal(loaded.catalogs[0].catalog.tags.some((tag) => tag.name === "副本标签"), false);
  assert.equal(loaded.catalogs.find((item) => item.id === copied.id)?.catalog.tags.some((tag) => tag.name === "副本标签"), true);
});

test("旧版单题库存档会迁移为玩家题库", () => {
  const storage = new MemoryStorage();
  const legacy = applyCatalogMutation(createDefaultCatalog(), { action: "saveTag", name: "旧版标签" });
  storage.setItem("hangyiba:catalog:v1", JSON.stringify(legacy));

  const loaded = loadCatalogLibrary(storage);
  assert.equal(loaded.catalogs.length, 2);
  assert.equal(loaded.catalogs[1].name, "我的题库");
  assert.equal(loaded.playCatalogId, loaded.catalogs[1].id);
  assert.equal(loadLocalCatalog(storage).tags.some((tag) => tag.name === "旧版标签"), true);
});

test("旧题库载入时保留标签原有类型与取值", () => {
  const storage = new MemoryStorage();
  const legacy: LocalCatalog = {
    tags: [
      { id: 1, name: "阵营", kind: "exact", unit: "", active: true, displayVariant: "zh", primaryVariant: "zh" },
      { id: 2, name: "舰种", kind: "exact", unit: "", active: true, displayVariant: "zh", primaryVariant: "zh" },
    ],
    characters: [{ id: 1, name: "测试舰船", aliases: [], active: true }],
    values: [
      { characterId: 1, tagId: 1, variant: "zh", value: "重樱" },
      { characterId: 1, tagId: 2, variant: "zh", value: "重巡" },
    ],
  };
  saveLocalCatalog(legacy, storage);

  const loaded = loadLocalCatalog(storage);
  assert.equal(loaded.tags.find((tag) => tag.name === "阵营")?.kind, "exact");
  assert.equal(loaded.tags.find((tag) => tag.name === "舰种")?.kind, "exact");
  assert.equal(loaded.values.find((item) => item.tagId === 1)?.value, "重樱");
  assert.equal(loaded.characters[0].name, "测试舰船");
});

test("本地后台操作会更新题库并级联清理标签值", () => {
  const catalog = createDefaultCatalog();
  const withTag = applyCatalogMutation(catalog, {
    action: "saveTag",
    name: "瞳色",
  });
  assert.equal(withTag.tags.length, catalog.tags.length + 1);
  assert.equal(withTag.tags.some((tag) => tag.name === "瞳色"), true);
  const eyeColorTag = withTag.tags.find((tag) => tag.name === "瞳色")!;

  const withCharacter = applyCatalogMutation(withTag, {
    action: "saveCharacter",
    name: "测试舰船",
    aliases: ["测试", "测试"],
    values: { [String(eyeColorTag.id)]: "紫色" },
  });
  const character = withCharacter.characters.find((item) => item.name === "测试舰船");
  assert.deepEqual(character?.aliases, ["测试"]);
  assert.equal(withCharacter.values.some((item) => item.characterId === character?.id), true);

  const withoutTag = applyCatalogMutation(withCharacter, {
    action: "deleteTag",
    id: eyeColorTag.id,
  });
  assert.equal(withoutTag.tags.some((tag) => tag.name === "瞳色"), false);
  assert.equal(withoutTag.values.some((item) => item.tagId === eyeColorTag.id), false);
});

test("本地游戏可以用别名完成一局并返回标签反馈", () => {
  const catalog = createDefaultCatalog();
  const game = createLocalGame(catalog, "daily");
  const answer = catalog.characters.find((item) => item.id === game.answerCharacterId)!;
  const input = answer.aliases[0] ?? answer.name;
  const result = submitLocalGuess(catalog, game, input);

  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.answer, answer.name);
  assert.equal(result.game.completed, true);
  assert.equal(result.guess.feedback.length, game.tags.length);
  assert.equal(result.guess.feedback.every((cell) => cell.state === "match"), true);
});

test("计时在第一次有效猜测后开始，并在猜中时冻结", () => {
  const catalog = createDefaultCatalog();
  const game = createLocalGame(catalog, "unlimited");
  const answer = catalog.characters.find((item) => item.id === game.answerCharacterId)!;
  const wrong = catalog.characters.find((item) => item.active && item.id !== answer.id)!;

  const first = submitLocalGuess(catalog, game, wrong.name, 1_000);
  assert.equal(first.ok, true);
  if (!first.ok) return;
  assert.equal(first.guess.guessedAt, 1_000);
  assert.equal(first.guess.elapsedMs, 0);
  assert.equal(first.game.timerStartedAt, 1_000);
  assert.equal(first.game.elapsedMs, 0);
  assert.equal(getElapsedMs(first.game, 3_500), 2_500);

  const won = submitLocalGuess(catalog, first.game, answer.name, 4_000);
  assert.equal(won.ok, true);
  if (!won.ok) return;
  assert.equal(won.guess.guessedAt, 4_000);
  assert.equal(won.guess.elapsedMs, 3_000);
  assert.equal(won.game.completed, true);
  assert.equal(won.game.won, true);
  assert.equal(won.game.timerStartedAt, null);
  assert.equal(won.game.elapsedMs, 3_000);
  assert.equal(getElapsedMs(won.game, 99_000), 3_000);
});

test("十番战四档难度分别应用扣时和答对奖励，且首猜不扣时", () => {
  const catalog = createDefaultCatalog();
  const answer = catalog.characters.find((character) => character.active)!;
  const wrong = catalog.characters.filter((character) => character.active && character.id !== answer.id).slice(0, 8);
  const difficulties: TenMatchDifficulty[] = ["easy", "normal", "hard", "lunatic"];

  for (const difficulty of difficulties) {
    const rules = TEN_MATCH_RULES[difficulty];
    let game = { ...createLocalGame(catalog, "ten", 500, difficulty), answerCharacterId: answer.id };

    const first = submitLocalGuess(catalog, game, wrong[0].name, 1_000);
    assert.equal(first.ok, true);
    if (!first.ok) return;
    game = first.game;
    assert.equal(game.tenMatchDifficulty, difficulty);
    assert.equal(first.timeDeltaMs, 0);
    assert.equal(getTenMatchRemainingMs(game, 1_000), TEN_MATCH_INITIAL_MS);

    for (const [index, penalty] of rules.wrongPenaltiesMs.entries()) {
      const result = submitLocalGuess(catalog, game, wrong[index + 1].name, 2_000 + index * 1_000);
      assert.equal(result.ok, true);
      if (!result.ok) return;
      assert.equal(result.timeDeltaMs, -penalty);
      game = result.game;
    }

    assert.equal(game.attempts, 8);
    assert.equal(game.completed, false);
    const totalPenalty = rules.wrongPenaltiesMs.reduce((sum, penalty) => sum + penalty, 0);
    assert.equal(getTenMatchRemainingMs(game, 8_000), TEN_MATCH_INITIAL_MS - 7_000 - totalPenalty);

    const bonusGame = { ...createLocalGame(catalog, "ten", 500, difficulty), answerCharacterId: answer.id };
    const bonusFirst = submitLocalGuess(catalog, bonusGame, wrong[0].name, 1_000);
    assert.equal(bonusFirst.ok, true);
    if (!bonusFirst.ok) return;
    const won = submitLocalGuess(catalog, bonusFirst.game, answer.name, 2_000);
    assert.equal(won.ok, true);
    if (!won.ok) return;
    assert.equal(won.timeDeltaMs, rules.correctBonusMs);
    assert.equal(won.roundCompleted, true);
    assert.equal(won.game.completed, false);
    assert.equal(won.game.timerStartedAt, 1_000);
    assert.equal(getTenMatchRemainingMs(won.game, 2_000), TEN_MATCH_INITIAL_MS + rules.correctBonusMs - 1_000);
  }
});

test("十番战 Easy 只从可建造的舰船中抽取答案，但仍可输入其它舰船", () => {
  const catalog = createStandardGameCatalog();
  const timerTag = catalog.tags.find((tag) => tag.name === "建造时间")!;
  const buildableIds = new Set(
    catalog.values
      .filter((value) => value.tagId === timerTag.id && /^\d{1,3}:[0-5]\d:[0-5]\d$/.test(value.value.trim()))
      .map((value) => value.characterId),
  );
  const eligible = catalog.characters.filter((character) => character.active && buildableIds.has(character.id));
  const excluded = catalog.characters.find((character) => character.active && !buildableIds.has(character.id))!;
  assert.equal(eligible.length > 0, true);
  assert.equal(Boolean(excluded), true);
  const originalRandom = Math.random;

  try {
    for (let index = 0; index < 30; index += 1) {
      Math.random = () => (index + 0.1) / 30;
      const game = createLocalGame(catalog, "ten", 500, "easy");
      assert.equal(buildableIds.has(game.answerCharacterId), true);
      assert.equal(game.names.includes(excluded.name), true);
    }
  } finally {
    Math.random = originalRandom;
  }
});

test("十番战自动用上一局人物作为下一局首猜，且首猜错误不扣时", () => {
  const catalog = createDefaultCatalog();
  const characters = catalog.characters.filter((character) => character.active);
  const originalRandom = Math.random;
  Math.random = () => 0;
  try {
    const firstGame = { ...createLocalGame(catalog, "ten", 500), answerCharacterId: characters[1].id };
    const won = submitLocalGuess(catalog, firstGame, characters[1].name, 1_000);
    assert.equal(won.ok, true);
    if (!won.ok) return;

    const advanced = createNextTenMatchGame(catalog, won.game, 2_000);
    assert.equal(advanced.game.sessionId, firstGame.sessionId);
    assert.equal(advanced.game.tenMatchRound, 2);
    assert.equal(advanced.game.guesses.length, 1);
    assert.equal(advanced.game.guesses[0].name, characters[1].name);
    assert.equal(advanced.game.tenMatchHistory.length, 1);
    assert.equal(advanced.game.tenMatchHistory[0].answer, characters[1].name);
    assert.equal(advanced.timeDeltaMs, 0);
    assert.equal(advanced.game.timerStartedAt, 1_000);
  } finally {
    Math.random = originalRandom;
  }
});

test("十番战同一组内随机出舰船时排除已出现舰船", () => {
  const catalog = createDefaultCatalog();
  const originalRandom = Math.random;
  Math.random = () => 0;
  try {
    let game = { ...createLocalGame(catalog, "ten", 500), answerCharacterId: catalog.characters[0].id };
    const appearedCharacterIds = new Set([game.answerCharacterId]);

    for (let round = 1; round < TEN_MATCH_ROUNDS; round += 1) {
      const answer = catalog.characters.find((character) => character.id === game.answerCharacterId)!;
      const won = submitLocalGuess(catalog, game, answer.name, 1_000 + round * 1_000);
      assert.equal(won.ok, true);
      if (!won.ok) return;

      const advanced = createNextTenMatchGame(catalog, won.game, 1_500 + round * 1_000);
      assert.equal(appearedCharacterIds.has(advanced.game.answerCharacterId), false);
      appearedCharacterIds.add(advanced.game.answerCharacterId);
      game = advanced.game;
    }

    assert.equal(appearedCharacterIds.size, TEN_MATCH_ROUNDS);
  } finally {
    Math.random = originalRandom;
  }
});

test("十番战恰好进行 10 局，并在历史中作为 1 局保存", () => {
  const catalog = createDefaultCatalog();
  const storage = new MemoryStorage();
  const characters = catalog.characters.filter((character) => character.active);
  const originalRandom = Math.random;
  let nextAnswerIndex = 1;
  Math.random = () => (nextAnswerIndex + 0.1) / characters.length;
  try {
    let game = { ...createLocalGame(catalog, "ten", 500), answerCharacterId: characters[0].id };
    const sessionId = game.sessionId;
    for (let round = 1; round <= TEN_MATCH_ROUNDS; round += 1) {
      const answer = catalog.characters.find((character) => character.id === game.answerCharacterId)!;
      const won = submitLocalGuess(catalog, game, answer.name, 1_000 + round * 1_000);
      assert.equal(won.ok, true);
      if (!won.ok) return;
      game = won.game;
      if (round < TEN_MATCH_ROUNDS) {
        nextAnswerIndex = answer.id === characters[0].id ? 1 : 0;
        game = createNextTenMatchGame(catalog, game, 1_500 + round * 1_000).game;
        assert.equal(game.tenMatchRound, round + 1);
      }
    }

    assert.equal(game.completed, true);
    assert.equal(game.won, true);
    assert.equal(game.tenMatchRound, TEN_MATCH_ROUNDS);
    assert.equal(game.tenMatchHistory.length, TEN_MATCH_ROUNDS - 1);
    assert.equal(game.sessionId, sessionId);
    saveLocalGame(game, storage, catalog);
    const records = loadGameRecords(storage);
    assert.equal(records.length, 1);
    assert.equal(records[0].sessionId, sessionId);
    assert.equal(records[0].mode, "ten");
    assert.equal(records[0].tenMatchDifficulty, "hard");
    assert.equal(records[0].tenMatchRounds?.length, TEN_MATCH_ROUNDS);
    assert.equal(records[0].tenMatchRounds?.every((round) => round.won), true);
  } finally {
    Math.random = originalRandom;
  }
});

test("十番战倒计时归零后结束整组会话", () => {
  const catalog = createDefaultCatalog();
  const game = createLocalGame(catalog, "ten", 500);
  const wrong = catalog.characters.find((character) => character.active && character.id !== game.answerCharacterId)!;
  const first = submitLocalGuess(catalog, game, wrong.name, 1_000);
  assert.equal(first.ok, true);
  if (!first.ok) return;

  const expired = expireTenMatchGame(first.game, 1_000 + TEN_MATCH_INITIAL_MS);
  assert.equal(expired.completed, true);
  assert.equal(expired.won, false);
  assert.equal(expired.timerStartedAt, null);
  assert.equal(getTenMatchRemainingMs(expired, 99_999_999), 0);
});

test("退出每日挑战时放弃当局，但不影响无限模式存档", () => {
  const catalog = createDefaultCatalog();
  const storage = new MemoryStorage();
  const dailyGame = createLocalGame(catalog, "daily", 500);
  const wrong = catalog.characters.find((item) => item.active && item.id !== dailyGame.answerCharacterId)!;
  const first = submitLocalGuess(catalog, dailyGame, wrong.name, 1_000);
  assert.equal(first.ok, true);
  if (!first.ok) return;
  const unlimitedGame = createLocalGame(catalog, "unlimited", 1_500);
  saveLocalGame(first.game, storage, catalog);
  saveLocalGame(unlimitedGame, storage, catalog);

  discardLocalGame(first.game, storage);

  assert.equal(loadLocalGame("daily", catalog, storage), null);
  assert.equal(loadLocalGame("unlimited", catalog, storage)?.sessionId, unlimitedGame.sessionId);
});

test("每次猜测及其时间会以不可直接读取的格式保存到本地", () => {
  const catalog = createDefaultCatalog();
  const storage = new MemoryStorage();
  const game = createLocalGame(catalog, "unlimited");
  const guessed = catalog.characters.find((item) => item.active && item.id !== game.answerCharacterId)!;
  const result = submitLocalGuess(catalog, game, guessed.name, 1_725_000_000_123);
  assert.equal(result.ok, true);
  if (!result.ok) return;

  saveLocalGame(result.game, storage);
  const raw = storage.getItem("hangyiba:games:v1")!;
  assert.match(raw, /^dyb-obf-v1:/);
  assert.equal(raw.includes(guessed.name), false);
  assert.equal(raw.includes(String(result.guess.guessedAt)), false);
  assert.throws(() => JSON.parse(raw));

  const restored = loadLocalGame("unlimited", catalog, storage);
  assert.equal(restored?.guesses.length, 1);
  assert.equal(restored?.guesses[0].name, guessed.name);
  assert.equal(restored?.guesses[0].guessedAt, 1_725_000_000_123);
  assert.equal(restored?.guesses[0].elapsedMs, 0);
});

test("零猜测新局不产生历史，提交猜测后完整日志实时更新", () => {
  const catalog = createDefaultCatalog();
  const storage = new MemoryStorage();
  let game = createLocalGame(catalog, "unlimited", 500);
  const answer = catalog.characters.find((item) => item.id === game.answerCharacterId)!;
  const wrongCharacters = catalog.characters
    .filter((item) => item.active && item.id !== answer.id)
    .slice(0, game.maxAttempts);

  saveLocalGame(game, storage, catalog);
  assert.deepEqual(loadGameRecords(storage), []);

  for (const [index, character] of wrongCharacters.entries()) {
    const result = submitLocalGuess(catalog, game, character.name, (index + 1) * 1_000);
    assert.equal(result.ok, true);
    if (!result.ok) return;
    game = result.game;
    saveLocalGame(game, storage, catalog);
    assert.equal(loadGameRecords(storage).length, 1);
    assert.equal(loadGameRecords(storage)[0].guesses.length, index + 1);
  }

  const record = loadGameRecords(storage)[0];
  assert.equal(record.sessionId, game.sessionId);
  assert.equal(record.createdAt, 500);
  assert.equal(record.startedAt, 1_000);
  assert.equal(record.updatedAt, 8_000);
  assert.equal(record.completedAt, 8_000);
  assert.equal(record.answerCharacterId, answer.id);
  assert.equal(record.answerName, answer.name);
  assert.deepEqual(record.candidateNames, game.names);
  assert.deepEqual(record.tags, game.tags);
  assert.equal(record.completed, true);
  assert.equal(record.won, false);
  assert.equal(record.durationMs, 7_000);
  assert.deepEqual(record.guesses.map((guess) => guess.guessedAt), [1_000, 2_000, 3_000, 4_000, 5_000, 6_000, 7_000, 8_000]);
  assert.deepEqual(record.guesses.map((guess) => guess.elapsedMs), [0, 1_000, 2_000, 3_000, 4_000, 5_000, 6_000, 7_000]);
  assert.equal(record.guesses.every((guess) => guess.feedback.length === game.tags.length), true);

  const raw = storage.getItem("hangyiba:game-records:v1")!;
  assert.match(raw, /^dyb-obf-v1:/);
  assert.equal(raw.includes(answer.name), false);
  assert.throws(() => JSON.parse(raw));
});

test("进入无限模式下一轮后保留上一局，但不记录尚未猜测的新局", () => {
  const catalog = createDefaultCatalog();
  const storage = new MemoryStorage();
  const firstGame = createLocalGame(catalog, "unlimited", 1_000);
  const firstAnswer = catalog.characters.find((item) => item.id === firstGame.answerCharacterId)!;
  const won = submitLocalGuess(catalog, firstGame, firstAnswer.name, 2_000);
  assert.equal(won.ok, true);
  if (!won.ok) return;
  saveLocalGame(won.game, storage, catalog);

  const nextGame = createNextUnlimitedGame(catalog, won.game, 3_000);
  saveLocalGame(nextGame, storage, catalog);
  const records = loadGameRecords(storage);

  assert.equal(records.length, 1);
  assert.deepEqual(records.map((record) => record.sessionId), [won.game.sessionId]);
  assert.equal(records[0].answerName, firstAnswer.name);
  assert.equal(records[0].guesses.length, 1);
  assert.equal(records[0].completed, true);
  assert.equal(nextGame.unlimitedRunId, records[0].unlimitedRunId);
  assert.equal(nextGame.unlimitedRound, 2);
});

test("读取历史时过滤旧版本留下的零猜测记录", () => {
  const catalog = createDefaultCatalog();
  const storage = new MemoryStorage();
  const game = createLocalGame(catalog, "custom", 1_000);
  const answer = catalog.characters.find((item) => item.id === game.answerCharacterId)!;
  const result = submitLocalGuess(catalog, game, answer.name, 2_000);
  assert.equal(result.ok, true);
  if (!result.ok) return;
  saveLocalGame(result.game, storage, catalog);

  const validRecord = loadGameRecords(storage)[0];
  storage.setItem("hangyiba:game-records:v1", JSON.stringify({
    schemaVersion: 1,
    records: [{
      ...validRecord,
      sessionId: "legacy-empty-session",
      startedAt: null,
      updatedAt: validRecord.createdAt,
      completedAt: null,
      guesses: [],
      completed: false,
      won: null,
      durationMs: 0,
    }, validRecord],
  }));

  assert.deepEqual(loadGameRecords(storage).map((record) => record.sessionId), [validRecord.sessionId]);
});

test("只有仍对应当前可恢复存档的未完成历史才处于进行中", () => {
  const catalog = createDefaultCatalog();
  const storage = new MemoryStorage();
  const game = createLocalGame(catalog, "custom", 1_000);
  const guessed = catalog.characters.find((item) => item.active && item.id !== game.answerCharacterId)!;
  const result = submitLocalGuess(catalog, game, guessed.name, 2_000);
  assert.equal(result.ok, true);
  if (!result.ok) return;
  saveLocalGame(result.game, storage, catalog);
  assert.deepEqual([...loadActiveGameSessionIds(storage)], [result.game.sessionId]);

  const replacement = createLocalGame(catalog, "custom", 3_000);
  saveLocalGame(replacement, storage, catalog);
  assert.equal(loadGameRecords(storage)[0].sessionId, result.game.sessionId);
  assert.deepEqual([...loadActiveGameSessionIds(storage)], [replacement.sessionId]);
});

test("旧无限模式存档迁移到自定义模式，并在下次保存时转为混淆格式", () => {
  const catalog = createDefaultCatalog();
  const storage = new MemoryStorage();
  const game = createLocalGame(catalog, "unlimited");
  const answer = catalog.characters.find((item) => item.id === game.answerCharacterId)!;
  const guessed = catalog.characters.find((item) => item.active && item.id !== game.answerCharacterId)!;
  const result = submitLocalGuess(catalog, game, guessed.name, 2_000);
  assert.equal(result.ok, true);
  if (!result.ok) return;

  const legacyGuess = { ...result.guess } as Partial<typeof result.guess>;
  delete legacyGuess.guessedAt;
  delete legacyGuess.elapsedMs;
  const legacyGame = { ...result.game } as Partial<typeof result.game>;
  delete legacyGame.createdAt;
  storage.setItem("hangyiba:games:v1", JSON.stringify({
    unlimited: { ...legacyGame, guesses: [legacyGuess] },
  }));

  const restored = loadLocalGame("custom", catalog, storage);
  assert.equal(restored?.guesses[0].guessedAt, null);
  assert.equal(restored?.guesses[0].elapsedMs, null);
  assert.equal(restored?.createdAt, null);
  assert.equal(restored?.mode, "custom");
  assert.equal(loadLocalGame("unlimited", catalog, storage), null);
  saveLocalGame(restored!, storage, catalog);
  assert.match(storage.getItem("hangyiba:games:v1")!, /^dyb-obf-v1:/);
  assert.equal(loadGameRecords(storage)[0].answerName, answer.name);
});

test("次数用完时计时冻结并标记为失败", () => {
  const catalog = createDefaultCatalog();
  let game = createLocalGame(catalog, "unlimited");
  const wrongCharacters = catalog.characters
    .filter((item) => item.active && item.id !== game.answerCharacterId)
    .slice(0, game.maxAttempts);

  for (const [index, character] of wrongCharacters.entries()) {
    const result = submitLocalGuess(catalog, game, character.name, (index + 1) * 1_000);
    assert.equal(result.ok, true);
    if (!result.ok) return;
    game = result.game;
  }

  assert.equal(game.completed, true);
  assert.equal(game.won, false);
  assert.equal(game.timerStartedAt, null);
  assert.equal(game.elapsedMs, 7_000);
  assert.equal(getElapsedMs(game, 99_000), 7_000);
});

test("无限模式下一轮会保留本次游戏的累计用时与前轮记录", () => {
  const catalog = createDefaultCatalog();
  const game = createLocalGame(catalog, "unlimited");
  const answer = catalog.characters.find((item) => item.id === game.answerCharacterId)!;
  const wrong = catalog.characters.find((item) => item.active && item.id !== answer.id)!;
  const first = submitLocalGuess(catalog, game, wrong.name, 2_000);
  assert.equal(first.ok, true);
  if (!first.ok) return;
  const won = submitLocalGuess(catalog, first.game, answer.name, 7_000);
  assert.equal(won.ok, true);
  if (!won.ok) return;

  const next = createNextUnlimitedGame(catalog, won.game);
  assert.equal(next.unlimitedRunId, game.unlimitedRunId);
  assert.equal(next.unlimitedRound, 2);
  assert.equal(next.unlimitedElapsedMs, 5_000);
  assert.deepEqual(next.unlimitedHistory, [{
    round: 1,
    answer: answer.name,
    attempts: 2,
    won: true,
    durationMs: 5_000,
  }]);
});

test("自定义模式保留原无限模式的连续轮次行为", () => {
  const catalog = createDefaultCatalog();
  const game = createLocalGame(catalog, "custom");
  const answer = catalog.characters.find((item) => item.id === game.answerCharacterId)!;
  const won = submitLocalGuess(catalog, game, answer.name, 1_000);
  assert.equal(won.ok, true);
  if (!won.ok) return;

  const next = createNextUnlimitedGame(catalog, won.game, 2_000);
  assert.equal(next.mode, "custom");
  assert.equal(next.unlimitedRound, 2);
  assert.equal(next.unlimitedRunId, game.unlimitedRunId);
});

test("自定义模式可以指定人物，且该局不计入游玩历史或生涯统计", () => {
  const catalog = createDefaultCatalog();
  const storage = new MemoryStorage();
  const target = catalog.characters.find((character) => character.active && character.aliases.length > 0)!;
  const game = createSpecifiedLocalGame(catalog, target.aliases[0], 500);

  assert.equal(game.answerCharacterId, target.id);
  assert.equal(game.excludedFromHistory, true);
  saveLocalGame(game, storage, catalog);
  assert.equal(loadLocalGame("custom", catalog, storage)?.excludedFromHistory, true);
  assert.deepEqual(loadGameRecords(storage), []);

  const won = submitLocalGuess(catalog, game, target.name, 1_000);
  assert.equal(won.ok, true);
  if (!won.ok) return;
  saveLocalGame(won.game, storage, catalog);
  recordCompletedTiming(won.game, storage);
  assert.deepEqual(loadGameRecords(storage), []);
  assert.deepEqual(loadTimingStats(storage), {
    completedSessionIds: [],
    winDurationsMs: [],
    winAttempts: [],
  });

  const next = createNextUnlimitedGame(catalog, won.game, 2_000);
  assert.equal(next.excludedFromHistory, false);
});

test("指定人物必须存在于当前题库", () => {
  assert.throws(
    () => createSpecifiedLocalGame(createDefaultCatalog(), "不存在的人物"),
    /题库中没有这位舰船/,
  );
});

test("无限模式生涯计时只统计成功对局，且同一局不会重复记录", () => {
  const catalog = createDefaultCatalog();
  const storage = new MemoryStorage();
  const game = createLocalGame(catalog, "unlimited");
  const answer = catalog.characters.find((item) => item.id === game.answerCharacterId)!;
  const won = submitLocalGuess(catalog, game, answer.name, 1_000);
  assert.equal(won.ok, true);
  if (!won.ok) return;

  recordCompletedTiming(won.game, storage);
  recordCompletedTiming(won.game, storage);
  assert.deepEqual(loadTimingStats(storage).winDurationsMs, [0]);
  assert.deepEqual(loadTimingStats(storage).winAttempts, [1]);
  assert.equal(loadTimingStats(storage).completedSessionIds.length, 1);
});

test("CSV 导出后可按相同表头添加舰船", () => {
  const catalog = createDefaultCatalog();
  const exported = exportCatalogCsv(catalog);
  const preview = parseCatalogCsv(exported);
  assert.equal(hasSameCsvHeaders(catalog, preview), true);
  // 导出会为每个标签写出多套写法的列，这里按去重后的标签比对名称与类型
  assert.deepEqual(
    [...new Map(preview.tagNames.map((name, index) => [name, preview.tagKinds[index]])).entries()],
    catalog.tags.map((tag) => [tag.name, tag.kind]),
  );
  assert.deepEqual([...new Set(preview.tagVariants)].sort(), ["en", "zh"]);
  assert.equal(preview.rows.length, catalog.characters.length);
  assert.equal(preview.rows[0][0], catalog.characters[0].name);

  // 导出的表头里每个标签可能有多套写法的列，按列逐个填值
  const addition = parseCatalogCsv([
    preview.headers.join(","),
    ["测试舰船", "测试、测测", "是", ...preview.tagNames.map((_, index) => (
      preview.tagKinds[index] === "ordered" ? "2026" : "测试值"
    ))].join(","),
  ].join("\r\n"));
  const added = importCatalogCsv(catalog, addition, "append");
  assert.equal(added.characters.length, catalog.characters.length + 1);
  const character = added.characters.find((item) => item.name === "测试舰船")!;
  assert.deepEqual(character.aliases, ["测试", "测测"]);
  // 每个标签至少写入一条判定列的值（表头带 @写法）
  assert.equal(
    added.values.filter((item) => item.characterId === character.id && item.variant === "zh").length,
    catalog.tags.length,
  );
  assert.equal(added.values.filter((item) => item.characterId === character.id).length, preview.tagNames.length);
});

test("不同 CSV 表头禁止添加，但可替换并重建标签", () => {
  const catalog = createDefaultCatalog();
  const preview = parseCatalogCsv('舰船名,别名,启用,阵营（类型：category）,"称号,备注（类型：exact-multi）"\n"新,舰船",简称,否,阵营 > 中立,"类别 > 带,逗号"\n');
  assert.equal(hasSameCsvHeaders(catalog, preview), false);
  assert.throws(() => importCatalogCsv(catalog, preview, "append"), /只能选择替换/);

  const replaced = importCatalogCsv(catalog, preview, "replace");
  // 标签按题库定义顺序（此处即 CSV 列顺序）排列
  assert.deepEqual(replaced.tags.map((tag) => tag.name), ["阵营", "称号,备注"]);
  assert.deepEqual(replaced.tags.map((tag) => tag.kind), ["category", "exact-multi"]);
  assert.equal(replaced.characters[0].name, "新,舰船");
  assert.equal(replaced.characters[0].active, false);
  assert.deepEqual(replaced.values.map((item) => item.value), ["中立", "带,逗号"]);
});

test("CSV 添加只按标签名称匹配，并采用当前题库的标签类型", () => {
  const catalog = createDefaultCatalog();
  const headers = [
    "舰船名",
    "别名",
    "启用",
    ...catalog.tags.map((tag) => `${tag.name}（类型：${tag.name === "建造时间" ? "exact" : tag.kind}）`),
  ];
  const sameNameDifferentKind = parseCatalogCsv(
    [
      headers.join(","),
      ["测试舰船", "", "是", ...catalog.tags.map((tag) => (
        tag.name === "建造时间" ? "02:00:00" : "测试值"
      ))].join(","),
    ].join("\n"),
  );

  assert.equal(hasSameCsvHeaders(catalog, sameNameDifferentKind), true);
  const appended = importCatalogCsv(catalog, sameNameDifferentKind, "append");
  assert.equal(appended.tags.find((tag) => tag.name === "建造时间")?.kind, "ordered");
  assert.equal(appended.characters.some((character) => character.name === "测试舰船"), true);

  const replaced = importCatalogCsv(catalog, sameNameDifferentKind, "replace");
  assert.equal(replaced.tags.find((tag) => tag.name === "建造时间")?.kind, "exact");
});

test("CSV 替换引起标签重排后仍可按名称正确添加", () => {
  const catalog = createDefaultCatalog();
  const replacement = parseCatalogCsv(
    "舰船名,别名,启用,阵营（类型：exact）,舰种（类型：exact）,配音（类型：exact-multi）,舰级（类型：exact）,建造时间（类型：ordered）\n替换舰船,,是,重樱,重巡,Ai Kakuma,Takao,02:05:00\n",
  );
  const replaced = importCatalogCsv(catalog, replacement, "replace");

  assert.equal(hasSameCsvHeaders(replaced, replacement), true);

  const addition = parseCatalogCsv(
    "舰船名,别名,启用,阵营（类型：exact）,舰种（类型：exact）,配音（类型：exact-multi）,舰级（类型：exact）,建造时间（类型：ordered）\n添加舰船,,是,白鹰,航母,Yui Ishikawa,Essex,04:20:00\n",
  );
  const appended = importCatalogCsv(replaced, addition, "append");
  const character = appended.characters.find((item) => item.name === "添加舰船")!;
  const valuesByTagName = Object.fromEntries(appended.tags.map((tag) => [
    tag.name,
    (() => {
      const value = appended.values.find((item) => item.characterId === character.id && item.tagId === tag.id);
      return value?.category || value?.value;
    })(),
  ]));

  assert.deepEqual(valuesByTagName, {
    建造时间: "04:20:00",
    配音: "Yui Ishikawa",
    阵营: "白鹰",
    舰级: "Essex",
    舰种: "航母",
  });
});

test("CSV 标签列表头必须记录类型", () => {
  assert.throws(
    () => parseCatalogCsv("舰船名,别名,启用,阵营\n测试舰船,,是,中立\n"),
    /标签列表头.*格式无效/,
  );
});

test("完全+接近匹配可保存并通过 CSV 往返，且兼容无后续标签的值", () => {
  const catalog = applyCatalogMutation(createDefaultCatalog(), {
    action: "saveTag",
    name: "活动系列",
    kind: "exact-close",
  });
  const tag = catalog.tags.find((item) => item.name === "活动系列")!;
  const withCharacters = applyCatalogMutation(
    applyCatalogMutation(catalog, {
      action: "saveCharacter",
      name: "接近测试舰船",
      values: { [String(tag.id)]: "坠落之翼 > 凛冬王冠 | 墨染的钢铁之花" },
    }),
    {
      action: "saveCharacter",
      name: "旧格式测试舰船",
      values: { [String(tag.id)]: "坠落之翼" },
    },
  );

  const imported = importCatalogCsv(withCharacters, parseCatalogCsv(exportCatalogCsv(withCharacters)), "replace");
  const importedTag = imported.tags.find((item) => item.name === "活动系列")!;
  assert.equal(importedTag.kind, "exact-close");
  assert.deepEqual(
    ["接近测试舰船", "旧格式测试舰船"].map((name) => {
      const character = imported.characters.find((item) => item.name === name)!;
      return imported.values.find((item) => item.characterId === character.id && item.tagId === importedTag.id)?.value;
    }),
    ["坠落之翼 > 凛冬王冠 | 墨染的钢铁之花", "坠落之翼"],
  );
});

test("按类匹配标签可保存大类和小类并通过 CSV 往返", () => {
  const catalog = applyCatalogMutation(createDefaultCatalog(), {
    action: "saveTag",
    name: "能力类型",
    kind: "category",
  });
  const tag = catalog.tags.find((item) => item.name === "能力类型")!;
  const withCharacter = applyCatalogMutation(catalog, {
    action: "saveCharacter",
    name: "分类测试舰船",
    values: { [String(tag.id)]: "风" },
    categories: { [String(tag.id)]: "自然操纵" },
  });
  const character = withCharacter.characters.find((item) => item.name === "分类测试舰船")!;
  const storedValue = withCharacter.values.find((item) => item.characterId === character.id && item.tagId === tag.id)!;
  assert.deepEqual(storedValue, { characterId: character.id, tagId: tag.id, variant: "zh", value: "风", category: "自然操纵" });

  const imported = importCatalogCsv(withCharacter, parseCatalogCsv(exportCatalogCsv(withCharacter)), "replace");
  const importedTag = imported.tags.find((item) => item.name === "能力类型")!;
  const importedCharacter = imported.characters.find((item) => item.name === "分类测试舰船")!;
  assert.deepEqual(
    imported.values.find((item) => item.characterId === importedCharacter.id && item.tagId === importedTag.id),
    { characterId: importedCharacter.id, tagId: importedTag.id, variant: "zh", value: "风", category: "自然操纵" },
  );
});

test("完全匹配（多标签）可保存多个标签值并通过 CSV 往返", () => {
  const catalog = applyCatalogMutation(createDefaultCatalog(), {
    action: "saveTag",
    name: "复合属性",
    kind: "exact-multi",
  });
  const tag = catalog.tags.find((item) => item.name === "复合属性")!;
  const withCharacter = applyCatalogMutation(catalog, {
    action: "saveCharacter",
    name: "多标签测试舰船",
    multiValues: { [String(tag.id)]: "风\n读心" },
  });
  const character = withCharacter.characters.find((item) => item.name === "多标签测试舰船")!;
  const storedValue = withCharacter.values.find((item) => item.characterId === character.id && item.tagId === tag.id)!;
  assert.deepEqual(storedValue.entries, [
    { value: "风" },
    { value: "读心" },
  ]);

  const exported = exportCatalogCsv(withCharacter);
  assert.match(exported, /风 \| 读心/);
  const imported = importCatalogCsv(withCharacter, parseCatalogCsv(exported), "replace");
  const importedTag = imported.tags.find((item) => item.name === "复合属性")!;
  const importedCharacter = imported.characters.find((item) => item.name === "多标签测试舰船")!;
  assert.deepEqual(
    imported.values.find((item) => item.characterId === importedCharacter.id && item.tagId === importedTag.id)?.entries,
    [
      { value: "风" },
      { value: "读心" },
    ],
  );
});

test("按类匹配（多标签）允许只填写大类并通过 CSV 导入", () => {
  const catalog = applyCatalogMutation(createDefaultCatalog(), {
    action: "saveTag",
    name: "分类多标签",
    kind: "category-multi",
  });
  const tag = catalog.tags.find((item) => item.name === "分类多标签")!;
  const filled = applyCatalogMutation(catalog, {
    action: "saveCharacter",
    name: "单大类舰船",
    multiValues: { [String(tag.id)]: "妖怪 > 兽类\n神明" },
  });
  const character = filled.characters.find((item) => item.name === "单大类舰船")!;
  const storedValue = filled.values.find((item) => item.characterId === character.id && item.tagId === tag.id)!;
  assert.deepEqual(storedValue.entries, [
    { category: "妖怪", value: "兽类" },
    { category: "神明", value: "" },
  ]);

  const imported = importCatalogCsv(
    catalog,
    parseCatalogCsv("舰船名,别名,启用,分类多标签（类型：category-multi）\n导入舰船,,是,妖怪\n"),
    "replace",
  );
  const importedTag = imported.tags.find((item) => item.name === "分类多标签")!;
  const importedCharacter = imported.characters.find((item) => item.name === "导入舰船")!;
  assert.deepEqual(
    imported.values.find((item) => item.characterId === importedCharacter.id && item.tagId === importedTag.id),
    {
      characterId: importedCharacter.id,
      tagId: importedTag.id,
      variant: "",
      value: "",
      category: "妖怪",
      entries: [{ category: "妖怪", value: "" }],
    },
  );
  assert.match(exportCatalogCsv(imported), /导入舰船,,是,妖怪/);
});

test("每日挑战编号从上线首日算起", () => {
  assert.equal(challengeNumber(CHALLENGE_EPOCH), 1);
  assert.equal(challengeNumber("2026-09-15"), 2);
  assert.equal(challengeNumber("2026-10-14"), 31);
});

test("标签定义带上每列可用的写法，供游戏页切换显示语言", () => {
  const catalog = createDefaultCatalog();
  const tags = toTagDefinitions(catalog.tags, catalog.values);
  assert.deepEqual(tags.find((tag) => tag.name === "稀有度")?.variants, ["en", "zh"]);
  assert.deepEqual(tags.find((tag) => tag.name === "阵营")?.variants, ["en", "zh"]);
  // 判定列是该标签的第一列，也就是中文那一列
  assert.equal(tags.every((tag) => tag.primaryVariant === "zh"), true);
});

test("同一列存了多套写法时，判定只认主方案", () => {
  const catalog = createDefaultCatalog();
  const rarity = catalog.tags.find((tag) => tag.name === "稀有度")!;
  const kaohsiung = catalog.characters.find((character) => character.name === "高雄")!;
  const game = { ...createLocalGame(catalog, "custom"), answerCharacterId: kaohsiung.id };
  const result = submitLocalGuess(catalog, game, "高雄", 1_000);
  assert.equal(result.ok, true);
  if (!result.ok) return;
  const cell = result.guess.feedback.find((item) => item.tagId === rarity.id)!;
  // 判定用 @zh 那一列，@en（Super Rare）不能反过来把它覆盖掉
  assert.equal(cell.value, "超稀有");
  assert.equal(cell.state, "match");
});

test("CSV 往返不会把判定列换成别的写法", () => {
  const catalog = createDefaultCatalog();
  const before = catalog.tags.map((tag) => [tag.name, tag.primaryVariant]);
  const roundTripped = importCatalogCsv(catalog, parseCatalogCsv(exportCatalogCsv(catalog)), "replace");
  // 导出时判定列必须排在该标签的第一列，否则导入端「第一列即判定列」会把它改掉
  assert.deepEqual(roundTripped.tags.map((tag) => [tag.name, tag.primaryVariant]), before);
  assert.equal(roundTripped.tags.every((tag) => tag.primaryVariant === "zh"), true);
});

test("还没有任何取值的标签也能通过 CSV 往返保留", () => {
  const catalog = applyCatalogMutation(createDefaultCatalog(), {
    action: "saveTag",
    name: "获取方式",
    kind: "exact",
  });
  const exported = exportCatalogCsv(catalog);
  assert.equal(exported.split("\r\n")[0].includes("获取方式"), true);
  const roundTripped = importCatalogCsv(catalog, parseCatalogCsv(exported), "replace");
  assert.equal(roundTripped.tags.length, catalog.tags.length);
  assert.equal(roundTripped.tags.find((tag) => tag.name === "获取方式")?.kind, "exact");
});

test("只填大类的 category 标签在保存舰船时不会丢失", () => {
  const withTag = applyCatalogMutation(createDefaultCatalog(), {
    action: "saveTag",
    name: "能力类型",
    kind: "category",
  });
  const tag = withTag.tags.find((item) => item.name === "能力类型")!;
  const saved = applyCatalogMutation(withTag, {
    action: "saveCharacter",
    name: "只填大类舰船",
    categories: { [String(tag.id)]: "自然操纵" },
  });
  const stored = saved.values.find((item) => item.tagId === tag.id);
  assert.equal(stored?.category, "自然操纵");
  assert.equal(stored?.variant, tag.primaryVariant);
});

test("后台编辑表单只读取判定列的取值", () => {
  const catalog = createDefaultCatalog();
  const rarity = catalog.tags.find((tag) => tag.name === "稀有度")!;
  const enterprise = catalog.characters.find((character) => character.name === "企业")!;
  // 人为制造「判定列是 en」的题库：表单必须跟着判定列，不能取到 @zh 那一行
  const flipped: LocalCatalog = {
    ...catalog,
    tags: catalog.tags.map((tag) => (tag.id === rarity.id ? { ...tag, primaryVariant: "en" } : tag)),
  };
  const row = characterValuesForEditing(flipped, enterprise.id).find((item) => item.tagId === rarity.id)!;
  assert.equal(row.variant, "en");
  const zhRow = characterValuesForEditing(catalog, enterprise.id).find((item) => item.tagId === rarity.id)!;
  assert.equal(zhRow.variant, "zh");
});

test("单条玩家题库损坏不会牵连其它题库，只读载入也不再写回存档", () => {
  const LIBRARY_KEY = "hangyiba:catalog-library:v2";
  let writes = 0;
  const storage = new MemoryStorage();
  const countingSetItem = storage.setItem.bind(storage);
  storage.setItem = (key: string, value: string) => {
    writes += 1;
    countingSetItem(key, value);
  };

  const good = createPlayerCatalog("好的题库", createDefaultCatalog(), storage);
  // 手工塞一条结构损坏的玩家题库（缺 values[].value）
  const raw = JSON.parse(storage.getItem(LIBRARY_KEY)!);
  raw.players.push({
    id: "player:99",
    name: "坏题库",
    catalog: { tags: [], characters: [], values: [{ characterId: 1, tagId: 1, variant: "zh" }] },
  });
  storage.setItem(LIBRARY_KEY, JSON.stringify(raw));

  const loaded = loadCatalogLibrary(storage);
  // 坏的那条被剔除，好的必须留下（修复写回一次）
  assert.deepEqual(loaded.catalogs.filter((item) => !item.official).map((item) => item.id), [good.id]);
  assert.deepEqual(
    JSON.parse(storage.getItem(LIBRARY_KEY)!).players.map((item: { id: string }) => item.id),
    [good.id],
  );

  // 已经修复过的存档，纯读取不应再写盘
  writes = 0;
  loadCatalogLibrary(storage);
  assert.equal(writes, 0);
});

test("localStorage 写失败时载入题库不会抛异常", () => {
  const storage = new MemoryStorage();
  storage.setItem = () => {
    throw new Error("QuotaExceededError");
  };
  assert.equal(loadCatalogLibrary(storage).catalogs.length > 0, true);
});
