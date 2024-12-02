FROM node:18 AS build

WORKDIR app

COPY my-next-app/package*.json ./
RUN npm install

COPY my-next-app .
RUN npm run build

CMD ["npm", "start"]
