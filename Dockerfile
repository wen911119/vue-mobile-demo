# 多阶段构建
# 第一阶段npm-build
FROM registry.docker-cn.com/library/node:alpine AS npm-builder

ADD ./src src/
ADD ./build build/
ADD ./config config/
ADD ./static static/
ADD .babelrc .babelrc
ADD .postcssrc.js .postcssrc.js
ADD index.html index.html
ADD package.json package.json
ADD package-lock.json package-lock.json

RUN ls
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install
RUN npm run build
RUN ls

# 第二阶段打包镜像
# 基础镜像
FROM registry.docker-cn.com/library/nginx:stable-alpine
# 维护者信息
LABEL maintainer="wen911119@gmail.com"

COPY --from=npm-builder dist /usr/share/nginx/html/

ADD nginx.conf /etc/nginx/conf.d/default.conf
ADD start-nginx.sh /root/start-nginx.sh

EXPOSE 80

CMD ["/bin/sh", "/root/start-nginx.sh"]
