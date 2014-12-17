# Shell script to build gh-pages.
# Run from root directory.

# define your rebase directory
BASE_DIR=/nextprot-snorql/

[ -n "$1" ] && BASE_DIR=$1
[ -n "$2" ] && DEST=$2

# exit on control+c
control_c(){
  echo -en "\n*** Ouch! Exiting ***\n"
  exit 1
}

echo "deploying application on $DEST with base-url: $BASE_DIR"

# check if file app.js exists
[ -f app.js ] || {
  echo "run $0 from root directory"
  exit 1
}

# check if brunch exists
[ -f node_modules/.bin/brunch ] || {
 echo "brunch is not there, did you ran npm install"
 exit 1
}

# build current version of the aplication
BASE=$BASE_DIR ./node_modules/.bin/brunch build -P

# switch branch to gh-pages
git checkout gh-pages

# check if index.html exists
[ -f index.html ] ||{
	echo "issue on checkout branch gh-pages"
	exit 1
}

# where destination is not github
[ -n "$DEST" ] && {
  #  rsync -e ssh -auvz --delete-after . npteam@plato:/work/www/snorql.nextprot.org/
  rsync -e ssh -auvz --delete-after build/ $DEST
  git commit -m "deploy inhouse new version" .
  git checkout master
  exit 0;
}

# make it happy
git pull origin gh-pages
git fetch --all
git reset --hard origin/gh-pages

# remove everything and copy the new version
rm -rf css fonts js partials && cp -a build/* .
git add --all
git commit -m "deploy github new version" .

echo "READY to deploy in github gh-pages"
git push origin gh-pages; git checkout master
