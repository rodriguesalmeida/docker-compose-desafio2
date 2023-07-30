FROM node:15-alpine

WORKDIR /usr/src/app

COPY index.js .

RUN npm install express --save && npm install mysql --save;

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl http://localhost 

CMD [ "node", "index.js" ]