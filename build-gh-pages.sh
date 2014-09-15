# Shell script to build gh-pages.
# Run from root directory.

# define your rebase directory
BASE_DIR=/angular-snorql/

[ -f app.js ] || {
  echo "run $0 from root directory"
  exit 1
} 

[ -f node_modules/.bin/brunch ] || {
 echo "brunch is not there, did you ran npm install"
 exit 1
}

# build current version of the aplication
BASE=$BASE_DIR ./node_modules/.bin/brunch build -P

# switch branch to gh-pages
git checkout gh-pages
[ -f index.html ] ||{
	echo "issue on checkout branch gh-pages"
	exit 1
}

# remove everything and copy the new version
rm -rf css fonts js partials && cp -a build/* .
git add --all
git commit -m "deploy a new version" .

echo "READY to apply git push origin gh-pages"
git push origin gh-pages


