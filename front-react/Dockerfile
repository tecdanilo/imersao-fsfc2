FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]