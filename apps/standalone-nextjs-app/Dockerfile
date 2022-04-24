FROM node:14.17.1-alpine3.11

WORKDIR /app
COPY ./dist/apps/standalone-nextjs-app .

ENV PORT 3000
ENV NEXT_DIR .
ENV NODE_ENV production

RUN npm install --production

EXPOSE 3000

CMD ["node", "main.js"]
