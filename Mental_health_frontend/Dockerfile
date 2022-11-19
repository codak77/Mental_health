FROM node:13.12.0-alpine
WORKDIR /app/Mental_health_frontend

COPY package.json ./
RUN npm install --upgrade
COPY . ./
EXPOSE 3000
