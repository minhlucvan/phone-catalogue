FROM node:14.1-alpine AS builder

WORKDIR /opt/web
COPY package.json package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN npm run build

FROM steebchen/nginx-spa:stable

COPY --from=builder /opt/web/build /app

EXPOSE 80

CMD ["nginx"]
