#!/bin/bash -e
rm -rf ./html5csv ./node_modules ./build
mkdir ./build
npm i single-market-robot-simulator
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
