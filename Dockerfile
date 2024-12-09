# build stage
FROM node:lts-alpine as build-stage
ARG mode=production
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build --mode ${mode}

# production stage
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./entrypoint.sh /entrypoint.sh
EXPOSE 80
RUN chmod +x /entrypoint.sh
ENTRYPOINT [ "sh", "/entrypoint.sh" ]
