FROM node:7.10.0

RUN mkdir app/
WORKDIR app/
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
