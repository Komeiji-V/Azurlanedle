import assert from "node:assert/strict";
import test from "node:test";
import { createDefaultCatalog, toTagDefinitions } from "../app/local-catalog";
import {
  DISPLAY_PRESETS,
  parseDisplaySettings,
  resolveVariant,
  type DisplaySettings,
} from "../app/display-settings";

const catalog = createDefaultCatalog();
const tags = toTagDefinitions(catalog.tags, catalog.values);
const tagOf = (name: string) => tags.find((tag) => tag.name === name)!;
const preset = (mode: DisplaySettings["mode"]): DisplaySettings => ({ mode, columns: {} });

const ship = catalog.characters.find((character) => character.name === "企业")!;
const primaryOf = (tagId: number) => catalog.tags.find((tag) => tag.id === tagId)!.primaryVariant;
const valueOf = (tagId: number, variant: string) =>
  catalog.values.find((value) => value.characterId === ship.id && value.tagId === tagId && value.variant === variant)
    ?.value ?? "";

/** 显示层实际的取值链：先看当前写法，没有再回退到判定列。 */
const displayed = (tag: (typeof tags)[number], settings: DisplaySettings) =>
  valueOf(tag.id, resolveVariant(tag, settings)) || valueOf(tag.id, primaryOf(tag.id));

test("语言设置：中文预设覆盖每一列", () => {
  for (const tag of tags) {
    assert.equal(resolveVariant(tag, preset("zh")), "zh", `${tag.name} 的中文写法`);
  }
});

test("语言设置：有英文写法的列都会切到英文，取值不为空", () => {
  const bilingual = tags.filter((tag) => tag.variants?.includes("en"));
  assert.ok(bilingual.length > 0);
  for (const tag of bilingual) {
    assert.equal(resolveVariant(tag, preset("en")), "en", `${tag.name} 的英文写法`);
    assert.notEqual(valueOf(tag.id, "en"), "", `${tag.name} 的英文取值不应为空`);
  }
});

test("语言设置：只有一套写法的列（建造时间）跟着回退，不会留白", () => {
  const timer = tagOf("建造时间");
  assert.deepEqual(timer.variants, ["zh"]);
  // 英文预设下没有对应写法就返回空串，显示层据此回退到判定列
  assert.equal(resolveVariant(timer, preset("en")), "");
  assert.equal(displayed(timer, preset("en")), valueOf(timer.id, "zh"));
  assert.notEqual(displayed(timer, preset("en")), "");
});

test("语言设置：任何预设下每一列都能取到非空取值", () => {
  for (const mode of ["zh", "en"] as const) {
    for (const tag of tags) {
      assert.notEqual(displayed(tag, preset(mode)), "", `${mode} 预设下 ${tag.name} 不应留白`);
    }
  }
});

test("语言设置：自定义模式逐列生效，未指定时跟随题库默认", () => {
  const rarity = tagOf("稀有度");
  const nation = tagOf("阵营");
  const custom: DisplaySettings = { mode: "custom", columns: { [String(rarity.id)]: "en" } };

  assert.equal(resolveVariant(rarity, custom), "en");
  assert.equal(resolveVariant(nation, custom), "zh");
  // 没逐列设置过就跟随题库默认（中文）
  assert.equal(resolveVariant(nation, preset("custom")), "zh");
  assert.equal(rarity.displayVariant, "zh");
});

test("语言设置：预设只提供中文 / 英文 / 自定义三档", () => {
  assert.deepEqual(DISPLAY_PRESETS.map((item) => item.value), ["zh", "en", "custom"]);
  assert.deepEqual(DISPLAY_PRESETS.map((item) => item.label), ["中文", "英文", "自定义"]);
});

test("语言设置：偏好解析兼容旧存档并忽略坏数据", () => {
  // 早期版本把英文预设写成 original，读出来要迁移成 en
  assert.deepEqual(parseDisplaySettings('{"mode":"original","columns":{}}'), { mode: "en", columns: {} });
  assert.deepEqual(parseDisplaySettings('{"mode":"custom","columns":{"3":"en"}}'), {
    mode: "custom",
    columns: { "3": "en" },
  });
  assert.deepEqual(parseDisplaySettings('{"mode":"zh"}'), { mode: "zh", columns: {} });
  assert.equal(parseDisplaySettings('{"mode":"xx"}'), null);
  assert.equal(parseDisplaySettings("不是 JSON"), null);
  assert.equal(parseDisplaySettings(null), null);
});
