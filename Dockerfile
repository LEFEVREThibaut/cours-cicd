# syntax=docker/dockerfile:1

FROM node:25-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev --no-audit --no-fund

COPY . .

USER node

CMD ["node", "acceuil.js"]
