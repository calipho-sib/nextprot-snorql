# neXtProt - The knowledge resource on human proteins

This is a code repository for the SIB - Swiss Institute of Bioinformatics CALIPHO group neXtProt project

See: https://www.nextprot.org/

# neXtProt SNORQL

A ultra simple SPARQL explorer for neXtProt data based on the original idea of [SNORQL](https://github.com/kurtjx/SNORQL):

See the live version here: [http://snorql.nextprot.org](http://snorql.nextprot.org)

The purpose of this project is to develop a new version of the original [SNORQL](https://github.com/kurtjx/SNORQL) interface that use the latest web standards for javascript and CSS.
[AngularJS](http://angularjs.org) + [Brunch](http://brunch.io) + [Bootstrap](http://twitter.github.com/bootstrap/)

## Installation
```
$ npm install
$ node_modules/.bin/bower install


## later on when a dependency has changed

$ node_modules/.bin/bower update

```
## Usage
```
$ node app
```

##Sparql config: add your own SPARQL endpoint and examples
You can provide SPARQL examples to the user interface by editing file [queries.json](app/assets/queries.json).
You can also set your own sparql endpoint by setting the variables (*namespacePrefixes* and *sparqlEndpoint*) in the file  [app.js](app/js/app.factory.js)

### Deploy applicatio
```
#
# change your project base directory in the script
sh build-gh-pages.sh [/base/ (default angular-snorql)] [remote (default origin)]
```

```
# deploy to inhouse server
sh build-gh-pages.sh / npteam@plato:/work/www/snorql.nextprot.org/
```

### minimize the project for production
```
$ ./node_modules/.bin/brunch build -m
```


Enjoy SPARQLing
