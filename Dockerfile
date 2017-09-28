FROM openshift/base-centos7
MAINTAINER Ron Litzenberger - nearForm

EXPOSE 3000
COPY . /opt/app-root/src/
CMD ["node", "server.js"]