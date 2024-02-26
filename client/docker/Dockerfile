FROM node:14.17.6-alpine3.14
RUN apk add --no-cache python3 py3-pip
RUN apk add --update alpine-sdk
RUN apk add util-linux 

WORKDIR /code
COPY package.json package-lock.json ./
RUN npm install

ENV PATH /code/node_modules/.bin:$PATH
COPY ./ ./

CMD npm start

EXPOSE 4100
