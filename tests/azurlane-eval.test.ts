import assert from "node:assert/strict";
import test from "node:test";
import { compareGuess, type CharacterValue, type TagDefinition } from "../app/game-core";
import { buildFeedbackIndex, evaluateGame, prepareShips } from "../app/azurlane-eval";
import { createDefaultCatalog } from "../app/local-catalog";

const tags: TagDefinition[] = [
  { id: 1, name: "阵营", kind: "exact", unit: "" },
  { id: 2, name: "建造时间", kind: "ordered", unit: "" },
];

const characters = [
  { id: 1, name: "甲" },
  { id: 2, name: "乙" },
  { id: 3, name: "丙" },
  { id: 4, name: "丁" },
];

const values: Array<CharacterValue & { characterId: number }> = [
  { characterId: 1, tagId: 1, value: "重樱" },
  { characterId: 1, tagId: 2, value: "02:00:00" },
  { characterId: 2, tagId: 1, value: "重樱" },
  { characterId: 2, tagId: 2, value: "02:03:00" },
  { characterId: 3, tagId: 1, value: "白鹰" },
  { characterId: 3, tagId: 2, value: "04:00:00" },
  { characterId: 4, tagId: 1, value: "白鹰" },
  { characterId: 4, tagId: 2, value: "06:00:00" },
];

function valuesOf(index: number): CharacterValue[] {
  return values
    .filter((item) => item.characterId === characters[index].id)
    .map((item) => ({ tagId: item.tagId, value: item.value }));
}

test("反馈分组与 compareGuess 的判定完全一致", () => {
  const ships = prepareShips(characters, values);
  const index = buildFeedbackIndex(ships, tags);

  for (let guess = 0; guess < ships.length; guess += 1) {
    for (let left = 0; left < ships.length; left += 1) {
      if (left === guess) continue;
      for (let right = left + 1; right < ships.length; right += 1) {
        if (right === guess) continue;
        const sameBranch = index.branches[guess].some((ids) => ids.includes(left) && ids.includes(right));
        const sameFeedback = JSON.stringify(compareGuess(tags, valuesOf(guess), valuesOf(left))) ===
          JSON.stringify(compareGuess(tags, valuesOf(guess), valuesOf(right)));
        assert.equal(sameBranch, sameFeedback, `猜测 ${guess} 的答案 ${left}/${right} 分组不一致`);
      }
    }
  }
});

test("剩余候选数按玩家实际看到的反馈收窄", () => {
  const ships = prepareShips(characters, values);
  const result = evaluateGame({
    ships,
    tags,
    answerIndex: 3,
    guessedIndexes: [0],
  });

  assert.equal(result.steps.length, 1);
  // 猜「甲」时，丙和丁的反馈都是「阵营不符、时间偏早」，因此剩余候选为 2
  assert.equal(result.steps[0].remainingCount, 2);
  assert.deepEqual(result.steps[0].remainingNames, ["丙", "丁"]);
  assert.equal(result.steps[0].botGuessName.length > 0, true);
});

test("猜中时给出一发入魂的评价", () => {
  const ships = prepareShips(characters, values);
  const result = evaluateGame({ ships, tags, answerIndex: 1, guessedIndexes: [1] });
  assert.equal(result.comment, "一发入魂！你是不是偷看了答案？");
});

test("可以在真实题库上完成评估并给出 Bot 路径", () => {
  const catalog = createDefaultCatalog();
  const shipList = prepareShips(catalog.characters, catalog.values);
  const tagList = catalog.tags.map(({ id, name, kind, unit }) => ({ id, name, kind, unit }));
  const answerIndex = shipList.findIndex((ship) => ship.name === "企业");
  assert.equal(answerIndex >= 0, true);
  const guessedIndexes = [shipList.findIndex((ship) => ship.name === "高雄"), answerIndex];

  const started = Date.now();
  const result = evaluateGame({ ships: shipList, tags: tagList, answerIndex, guessedIndexes });
  const elapsed = Date.now() - started;

  assert.equal(result.steps.length, 2);
  assert.equal(result.steps[0].guessName, "高雄");
  assert.equal(result.steps[1].guessName, "企业");
  // 猜中时剩余候选清零，且运气记为满分（与原版一致）
  assert.equal(result.steps[1].remainingCount, 0);
  assert.equal(result.steps[1].luck, 100);
  assert.equal(result.botPath.at(-1), "企业");
  assert.equal(result.botPath.length <= 12, true);
  assert.equal(result.comment.length > 0, true);
  assert.ok(result.steps[0].skill >= 0 && result.steps[0].skill <= 100);
  assert.ok(result.steps[0].remainingCount > 0 && result.steps[0].remainingCount < shipList.length);
  assert.ok(elapsed < 120_000, `评估耗时过长：${elapsed}ms`);
});
