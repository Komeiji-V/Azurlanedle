import assert from "node:assert/strict";
import test from "node:test";
import {
  checkForAppUpdate,
  compareVersions,
  CURRENT_VERSION,
  DISPLAY_VERSION,
} from "../app/app-update";

const VERSION_URL = "https://example.com/azurlanedle/package.json";

test("当前显示版本来自 package.json", () => {
  assert.equal(CURRENT_VERSION, "0.1.0");
  assert.equal(DISPLAY_VERSION, "v0.1.0");
});

test("版本比较支持补丁版本与预发布版本", () => {
  assert.equal(compareVersions("0.1.3", "0.1.2"), 1);
  assert.equal(compareVersions("1.0.0-beta.2", "1.0.0-beta.1"), 1);
  assert.equal(compareVersions("1.0.0", "1.0.0-beta.2"), 1);
  assert.equal(compareVersions("0.1.2", "0.1.2"), 0);
});

test("远端版本较新时报告更新", async () => {
  const request: typeof fetch = async (input, init) => {
    assert.equal(String(input), VERSION_URL);
    assert.equal(init?.cache, "no-store");
    return Response.json({ version: "0.1.3" });
  };
  assert.deepEqual(await checkForAppUpdate(request, "0.1.2", VERSION_URL), {
    currentVersion: "0.1.2",
    latestVersion: "0.1.3",
    updateAvailable: true,
  });
});

test("远端版本相同或较旧时不报告更新", async () => {
  const same = await checkForAppUpdate(async () => Response.json({ version: "0.1.2" }), "0.1.2", VERSION_URL);
  const older = await checkForAppUpdate(async () => Response.json({ version: "0.1.1" }), "0.1.2", VERSION_URL);
  assert.equal(same.updateAvailable, false);
  assert.equal(older.updateAvailable, false);
});

test("远端返回无效版本时由调用方处理", async () => {
  await assert.rejects(
    checkForAppUpdate(async () => Response.json({ version: "next" }), "0.1.2", VERSION_URL),
    /无效版本号/,
  );
});

test("未配置更新源时直接失败且不发起请求", async () => {
  let requested = false;
  const request: typeof fetch = async () => {
    requested = true;
    return Response.json({ version: "9.9.9" });
  };
  await assert.rejects(checkForAppUpdate(request, "0.1.2", ""), /未配置应用更新源/);
  assert.equal(requested, false);
});
