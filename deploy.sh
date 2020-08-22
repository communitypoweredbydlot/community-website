#!/usr/bin/env sh

set -e

WEBSITE_VERSION=$(grep version package.json | awk -F \" '{print $4}')
SOURCE_BRANCH=$(git branch --show-current)

npm run generate

cd dist

git init
git add -A
git commit -m "Deploy $WEBSITE_VERSION from $SOURCE_BRANCH"

git push -f git@github.com:communitypoweredbydlot/communitypoweredbydlot.github.io.git master

cd -