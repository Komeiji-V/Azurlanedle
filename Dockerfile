# syntax=docker/dockerfile:1

# ---------- 构建阶段：安装依赖并生成静态站点 ----------
FROM node:24-bookworm-slim AS builder

WORKDIR /app

# 可选：注入更新检查地址；不传则更新中心只显示本地版本，不发起网络请求
ARG NEXT_PUBLIC_HANGYIBA_REPO_URL=""
ARG NEXT_PUBLIC_HANGYIBA_VERSION_URL=""
ARG NEXT_PUBLIC_HANGYIBA_DB_URL=""
ARG NEXT_PUBLIC_HANGYIBA_DB_RAW_URL=""
ENV NEXT_PUBLIC_HANGYIBA_REPO_URL=$NEXT_PUBLIC_HANGYIBA_REPO_URL \
    NEXT_PUBLIC_HANGYIBA_VERSION_URL=$NEXT_PUBLIC_HANGYIBA_VERSION_URL \
    NEXT_PUBLIC_HANGYIBA_DB_URL=$NEXT_PUBLIC_HANGYIBA_DB_URL \
    NEXT_PUBLIC_HANGYIBA_DB_RAW_URL=$NEXT_PUBLIC_HANGYIBA_DB_RAW_URL

# 依赖缓存层：package 文件不变时跳过 npm ci
COPY package.json package-lock.json ./
# npm 源可覆盖：默认官方源；国内构建可以用 --build-arg NPM_REGISTRY=https://registry.npmmirror.com
# （或把它写进项目根目录的 .env，compose 会自动读取，该文件不入库）
ARG NPM_REGISTRY=""
RUN npm ci --no-audit --no-fund ${NPM_REGISTRY:+--registry=$NPM_REGISTRY}

# 复制源码并构建（产物输出到 dist/client）
COPY . .
RUN npm run build

# ---------- 运行阶段：只保留静态文件与 nginx ----------
FROM nginx:1.29-alpine AS runner

LABEL org.opencontainers.image.title="航一把" \
      org.opencontainers.image.description="碧蓝航线版猜船网页游戏（Azurlanedle 网页端）"

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/client /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
