FROM node:24-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ARG VITE_OPENROUTER_MODEL
ENV VITE_OPENROUTER_MODEL=${VITE_OPENROUTER_MODEL}
ARG VITE_OPENROUTER_ENDPOINT=/api/openrouter/chat/completions
ENV VITE_OPENROUTER_ENDPOINT=${VITE_OPENROUTER_ENDPOINT}
RUN npm run build

FROM node:24-slim
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV DATABASE_PATH=/app/data/gemini-japanese.sqlite
COPY --from=builder /app/dist ./dist
COPY server ./server
RUN mkdir -p /app/data && chown -R node:node /app
USER node
VOLUME ["/app/data"]
EXPOSE 3000
CMD ["node", "server/index.mjs"]
