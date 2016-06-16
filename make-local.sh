#!/bin/bash -e
# this is used to build the webapp for local testing
# it is not used to deploy to github 
rm -rf ./build
mkdir ./build
npm update
# without minifyify
# browserify main.js -o ./build/bundle.js
# with minifyify
browserify main.js -d -p [minifyify --map bundle.js.map --output bundle.js.map] -o ./build/bundle.js
cp index.html ./build/
cp index.css ./build/
cd ./build
# The finished website is in ./build
# Put *your* code to deploy it below this line
rm -rf /var/web/192.168.1.10/zi
mkdir -p /var/web/192.168.1.10/zi
cp -a * /var/web/192.168.1.10/zi/
