FROM node:20-alpine

WORKDIR /src

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
