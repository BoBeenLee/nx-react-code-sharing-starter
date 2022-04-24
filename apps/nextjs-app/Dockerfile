FROM node:14.17.1-alpine3.11

WORKDIR /app
COPY ./dist/apps/nextjs-app .

ENV PORT 3000

RUN npm install --production

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]
