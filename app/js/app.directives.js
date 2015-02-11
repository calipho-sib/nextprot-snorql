(function (angular, undefined) {'use strict';

/*
 * create snorql directives
 */

angular.module('snorql.ui',[])
  .directive("menuToggle",menuToggle)
  .directive("sparqlFormatter",sparqlFormatter)
  .filter("containsTag",containsTag)
  .filter("addQueryPrefix",addQueryPrefix)
  .filter("getGitHubUrl",getGitHubUrl)
  .filter("getNeXtProtUrl",getNeXtProtUrl);

containsTag.$inject=[]
function containsTag() {
  return function( items, selectedTag) {
    var filtered = [];
    if(selectedTag == null)
      return items;

    angular.forEach(items, function(item) {
      if(_.intersection([selectedTag], item.tags).length > 0) {
        filtered.push(item);
      }
    });
    return filtered;
  };
};

getNeXtProtUrl.$inject=['config']
function getNeXtProtUrl(config) {
  return function(input) {
    if(config.environment === "pro"){
      switch(input) {
        case "api": return "https://api.nextprot.org" ;
        case "search": return "https://search.nextprot.org" ;
        case "snorql": return "http://snorql.nextprot.org" ;
      }
    }

    if(input == "api") return config.apiUrl;
    else return "http://"+ config.environment + "-" + input + ".nextprot.org";
  }
};

addQueryPrefix.$inject=[]
function addQueryPrefix() {
  return function(queryId) {
      var s = "000000000" + queryId;
      return "NXQ_" + s.substr(s.length-5);
    };
};

getGitHubUrl.$inject=['config']
function getGitHubUrl(config) {
  return function(queryId) {

    var s = "000000000" + queryId;
    var fileName = "NXQ_" + s.substr(s.length-5) + ".rq";
    return config.githubEdit + fileName;
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
