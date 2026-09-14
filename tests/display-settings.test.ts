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

test("语言设置：中文与英文预设覆盖每一列", () => {
  for (const tag of tags) {
    assert.equal(resolveVariant(tag, preset("zh")), "zh", `${tag.name} 的中文写法`);
    assert.equal(resolveVariant(tag, preset("en")), "en", `${tag.name} 的英文写法`);
  }
});

test("语言设置：预设选中的写法在题库里都有值，不会出现空白", () => {
  const ship = catalog.characters.find((character) => character.name === "企业")!;
  const valueOf = (tagId: number, variant: string) =>
    catalog.values.find((value) => value.characterId === ship.id && value.tagId === tagId && value.variant === variant)
      ?.value ?? "";

  for (const mode of ["zh", "en"] as const) {
    for (const tag of tags) {
      const variant = resolveVariant(tag, preset(mode));
      assert.notEqual(variant, "", `${mode} 预设下 ${tag.name} 应该选出一套写法`);
      assert.notEqual(valueOf(tag.id, variant), "", `${mode} 预设下 ${tag.name} 的取值不应为空`);
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
