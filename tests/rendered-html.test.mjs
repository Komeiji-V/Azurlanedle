import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("运行时拼出来的状态样式一个都不能少", async () => {
  const [gameBoard, styles] = await Promise.all([
    readFile(new URL("../app/game-board.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);
  // 这些类名是模板字符串拼出来的（`result-${state}`、`timer-${timerPulse.kind}`），
  // 收拾死代码时只 grep 字面量会把它们当成没人用而删掉，反馈表的黄/灰底色就没了
  assert.match(gameBoard, /className=\{`result-\$\{/);
  assert.match(gameBoard, /timer-\$\{timerPulse\.kind\}/);
  for (const className of ["result-match", "result-close", "result-miss", "timer-bonus", "timer-penalty", "timer-low"]) {
    assert.match(styles, new RegExp(`\\.${className}[\\s,{:]`), `${className} 的样式不见了`);
  }
});

test("玩家首页使用真实游戏组件和正式元数据", async () => {
  const [page, layout, game, updateCenter, styles] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/game-board.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/update-center.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);
  // 切到别的写法时，多值列必须按 entries 渲染：存储的 value 只有第一个值，
  // 用 value.split(" | ") 会让「技能A | 技能B」只显示技能A
  assert.match(game, /variantEntriesIndex/);
  assert.doesNotMatch(game, /variantText\.split\(" \| "\)/);
  // 手动检查必须带超时信号，否则远端连上不响应时会永远停在「正在检查」且按钮被禁用
  assert.match(updateCenter, /createManualCheckSignal/);
  assert.match(updateCenter, /checkAppVersion\(true, createManualCheckSignal\(\)\)/);
  assert.match(updateCenter, /checkCatalog\(true, createManualCheckSignal\(\)\)/);
  assert.match(page, /<GameBoard \/>/);
  assert.match(layout, /航一把｜猜碧蓝航线舰船/);
  assert.match(layout, /favicon\.svg/);
  assert.match(game, /每日挑战/);
  assert.match(game, /十番战/);
  assert.match(game, /无限模式/);
  assert.match(game, /自定义模式/);
  assert.doesNotMatch(`${page}${layout}${game}`, /无需登录|无需联网|本地模式|本机浏览器|当前浏览器|本地离线/);
  assert.doesNotMatch(game, /fetch\(/);
  assert.match(layout, /<UpdateCenter \/>/);
  assert.match(updateCenter, /当前版本/);
  assert.match(updateCenter, /手动检查/);
  assert.match(updateCenter, /checkAppVersion\(false/);
  assert.match(updateCenter, /checkCatalog\(false/);
  assert.match(updateCenter, /官方题库有更新/);
  assert.match(updateCenter, /当前题库基线.*DEFAULT_CATALOG_VERSION/);
  assert.match(game, /\["daily", "ten", "unlimited", "custom"\]/);
  assert.match(game, /塞壬准备了十番变化，你能全部猜出吗？/);
  assert.match(game, /getTenMatchRemainingMs/);
  assert.match(game, /TEN_MATCH_DIFFICULTIES/);
  assert.match(game, /Easy/);
  assert.match(game, /Normal/);
  assert.match(game, /Hard/);
  assert.match(game, /Lunatic/);
  assert.match(game, /start\("ten", true, "", item\.value\)/);
  assert.match(game, /game\.tenMatchHistory\.map/);
  assert.match(game, /finishedAt - previousFinishedAt/);
  assert.match(game, /mode === "ten" \|\| isContinuousMode\(mode\)/);
  assert.match(game, /mode !== "ten" &&/);
  assert.match(game, /const challengeTitle = mode === "daily"/);
  assert.match(game, /mode === "unlimited"\s*\? "无限模式"\s*:\s*"自定义模式"/);
  assert.match(game, /<p className="challenge">\{challengeTitle\}<\/p>/);
  assert.match(styles, /\.ten-match-difficulty/);
  assert.ok(game.indexOf('className="mode-switch"') < game.indexOf('className="custom-game-options"'));
  assert.match(styles, /\.countdown-timer\.timer-low b/);
  assert.match(styles, /\.history-list::\-webkit-scrollbar-thumb/);
  assert.match(styles, /scrollbar-color:\s*var\(--red\)\s+var\(--paper-deep\)/);
  assert.match(styles, /\.history-list::\-webkit-scrollbar-button\s*\{[^}]*display:\s*none/);
  // 显示设置：顶栏按钮 + 弹窗里的预设、企业预览与逐列自定义
  assert.match(game, /setShowSettings\(true\)/);
  assert.match(game, />语言设置</);
  assert.match(game, /from "\.\/display-settings"/);
  assert.match(game, /resolveVariant\(tag, displaySettings\)/);
  assert.match(game, /DISPLAY_PRESETS/);
  assert.match(game, /SAMPLE_SHIP_NAME = "企业"/);
  assert.match(game, /settings-preview/);
  assert.match(game, /逐列设置/);
  assert.match(styles, /\.settings-presets/);
  assert.match(styles, /\.settings-columns/);
  assert.doesNotMatch(`${page}${layout}${game}`, /codex-preview|react-loading-skeleton/);
});

test("游戏页选择游玩题库，后台点击题库进行编辑或预览", async () => {
  const [panel, catalog, game, gameBoard] = await Promise.all([
    readFile(new URL("../app/admin/panel.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/local-catalog.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/local-game.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/game-board.tsx", import.meta.url), "utf8"),
  ]);
  assert.match(panel, /loadCatalogLibrary/);
  assert.match(panel, /role="button"/);
  assert.match(panel, /openCatalog\(item\.id, item\.official\)/);
  assert.match(panel, /预览：/);
  assert.match(panel, /official-csv-table/);
  assert.match(panel, /officialTable\.headers\.map/);
  assert.match(panel, /officialTable\.rows\.map/);
  assert.match(panel, /copy-official-title/);
  assert.match(panel, /官方题库不能直接修改/);
  assert.match(panel, /新建题库/);
  assert.match(panel, /role="dialog"/);
  assert.match(panel, /aria-labelledby="create-catalog-title"/);
  assert.match(panel, /htmlFor="new-catalog-name"/);
  assert.match(panel, /创建题库/);
  assert.match(panel, /CSV 文档/);
  assert.match(panel, /保存 CSV 文档/);
  assert.match(panel, /添加到当前题库/);
  assert.match(panel, /替换当前题库/);
  assert.match(panel, /导出当前题库/);
  assert.match(panel, /标签按题库中的定义顺序显示/);
  assert.doesNotMatch(panel, /<label>排序/);
  // 题库存储键（旧版单题库的 catalog:v1 已随命名统一移除，不再有迁移分支）
  assert.match(catalog, /azurlanedle:catalog-library:v2/);
  assert.match(catalog, /official:\$\{encodeURIComponent\(path\)\}/);
  assert.match(catalog, /default-catalog\.generated/);
  assert.match(game, /submitLocalGuess/);
  assert.match(game, /azurlanedle:games:v1/);
  assert.match(gameBoard, /catalog-dropdown-trigger/);
  assert.match(gameBoard, /role="listbox"/);
  assert.match(gameBoard, /aria-selected/);
  assert.doesNotMatch(gameBoard, /<select id="play-catalog"/);
  assert.match(gameBoard, /selectPlayCatalog\(catalogId\)/);
  assert.match(gameBoard, /mode === "custom"/);
  assert.match(gameBoard, /start\("custom", true\)/);
  assert.match(gameBoard, /loadGameCatalog\(nextMode\)/);
  assert.doesNotMatch(gameBoard, /fixed-catalog|STANDARD_GAME_CATALOG_NAME/);
  assert.match(gameBoard, />游玩题库</);
  assert.match(gameBoard, /htmlFor="specified-character"/);
  assert.match(gameBoard, /已指定人物/);
  assert.match(gameBoard, /createSpecifiedLocalGame/);
  assert.match(gameBoard, /specifiedSuggestions/);
  assert.match(gameBoard, /suggestions specified-suggestions/);
  assert.match(gameBoard, /setSpecifiedCharacterInput\(name\)/);
  assert.match(gameBoard, /loadGameRecords\(\)/);
  assert.match(gameBoard, /loadActiveGameSessionIds\(\)/);
  assert.match(gameBoard, /游戏玩法<\/button>\s*<button[^>]*onClick=\{openHistory\}>游玩历史/);
  assert.match(gameBoard, /aria-labelledby="history-title"/);
  assert.match(gameBoard, /record\.guesses\.map/);
  assert.match(gameBoard, /round\.guesses\.map/);
  assert.match(gameBoard, /ten-match-round-guesses/);
  assert.match(gameBoard, /答案将在本局结束后显示/);
  assert.match(gameBoard, /isActive \? "进行中" : "已放弃"/);
  assert.doesNotMatch(panel, /chooseForPlay|chooseForEdit/);
  assert.doesNotMatch(`${panel}${game}${gameBoard}`, /fetch\(/);
  assert.doesNotMatch(panel, /无需登录|无需联网|本地模式|本机浏览器|当前浏览器|本地题库/);
});

test("提供可直接部署的 Docker 静态镜像", async () => {
  const [dockerfile, nginx, compose, dockerignore, config, viteConfig] = await Promise.all([
    readFile(new URL("../Dockerfile", import.meta.url), "utf8"),
    readFile(new URL("../docker/nginx.conf", import.meta.url), "utf8"),
    readFile(new URL("../docker-compose.yml", import.meta.url), "utf8"),
    readFile(new URL("../.dockerignore", import.meta.url), "utf8"),
    readFile(new URL("../next.config.ts", import.meta.url), "utf8"),
    readFile(new URL("../vite.config.ts", import.meta.url), "utf8"),
  ]);
  assert.match(dockerfile, /FROM node:24-bookworm-slim AS builder/);
  assert.match(dockerfile, /RUN npm ci/);
  assert.match(dockerfile, /RUN npm run build/);
  assert.match(dockerfile, /FROM nginx:[\d.]+-alpine AS runner/);
  assert.match(dockerfile, /COPY --from=builder \/app\/dist\/client \/usr\/share\/nginx\/html/);
  assert.match(dockerfile, /HEALTHCHECK/);
  assert.match(nginx, /root \/usr\/share\/nginx\/html/);
  assert.match(nginx, /try_files \$uri \$uri\/ =404/);
  assert.match(nginx, /gzip on/);
  assert.match(nginx, /location \/assets\//);
  assert.match(compose, /build:/);
  assert.match(compose, /\$\{AZURLANEDLE_PORT:-8080\}:80/);
  assert.match(compose, /restart: unless-stopped/);
  assert.match(dockerignore, /node_modules/);
  assert.match(dockerignore, /dist/);
  assert.match(config, /output: "export"/);
  assert.match(viteConfig, /base: isGitHubPages \? "\/Azurlanedle\/" : "\/"/);
});

test("构建参数与 Pages 路径两侧写法一致", async () => {
  const [dockerfile, appUpdate, catalogUpdate, layout] = await Promise.all([
    readFile(new URL("../Dockerfile", import.meta.url), "utf8"),
    readFile(new URL("../app/app-update.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/default-catalog-update.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);
  // Dockerfile 声明的 ARG 名必须和代码里 process.env 读的名字逐字一致：
  // 名字对不上时 --build-arg 会静默失效，更新中心只会显示「未配置」，不报错
  for (const suffix of ["REPO_URL", "VERSION_URL", "DB_URL", "DB_RAW_URL"]) {
    const variable = `NEXT_PUBLIC_AZURLANEDLE_${suffix}`;
    assert.match(dockerfile, new RegExp(`ARG ${variable}=`), `Dockerfile 里没有声明 ${variable}`);
    assert.match(`${appUpdate}\n${catalogUpdate}`, new RegExp(`process\\.env\\.${variable}\\b`), `代码里没有读取 ${variable}`);
  }
  // GitHub Pages 部署时 vite 的 base 与 favicon 前缀都跟仓库名相同，两处不能只改一处
  assert.match(layout, /GITHUB_PAGES === "true" \? "\/Azurlanedle" : ""/);
});
