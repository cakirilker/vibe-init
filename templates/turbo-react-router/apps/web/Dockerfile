FROM node:20-alpine AS base
RUN npm install -g pnpm
RUN apk add --no-cache libc6-compat

FROM base AS dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/
COPY packages ./packages
RUN pnpm install --frozen-lockfile

FROM base AS build
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/apps/web/node_modules ./apps/web/node_modules
RUN pnpm --filter web run build

FROM base AS production
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/
COPY packages ./packages
RUN pnpm install --prod --frozen-lockfile

FROM node:20-alpine AS runtime
RUN npm install -g pnpm
WORKDIR /app
COPY --from=production /app/node_modules ./node_modules
COPY --from=production /app/apps/web/node_modules ./apps/web/node_modules
COPY --from=build /app/apps/web/build ./apps/web/build
COPY apps/web/package.json ./apps/web/
WORKDIR /app/apps/web
EXPOSE 5173
CMD ["pnpm", "run", "start"]
