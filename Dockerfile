FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG VITE_OPENROUTER_API_KEY
ENV VITE_OPENROUTER_API_KEY=${VITE_OPENROUTER_API_KEY}

ARG VITE_OPENROUTER_MODEL
ENV VITE_OPENROUTER_MODEL=${VITE_OPENROUTER_MODEL}

RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
