FROM nginx:1.15.0-alpine

WORKDIR /usr/src/app

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/

RUN mkdir /usr/src/app -p && touch /usr/src/app/index.js
