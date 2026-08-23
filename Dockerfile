FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG VITE_OPENROUTER_MODEL
ENV VITE_OPENROUTER_MODEL=${VITE_OPENROUTER_MODEL}

ARG VITE_OPENROUTER_ENDPOINT=/api/openrouter/chat/completions
ENV VITE_OPENROUTER_ENDPOINT=${VITE_OPENROUTER_ENDPOINT}

RUN npm run build

FROM nginx:alpine

ENV OPENROUTER_API_KEY=""
ENV NGINX_ENVSUBST_FILTER="OPENROUTER_API_KEY"

RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx.template.conf /etc/nginx/templates/default.conf.template
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


