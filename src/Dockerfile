FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install --omit=dev
RUN node register.js
CMD ["node", "index.js"]