## angular-snorql
A sparql explorer ultra simple based on the original idea of [SNORQL](https://github.com/kurtjx/SNORQL):

[AngularJS](http://angularjs.org) + [Brunch](http://brunch.io) + [Bootstrap](http://twitter.github.com/bootstrap/)

The purpose of this project is to develop a new version of the original [SNORQL](https://github.com/kurtjx/SNORQL) interface that use the latest web standards for javascript and CSS.

## Installation
  >npm install
  >node_modules/.bin/bower install

## Usage
  >node app

##Sparql config: add your own SPARQL endpoint and examples
You can provide SPARQL examples to the user interface by editing file [queries.json](app/assets/queries.json). 
You can also set your own sparql endpoint by setting the variables (*namespacePrefixes* and *sparqlEndpoint*) in the file  [app.js](app/js/app.js) 

 
### minimize the project for production
  >./node_modules/.bin/brunch build -m

Enjoy SPARQLing
