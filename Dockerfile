# Build stage
FROM node:18-alpine
WORKDIR /app

# pnpm を有効化（package.json の packageManager を使用）
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .

# ビルド
RUN pnpm run build

# ポート3000で配信
EXPOSE 3000
CMD ["pnpm", "start"]