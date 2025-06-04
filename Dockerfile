# Build stage
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# ビルド
RUN npm run build

# ポート3000で配信
EXPOSE 3000
CMD ["npm", "start"]