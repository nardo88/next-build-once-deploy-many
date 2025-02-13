FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

ENV NEXT_PUBLIC_FOO=${NEXT_PUBLIC_FOO}

RUN yarn run build

# Запускаем сервер и генерируем env-config.json из окружения
CMD ["node_modules/.bin/next", "start"]