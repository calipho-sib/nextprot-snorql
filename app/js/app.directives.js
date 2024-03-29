(function (angular, undefined) {'use strict';

/*
 * create snorql directives
 */

angular.module('snorql.ui',[])
  .directive("menuToggle",menuToggle)
  .directive("sparqlFormatter",sparqlFormatter)
  .filter("containsTag",containsTag)
  .filter("getNxqId",getNxqId)
  .filter("getNeXtProtUrl",getNeXtProtUrl);

containsTag.$inject=['user']
function containsTag(user) {

  return function(items, selectedTag) {
    var filtered = [];
    if(selectedTag == null)
      return items;

    if(selectedTag === 'My queries'){
      angular.forEach(items, function(item) {
        if(item.owner === user.username) {
          filtered.push(item);
        }
      });
    }else {
      angular.forEach(items, function(item) {
        if(_.intersection([selectedTag], item.tags).length > 0) {
          filtered.push(item);
        }
      });

    }

    return filtered;
  };

};

getNeXtProtUrl.$inject=['config']
function getNeXtProtUrl(config) {
  return function(input) {
    if(config.environment === "pro"){
        switch(input) {
            case "api": return "https://api.nextprot.org" ;
            case "search": return "https://www.nextprot.org" ;
            case "snorql": return "http://snorql.nextprot.org" ;
            case "sparql": return "https://sparql.nextprot.org" ;
        }
    }
    //Because dev is HTTPS
    else if(config.environment === "dev" || (config.environment.indexOf("NX_") > -1)) {
        switch(input) {
            case "api": return "https://dev-api.nextprot.org" ;
            case "search": return "https://dev-search.nextprot.org" ;
            case "snorql": return "http://dev-snorql.nextprot.org" ;
            case "sparql": return "https://dev-api.nextprot.org/sparql" ;
        }
    }
    else if(input === "sparql") {
        return "https://" + config.environment + "-api.nextprot.org/sparql";
    }
    else return "https://" + config.environment + "-" + input + ".nextprot.org";
}};

function getNxqId() {
  return function(queryId) {

    var s = "000000000" + queryId;
    return "NXQ_" + s.substr(s.length-5);
  };
};

//
// implement menuToggle
menuToggle.$inject=[]
function menuToggle() {
  function link(scope, element, attrs) {
    element.click(function () {
      $('.row-offcanvas').toggleClass('active')
      //$('html').toggleClass('overvlow-hidden')
    });
  }
  return {
    link: link
  };
}

//
// implement sparqlFormatter
sparqlFormatter.$inject=['snorql']
function sparqlFormatter(snorql) {
    var formatter;
    function link(scope, element, attrs) {
      scope.$watch('sparqlFormatter', function(newValue, oldValue) {
        if (newValue){
          formatter= snorql.SPARQLResultFormatter()
          element.html(formatter.toDOM())
          element.find('a').click(function(){
            window.scrollTop();
          })
        }
      });
    }

    return {
        restrict: 'A',
        scope: {
            sparqlFormatter: '='
        },
        link: link
    };
}

})(angular);
