FROM node:14.15.5

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN yarn install --production

COPY . .

EXPOSE 5000

# CMD [ "node", "src/server.js" ]
CMD [ "yarn", "start" ]