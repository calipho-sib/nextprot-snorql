'use strict';

/**
 * create application snorql and load deps
 */
var app = angular.module('snorql', [
  'ngRoute', 'ui.codemirror','snorql.service','snorql.ui'
]);

app.controller('SnorqlCtrl', ['$scope','$timeout','$location','snorql', function($scope, $timeout, $location, snorql) {
  //
  // snorql service provide examples, examples tags, config and executeQuery
  $scope.snorql=snorql;

  //
  // setup default output
  $scope.outputs=['html','json','csv','xml'];
  $scope.output='html';

  //
  // default message
  $scope.message="Excuting query ...";

  $scope.waiting=false;
  $scope.filter=""
  
  // codemirror option
  $scope.cmOption = {
    lineNumbers: false,
    indentWithTabs: true,
    uiRefresh:true,
    mode:'sparql'
  };

   
  $scope.executeQuery=function(sparql){
    $scope.waiting=true;
    $scope.error=false;
    $location.search('query',sparql)
    $location.search('class',null)
    $location.search('property',null)
    $location.search('describe',null)
    var params=angular.extend($location.search(),{output:$scope.output});
    snorql.executeQuery(sparql, params).$promise.then(function(){
      $scope.waiting=false;
    },function(reason){
      $scope.error=reason.data
      $scope.waiting=false
    });
  };
  
  $scope.selectExample=function(elm){
    snorql.query=snorql.examples[elm].query;
    $scope.qSelected=elm
    $('#toggle-examples').click();
  };
  
  $scope.reset=function(){
    snorql.reset();
  };

  //
  // load sparql examples
  snorql.loadExamples()
  
  //
  // kind of queries,
  // query, describe, class, property
  snorql.updateQuery($location.search())
  // $scope.executeQuery(snorql.updateQuery($location.search()));
  $scope.$on('$locationChangeSuccess',function(url){
    snorql.updateQuery($location.search())
  })
  
}]);


/**
 * ANGULAR BOOTSTRAP 
 */
app.config([
    '$routeProvider',
    '$locationProvider',
    '$httpProvider',
    function ($routeProvider, $locationProvider, $httpProvider) {

        // intercept errors
        $httpProvider.interceptors.push('errorInterceptor')


        // List of routes of the application
        $routeProvider
            .when('/', {title: 'welcome to snorql', templateUrl: 'partials/home.html'});


        // Without serve side support html5 must be disabled.
        $locationProvider.html5Mode(true);
        //$locationProvider.hashPrefix = '!';
    }
]);

app.factory('errorInterceptor', ['$q', '$rootScope', '$location',
    function ($q, $rootScope, $location) {
        return {
            request: function (config) {
                return config || $q.when(config);
            },
            requestError: function(request){
                return $q.reject(request);
            },
            response: function (response) {
                return response || $q.when(response);
            },
            responseError: function (response) {
                if (response && response.status === 0) {
                  $rootScope.error="The API is not accessible";
                }
                if (response && response.status === 401) {
                  $rootScope.error="You are not authorized to access the resource. Please login or review your privileges.";
                }
                if (response && response.status === 404) {
                  $rootScope.error="URL not found";
                }
                if (response && response.status >= 500) {
                  $rootScope.error="Request Failed";
                }
                return $q.reject(response);
            }
        };
}]);


  