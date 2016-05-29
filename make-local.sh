#!/bin/bash -e
# this is used to build the webapp for local testing
# it is not used to deploy to github 
rm -rf ./html5csv ./node_modules ./build
mkdir ./build
npm update
browserify main.js -o ./build/bundle.js
cp index.html ./build/
cp index.css ./build/
cd ./build
git clone https://github.com/drpaulbrewer/html5csv
# The finished website is in ./build
# Put *your* code to deploy it below this line
rm -rf /var/web/192.168.1.10/zi
mkdir -p /var/web/192.168.1.10/zi
cp -a * /var/web/192.168.1.10/zi/
