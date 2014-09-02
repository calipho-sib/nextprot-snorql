## angular-snorql
An ultra simple sparql explorer based on the original idea from [SNORQL](https://github.com/kurtjx/SNORQL):

[AngularJS](http://angularjs.org) + [Brunch](http://brunch.io) + [Bootstrap](http://twitter.github.com/bootstrap/)

The purpose of this project is to develop a new version of the original [SNORQL](https://github.com/kurtjx/SNORQL) interface with the lastest standards. This version is based on the html5 frameworks and is screen responsive. 

## Installation
  >npm install

## Usage
  >node app

##Sparql config,

* Examples
This version of SNORQL will display examples from the file [queries.json](app/assets/queries.json) on the interface. 


* Endpoint
You can set your own sparql endpoint by setting the variables (namespacePrefixes and sparqlEndpoint) in the file  [app.js](app/js/app.js) 

 
### minimize the project for production
  >./node_modules/.bin/brunch build -m

