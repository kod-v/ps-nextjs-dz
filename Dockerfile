
# В официальной документации уже есть пример, просто скопируем его
# https://github.com/vercel/next.js/blob/canary/examples/with-docker-compose/next-app/dev.Dockerfile
# https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

FROM node:22.15.0-alpine

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time
ENV NEXT_TELEMETRY_DISABLED=1


# Note: Не выставляйте здесь порты, Compose справится с этим за нас
# Note: Не копируйте здесь файлы, они примонтируются благодаря настройкам Compose

# Start Next.js in development mode based on the preferred package manager
CMD ["/bin/sh", "-c", "npm install && npm run dev"]
