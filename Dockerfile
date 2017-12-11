FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 1111

CMD ["yarn", "start"]
