# Etapa 1 – Build do projeto (nome da etapa: builder)
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN apk update && apk upgrade --no-cache && npm install

COPY . .
RUN npm install && npm run build

# Etapa 2 – Servidor Nginx para servir os arquivos
FROM nginx:stable-alpine

# Copia o build gerado para o diretório do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia um arquivo de configuração customizado do Nginx (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
