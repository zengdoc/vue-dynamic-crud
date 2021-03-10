set -e

npm run build-mock

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/zengdoc/vue-dynamic-crud.git master:gh-pages

cd -
