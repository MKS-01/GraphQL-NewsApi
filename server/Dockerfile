# syntax=docker/dockerfile:1

FROM node:14.17.3
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production
# RUN npm install 

COPY . .

EXPOSE 4000 

# CMD [ "npm", "start" ]
# CMD [ "node", "src/server.js" ]
# CMD [ "npm", "run", "start-pm2" ]

RUN npm install pm2 -g

CMD ["pm2-runtime", "src/server.js"]

