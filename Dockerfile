FROM node:16.15-alpine3.15 as build

WORKDIR app/

COPY package.json package-lock.json ./

RUN npm ci --silent

copy . ./ 

run npm run build


FROM joseluisq/static-web-server:2

COPY --from=build /app/dist /app

EXPOSE 8080

CMD ["--root","/app","--security-headers", "--port", "8080"]


