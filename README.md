## angular-snorql
An ultra simple sparql explorer based on the original idea from [SNORQL](https://github.com/kurtjx/SNORQL):

[AngularJS](http://angularjs.org) + [Brunch](http://brunch.io) + [Bootstrap](http://twitter.github.com/bootstrap/)

The purpose of this project is to develop a ultra simple modern SNORQL interface available for any sparql endpoint. This version is based on the standard html5 framework and is screen responsive. 

## Installation
  >npm install

## Usage
  >node app

##Sparql config,

* Examples
Starting sparql with an empty screen is not the easy way. This version of SNORQL will display examples from the file [queries.json](app/assets/queries.json) in the interface. 


* Endpoint
You can set your own sparql endpoint in the [app.js](app/js/app.js) file

 
### minimize the project for production
  >./node_modules/.bin/brunch build -m

