# 航一把

碧蓝航线版的「猜舰船」网页小游戏：每天一艘隐藏舰船，8 次机会猜出来，另有十番战、无限与自定义模式，
猜完可以查看 Skill / Luck 评估。

本项目直接引用了两个开源项目的代码、用 AI 拼合改编而成：

- [东一把](https://github.com/TouHousand-Years/dongyiba)（MIT）—— 界面与工程脚手架
- [Ymiros0/Azurlanedle](https://github.com/Ymiros0/Azurlanedle) —— 判定规则与评估算法（Python 移植为 TypeScript）
- 舰船数据来自 [碧蓝航线 bwiki](https://wiki.biligame.com/blhx)

## 运行

```bash
docker compose up -d --build    # http://localhost:8080
npm install && npm run dev      # 本地开发
```

以 MIT 发布，仅供学习交流，与游戏官方无关。
