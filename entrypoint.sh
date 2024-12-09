#!/bin/sh

ROOT_DIR=/usr/share/nginx/html

# load configuration
echo "Loading configuration from environmental variables"
for file in $ROOT_DIR/js/*.js* $ROOT_DIR/index.html $ROOT_DIR/precache-manifest*.js;
do
  echo "Processing $file ...";

  sed -i "s|VUE_APP_API_URL_VALUE|$VUE_APP_API_URL|g" $file
  sed -i "s|VUE_APP_API_TIMEOUT_VALUE|$VUE_APP_API_TIMEOUT|g" $file
done

# start production application
echo "Starting Nginx"
nginx -g "daemon off;"
