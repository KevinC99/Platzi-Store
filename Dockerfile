FROM nginx:stable-alpine
COPY . /usr/share/nginx/html
EXPOSE 8080/tcp
EXPOSE 8080/udp
