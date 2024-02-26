FROM node:14.17.6-alpine3.14

ENV NODE_HOST 0.0.0.0

RUN apk add --no-cache python2 python3 py3-pip libtool alpine-sdk autoconf automake g++ libsodium-dev
RUN ln -sf python2 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools
RUN npm install --global node-gyp

WORKDIR /code
COPY package.json package-lock.json ./
RUN npm install --no-optional

ENV PATH /code/node_modules/.bin:$PATH
COPY ./ ./
CMD npm start

EXPOSE 3000
