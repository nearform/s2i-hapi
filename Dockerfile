FROM openshift/base-centos7
MAINTAINER Ron Litzenberger - nearForm

EXPOSE 3000

ADD . /app
WORKDIR /app
RUN npm install
CMD ["node", "server.js"]