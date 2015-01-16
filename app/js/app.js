(function (angular, undefined) {'use strict';
/**
 * create application snorql and load deps
 */
var app = angular.module('snorql', [
  'ngRoute','ngResource', 'npHelp','ui.codemirror', 'snorql.config', 'snorql.service','snorql.ui'
]).controller('SnorqlCtrl',SnorqlCtrl)
  .factory('errorInterceptor',errorInterceptor)
  .config(appConfig)
  .run(appRun)


// init app
appRun.$inject=['gitHubContent']
function appRun(gitHubContent) {
  gitHubContent.initialize({
        // baseUrl:"http://uat-web2:8080",
        helpPath:'rdfhelp.json',
        helpTitle:'Main truc',
        root:'page', // specify the root of RDF entity routes
        githubRepo:'calipho-sib/nextprot-docs',
        githubToken:'2e36ce76cfb03358f0a38630007840e7cb432a24'
    });
};

//
// implement controller SnorqlCtrl
SnorqlCtrl.$inject=['$scope','$timeout','$location','snorql','config','gitHubContent']
function SnorqlCtrl( $scope,  $timeout,  $location,  snorql,  config, gitHubContent) {
  //
  // go home link
  $scope.home=config.home;
  $scope.pushState=config.pushState;

  //
  // snorql service provide examples, examples tags, config and executeQuery
  $scope.snorql=snorql;

  //
  // setup default output
  $scope.outputs=['html','json','csv','xml'];
  $scope.output='html';
  $scope.showPrefixes = false;

  //
  // default message
  $scope.message="Excuting query ...";

  $scope.waiting=false;
  $scope.filter=""
  $scope.filterTag = null;

  // codemirror option
  $scope.cmOption = {
    lineNumbers: false,
    indentWithTabs: true,
    uiRefresh:true,
    mode:'sparql'
  };

  // vocabulary query
  var vocSparqlQuery='SELECT DISTINCT * WHERE { ?term rdfs:label ?label ; a ?type . filter(regex(?label,"^__CV__","i")) } LIMIT 30';
  $scope.searchTerm=function(term){
      var time=Date.now();
      $scope.executionTime=false;
      $scope.waiting=true;
      $scope.error=false;
      snorql.executeQuery(vocSparqlQuery.replace('__CV__',term), {output:'html'}).$promise.then(function(){
        $scope.waiting=false;
        $scope.executionTime=(Date.now()-time)/1000;
      },function(reason){
        $scope.error=reason.data
        $scope.waiting=false
      });
  }

  $scope.executeQuery=function(sparql,output){
    var time=Date.now();
    $scope.executionTime=false;
    $scope.waiting=true;
    $scope.error=false;
    $location.search('query',sparql)
    $location.search('class',null)
    $location.search('property',null)
    $location.search('describe',null)
    var params=angular.extend($location.search(),{output:output});
    snorql.executeQuery(sparql, params).$promise.then(function(){
      $scope.waiting=false;
      $scope.executionTime=(Date.now()-time)/1000;
    },function(reason){
      $scope.error=reason.data
      $scope.waiting=false
    });
  };

  $scope.selectExample=function(elm){
    snorql.query=snorql.examples[elm].sparql;
    $scope.qSelected=elm
    $('.row-offcanvas').removeClass('active')
  };

  $scope.setFilterTag=function(tag){
    $scope.filterTag=tag;
  };

  $scope.resetFilters=function(){
    $scope.filterTag=null;
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
};


/**
 * ANGULAR BOOTSTRAP
 */
appConfig.$inject=['$routeProvider','$locationProvider','$httpProvider']
function appConfig($routeProvider, $locationProvider, $httpProvider) {

    // intercept errors
    $httpProvider.interceptors.push('errorInterceptor')


    // List of routes of the application
    $routeProvider
        .when('/', {title: 'welcome to snorql', templateUrl: 'partials/home.html'})
        .when('/page/entity/:entity',{title: 'help for snorql', templateUrl: 'partials/help.html'})
        .when('/page/title/:article?',{title: 'help for snorql', templateUrl: 'partials/page.html'})
        .when('/page/:docs?/:article?',{title: 'help for snorql', templateUrl: 'partials/doc.html'})


    // Without serve side support html5 must be disabled.
    $locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix = '!';
};

errorInterceptor.$inject=['$q', '$rootScope', '$location']
function errorInterceptor($q, $rootScope, $location) {
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
};



})(angular);
