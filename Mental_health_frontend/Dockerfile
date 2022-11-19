FROM node:13.12.0-alpine
WORKDIR /app/frontend

COPY package.json ./
RUN npm install 
COPY . ./
EXPOSE 3000
