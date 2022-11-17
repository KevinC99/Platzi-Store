FROM node:alpine AS angular_deploy
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# stage 2

FROM nginx:alpine
COPY --from=angular_deploy /app/dist/angular_deploy /usr/share/nginx/html
EXPOSE 8080
