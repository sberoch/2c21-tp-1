FROM node:14-alpine

RUN mkdir /usr/app
WORKDIR /usr/app
COPY app.js package*.json ./

RUN npm install

ENTRYPOINT ["node", "app.js"]