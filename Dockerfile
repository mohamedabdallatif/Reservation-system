FROM node:latest

COPY . .

WORKDIR /app

RUN npm install

CMD npm run dev