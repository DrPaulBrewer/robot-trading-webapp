#!/bin/bash -e
rm -rf ./build
mkdir ./build
npm install
browserify main.js -o ./build/bundle.js
cp index.html ./build/
cp index.css ./build/
cd ./build
git clone http://github.com/drpaulbrewer/html5csv
# The finished website is in ./build
# Delete the code below and substitue *your* deployment code here
# The code that is below is gh-pages specific
# and only works on the the main repository
# This portion inspired by Gergely Nemeth's article on medium.com
# https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db#.il0d4odzd
git init 
git config user.name "Travis-CI"
git config user.email "travis@eaftc.com"
git add .
git commit -m "Autodeploy to Github Pages"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages >/dev/null 2>&1


