FROM node:20.18.0-alpine3.19

WORKDIR /PracticaDocker/api/rest-api

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
