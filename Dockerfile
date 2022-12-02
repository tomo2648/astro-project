FROM node:16-alpine 

WORKDIR /app

RUN apk update && \
    apk add git && \
    apk add openssh

ENV HOST 0.0.0.0
EXPOSE 3000