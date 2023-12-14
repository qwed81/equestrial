FROM node:21-alpine3.18

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY src src

RUN npm install --omit=dev

CMD node src/index.js

