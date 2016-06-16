#!/bin/bash -e
rm -rf ./build
mkdir ./build
npm install
browserify main.js -d -p [minifyify --map bundle.js.map --output bundle.js.map] -o ./build/bundle.js
cp index.html ./build/
cp index.css ./build/
cd ./build
# The finished website is in ./build
# Delete the code below and substitue *your* deployment code here
# The code that is below is gh-pages specific
# and only works on the the authors github repository
# If you want to use this in a forked github repository, you
# will need to set travis ci and a travis ci encrypted token.
# This portion inspired by various articles
# Gergely Nemeth's article on medium.com
# https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db#.il0d4odzd
# Janik Vonrotz's article is similar, but actually gets the token format correct
# https://janikvonrotz.ch/2015/11/11/autodeploy-to-github-pages-with-travisci/
# The required URL is username:secrettoken@github.com/..., not merely secrettoken@github.com
git init 
git config user.name "Travis-CI"
git config user.email "travis@eaftc.com"
git add .
git commit -m "Autodeploy to Github Pages"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages >/dev/null 2>&1
