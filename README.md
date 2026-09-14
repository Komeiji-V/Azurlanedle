# 航一把

一个猜舰船的网页小游戏 —— 碧蓝航线版的「Azurlanedle」。

界面与功能参考 [东一把](https://github.com/TouHousand-Years/dongyiba)，判定逻辑移植自
[Azurlanedle](https://github.com/Ymiros0/Azurlanedle)，题库数据取自
[碧蓝航线 bwiki](https://wiki.biligame.com/blhx)。

## 玩法

每天有一艘隐藏舰船，你有 **8 次机会**。每猜一次，下面七列会告诉你距离答案还有多远：

| 标签 | 判定规则 |
| --- | --- |
| 稀有度 / 阵营 / 舰种 / 舰级 | 完全一致才算命中 |
| 建造时间 | 相差 5 分钟以内算「接近」，箭头提示答案更早（↓）还是更晚（↑） |
| 实装活动 | 相差 30 天以内算「接近」，同样给出方向箭头 |

绿色代表命中、黄色代表接近、灰色代表不符。「无活动」的舰船彼此之间恒为命中（与原版一致）。

## 四种模式

- **每日挑战**：按上海时区每天换一艘，同一天所有人答案相同；离开页面会放弃当局
- **十番战**：10 轮连打，初始 10 分钟倒计时，猜错扣时、猜对加时，分 Easy / Normal / Hard / Lunatic 四档
- **无限模式**：不限次数连续游玩，记录每轮用时与最近 10 次、生涯平均
- **自定义模式**：可以切换题库，也可以指定答案舰船（指定局不计入历史与统计）

猜完之后可以点「查看本局评估」，会给出每一步的 **Skill / Luck** 评分、Bot 在该局面会选择的舰船，
以及 Bot 从头到尾的最优路线 —— 这部分移植自 Azurlanedle。

## Docker 部署

```bash
# 构建并启动（默认映射到宿主机 8080 端口）
docker compose up -d --build

# 打开 http://localhost:8080
```

换端口：

```bash
HANGYIBA_PORT=9000 docker compose up -d
```

不使用 compose 也可以：

```bash
docker build -t hangyiba .
docker run -d --name hangyiba -p 8080:80 --restart unless-stopped hangyiba
```

镜像分两阶段构建：`node:24` 里安装依赖并生成静态站点，产物交给 `nginx:alpine` 托管，
最终镜像不含 Node 运行时，启动即用。`/healthz` 可用于健康检查。

### 可选的更新检查

游戏本身完全离线可用。默认情况下「更新中心」只显示当前版本与题库基线；
如果代码托管在 GitHub，可以在构建时注入地址来启用远端检查：

```bash
docker build \
  --build-arg NEXT_PUBLIC_HANGYIBA_REPO_URL=https://github.com/<你>/hangyiba \
  --build-arg NEXT_PUBLIC_HANGYIBA_VERSION_URL=https://raw.githubusercontent.com/<你>/hangyiba/main/package.json \
  --build-arg NEXT_PUBLIC_HANGYIBA_DB_URL=https://github.com/<你>/hangyiba/tree/main/db \
  --build-arg NEXT_PUBLIC_HANGYIBA_DB_RAW_URL=https://raw.githubusercontent.com/<你>/hangyiba/main \
  -t hangyiba .
```

未配置时对应项显示「未配置更新源（可选）」，不会发起任何网络请求。

## 本地开发

需要 Node.js `>= 22.13.0`：

```bash
npm install
npm run dev      # 开发服务器
npm run build    # 生成静态站点到 dist/client
npm test         # 构建 + 全部测试
```

> 若 `~/.npm` 不可写，可以先把缓存指到项目内：`npm_config_cache=./.npm-cache npm install`

## 题库

内置题库位于 `db/航一把题库.csv`，共 **828 艘**舰船、7 个判定标签。
CSV 前三列固定为「舰船名、别名、启用」，后续列用「标签名（类型：类型代码）」描述标签，
支持的类型代码为 `exact`、`exact-close`、`ordered`、`category`、`exact-multi`、`category-multi`。

数据来源与重新生成方式：

```bash
npm run catalog:fetch   # 从 bwiki 抓取舰娘图鉴与活动表 → data/*.json
npm run catalog:build   # 结合原版题库生成 db/航一把题库.csv
node scripts/generate_default_catalog.mjs   # 重新生成 app/default-catalog.generated.ts
```

- 舰船中文名、和谐名、阵营、舰种、舰级、实装日期来自 bwiki 的 `{{舰娘图鉴}}` 模板
- 中文活动名与国服活动日期来自 bwiki 的「游戏活动表」，按实装日期对齐
- 每一列的写法都在列名上标明语言：`@zh` 是中文、`@en` 是原版数据（以后加日文就是 `@ja`）。
  只有一套写法的列（如建造时间，数值与语言无关）会跟着回退，不会留白。
  游戏页顶栏点「语言设置」可以切换：
  - **中文**（默认）/ **英文**：一键把整表切到同一套写法
  - **自定义**：逐列选择，弹窗里带一行以「企业」为例的实时预览

  判定固定使用该标签的第一列（题库里是 `@zh`），换显示语言只影响反馈表，不会影响对局。
  偏好存在浏览器本地。各列的两套写法：

| 列 | `@zh` | `@en` |
| --- | --- | --- |
| 稀有度 | 超稀有 | Super Rare |
| 阵营 | 重樱 | Sakura Empire |
| 舰种 | 重巡 | CA |
| 舰级 | 高雄级 | Takao |
| 建造时间 | 无法建造 | （只有一列，数值与语言无关） |
| 实装活动 | 苍红的回响 | Fallen Wings |

- 舰级取型号里的「XX级 / XX型」并做同舰级投票；建造方式沿用原版数据
- 别名同时收录音译名与和谐名，所以「雪风」「莲」「Yukikaze」都能搜到
- `scripts/fetch-bwiki-data.mjs` 内置限速与重试：bwiki 触发反爬时会返回 567，脚本会自动退避

修改题库后需要重新生成内置数据，`npm test` 会校验 `db` 目录下 CSV 的 SHA-256 是否与内置数据一致。

## 页面

- `/`：每日挑战、十番战、无限模式与自定义模式
- `/admin`：标签后台，可维护标签、舰船、别名和取值，支持 CSV 导入导出与多题库副本

所有数据都存在浏览器 `localStorage`，服务端不保存任何内容，断网也能继续游玩。

## 目录结构

```
app/
  game-core.ts          判定逻辑（标签比较、有序值解析）
  local-game.ts         对局状态机（四种模式、计时、存档）
  local-catalog.ts      题库读写（官方内置 + 玩家题库）
  catalog-csv.ts        题库 CSV 导入导出
  azurlane-eval.ts      Skill / Luck 评估与 Bot 最优路径
  game-board.tsx        游戏主界面
  admin/                标签后台
  globals.css           样式
db/航一把题库.csv         内置题库
data/                  抓取到的原始数据（构建题库用）
scripts/               抓取、生成题库、静态构建
tests/                 判定、对局、题库、评估、部署的测试
```

## 致谢与许可

- 界面与交互参考 [东一把](https://github.com/TouHousand-Years/dongyiba)（MIT），本项目在其基础上改造
- 判定规则与评估算法移植自 [Azurlanedle](https://github.com/Ymiros0/Azurlanedle)
- 游戏数据来自 [碧蓝航线 bwiki](https://wiki.biligame.com/blhx)，版权归原作者与哔哩哔哩所有
- 本项目仅供学习交流，与游戏官方无关

以 MIT 许可证发布，见 [LICENSE](./LICENSE)。
