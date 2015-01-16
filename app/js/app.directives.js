(function (angular, undefined) {'use strict';

/*
 * create snorql directives
 */

angular.module('snorql.ui',[])
  .directive("menuToggle",menuToggle)
  .directive("sparqlFormatter",sparqlFormatter)
  .filter("containsTag",containsTag);


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
