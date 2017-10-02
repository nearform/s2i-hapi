# s2i-hapi
demo app used with s2i

# Description

This is a demo web app to be used with Openshift S2I builder.  We have a custom builder that can be used to target any NodeJS version. 

# Requirements

S2I bulder - Install on mac using `brew install source-to-image`

Nearform Custom builder for NodeJS 'git clone https://github.com/nearform/centos7-s2i-nodejs.git'

Docker Hub Account - In order for openshift to builb ontop of the OS NodeJS layer, we will need to have access to that build in a docker registry.  Using Docker hub for now but can be a private registry.

Minishift/OpenShift - need to have Minishift if local or Openshift cluster up and running.  `git clone https://github.com/nearform/minishift-demo' to setup Minishift local.


# Steps

Below are the steps to run a nodejs app on a speceifiac version of NodeJS (Binary at the momoment)

```
cd centos7-s2i=nodejs

# change image version and username based on Docker Hub account
# use version numbers found here: https://nodejs.org/dist/

make NODE_VERSION="8.6.0" IMAGE_NAME="nearform/centos7-s2i-nodejs" IMAGE_TAG="8.6.0" build

#publish to Docker
make NODE_VERSION="8.6.0" IMAGE_NAME="nearform/cent0s7-s2i-nodejs" IMAGE_TAG="8.6.0" DOCKER_USER="" DOCKER_PASS="" publish


#log into openshift as admin
oc login -u system:admin

# create new app in Openshift

oc new-app nearform/centos7-s2i-nodejs:8.6.0~https://github.com/nearform/s2i-hapi

oc logs -f bc/s2i-hapi

#after new app is finished
oc expose svc/s2i-hapi

```

You should be able to see it run here:

http://s2i-hapi-myproject.192.168.99.100.nip.io/









