
/*
 * create snorql directives
 */

angular.module('snorql.ui',[]) 

.directive("menuToggle",[function() {

    function link(scope, element, attrs) {
      element.click(function () {
        $('.row-offcanvas').toggleClass('active')
        //$('html').toggleClass('overvlow-hidden')
      });
    }
    
    return {
      link: link
    };    
}])

.directive("sparqlFormatter",['snorql',function(snorql) {
    var formatter;
    function link(scope, element, attrs) {
      scope.$watch('sparqlFormatter', function(newValue, oldValue) {
        if (newValue){
          formatter= snorql.SPARQLResultFormatter()
          element.html(formatter.toDOM())
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
}])

