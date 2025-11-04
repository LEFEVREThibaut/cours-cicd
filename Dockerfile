# syntax=docker/dockerfile:1

FROM node:20-alpine AS base
WORKDIR /app

COPY package*.json ./

RUN npm ci --no-audit --no-fund || npm install --no-audit --no-fund

COPY . .

FROM base AS test
RUN npm test

FROM node:20-alpine AS final
WORKDIR /app
COPY --from=base /app /app

CMD ["node", "-e", "console.log('Image built. No runtime server defined. Use --target test to run tests during build.')"]
