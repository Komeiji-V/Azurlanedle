import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("玩家首页使用真实游戏组件和正式元数据", async () => {
  const [page, layout, game, updateCenter, styles] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/game-board.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/update-center.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);
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
  assert.match(game, /document\.documentElement\.dataset\.theme = pageTheme/);
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
  assert.match(styles, /html\[data-theme="chi"\] \.update-panel/);
  assert.match(styles, /\.history-list::\-webkit-scrollbar-thumb/);
  assert.match(styles, /scrollbar-color:\s*var\(--red\)\s+var\(--paper-deep\)/);
  assert.match(styles, /\.history-list::\-webkit-scrollbar-button\s*\{[^}]*display:\s*none/);
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
  assert.match(catalog, /hangyiba:catalog:v1/);
  assert.match(catalog, /hangyiba:catalog-library:v2/);
  assert.match(catalog, /official:\$\{encodeURIComponent\(path\)\}/);
  assert.match(catalog, /default-catalog\.generated/);
  assert.match(game, /submitLocalGuess/);
  assert.match(game, /hangyiba:games:v1/);
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
  assert.match(compose, /\$\{HANGYIBA_PORT:-8080\}:80/);
  assert.match(compose, /restart: unless-stopped/);
  assert.match(dockerignore, /node_modules/);
  assert.match(dockerignore, /dist/);
  assert.match(config, /output: "export"/);
  assert.match(viteConfig, /base: isGitHubPages \? "\/hangyiba\/" : "\/"/);
});
