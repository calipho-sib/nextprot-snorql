'use strict';

var app = angular.module('snorql', ['ngRoute', 'ui.codemirror']);




app.controller('SnorqlCtrl', function($scope, $timeout, $location, $routeParams, snorql) {
  //
  // publish The scope
  $scope.snorql=snorql;

  $scope.outputs=['html','json','csv','xml'];
  $scope.output='html';
  
  $scope.waiting=false;
  
  // codemirror option
  $scope.cmOption = {
    lineNumbers: false,
    indentWithTabs: true,
    uiRefresh:true,
    mode:'sparql'
  };

   
  $scope.executeQuery=function(sparql){
    $scope.waiting=true;
    $location.search('query', sparql);
    var params=angular.extend($routeParams,{output:$scope.output});
    snorql.executeQuery(sparql, params).$promise.then(function(){
      $scope.waiting=false;
    });
  };
  
  $scope.selectExample=function(elm){
    snorql.query=snorql.examples[elm].query;
    $('.examples a').removeClass('active');
    $('.examples .query-'+elm).addClass('active');
    $('#toggle-examples').click();
  };
  
  $scope.reset=function(){
    snorql.reset();
  };
  
  //
  // kind of queries,
  // query, describe, class, property
  snorql.setQuery($routeParams);
  
  //
  // load sparql examples
  snorql.loadExamples();
});


/*
 * create snorql service
 */
app.factory('snorql', function($http, $q, $timeout) {

  //
  // list your namespaces
  var namespacePrefixes_ = {
      rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
      rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
      owl: 'http://www.w3.org/2002/07/owl#',
      dc: 'http://purl.org/dc/elements/1.1/',
      dcterms: 'http://purl.org/dc/terms/',
      foaf: 'http://xmlns.com/foaf/0.1/',
      sim: 'http://purl.org/ontology/similarity/',
      mo: 'http://purl.org/ontology/mo/',
      ov: 'http://open.vocab.org/terms/',
      xsd: 'http://www.w3.org/2001/XMLSchema#',
      '': 'http://nextprot.org/rdf#',
      entry: 'http://nextprot.org/rdf/entry/',
      isoform: 'http://nextprot.org/rdf/isoform/',
      annotation: 'http://nextprot.org/rdf/annotation/',
      evidence: 'http://nextprot.org/rdf/evidence/',
      xref: 'http://nextprot.org/rdf/xref/',
      publication: 'http://nextprot.org/rdf/publication/',
      term: 'http://nextprot.org/rdf/terminology/',
      gene: 'http://nextprot.org/rdf/gene/',
      source: 'http://nextprot.org/rdf/source/',
      db: 'http://nextprot.org/rdf/db/',
      context: 'http://nextprot.org/rdf/context/'
  };
  
  var namespacePrefixes={
       owl:'http://www.w3.org/2002/07/owl#',
       xsd:'http://www.w3.org/2001/XMLSchema#',
       rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
       rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
       foaf: 'http://xmlns.com/foaf/0.1/',
       dc: 'http://purl.org/dc/elements/1.1/',
       '': 'http://dbpedia.org/resource/',
       dbpedia2: 'http://dbpedia.org/property/',
       dbpedia: 'http://dbpedia.org/',
       skos: 'http://www.w3.org/2004/02/skos/core#',
       virtuoso:'http://www.openlinksw.com/virtrdf-data-formats'
  };
  
  var defaultSnorql={
    property:'SELECT DISTINCT ?resource ?value\n' +
                  'WHERE { ?resource <URI_COMPONENT> ?value }\n' +
                  'ORDER BY ?resource ?value',
                  
    clazz :  'SELECT DISTINCT ?instance\n' +
                  'WHERE { ?instance a <URI_COMPONENT> }\n' +
                  'ORDER BY ?instance',
                  
    describe:'SELECT DISTINCT ?property ?hasValue ?isValueOf\n' +
                  'WHERE {\n' +
                  '  { <URI_COMPONENT> ?property ?hasValue }\n' +
                  '  UNION\n' +
                  '  { ?isValueOf ?property <URI_COMPONENT> }\n' +
                  '}\n' +
                  'ORDER BY (!BOUND(?hasValue)) ?property ?hasValue ?isValueOf',
                  
    query:   'SELECT DISTINCT * WHERE {\n  ?s ?p ?o\n}\nLIMIT 10',
    
    sparqlEndpoint:'http://dbpedia.org/sparql',
    sparqlUrlExamples:'queries.json'
  };
  
  
  var defaultSnorqlTitle={
    property:'All uses of property URI_COMPONENT:',
                  
    clazz :  'All instances of class URI_COMPONENT:',

    describe:'Description of URI_COMPONENT:',

    query:   'SPARQL results'
  };
    
  
  var defaultSparqlParams={
    'default-graph-uri':null,
    'named-graph-uri':null,
     output:'json',
  };
  
  var defaultAcceptHeaders={
    html:'application/sparql-results+json,*/*',
    json:'application/sparql-results+json,*/*',
    xml:'application/sparql-results+xml,*/*',
    csv:'application/sparql-results+csv,*/*'
  };
  
  //
  // serialize prefixes 
  var query_getPrefixes = function() {
    prefixes = '';
    for (var prefix in namespacePrefixes) {
        var uri = namespacePrefixes[prefix];
        prefixes = prefixes + 'PREFIX ' + prefix + ': <' + uri + '>\n';
    }
    return prefixes;
  };
  
  
  var Snorql=function(){
    //
    // this service depend on two $resources (eg. dao in Java world)
    // this.$dao={queries:$resource('queries.json'), sparqlQuery:$resource('sparql.json')}; 
  
    
    // queries examples
    this.examples=[];
    
    // initial sparql result
    this.result={head:[],results:[]};
    
    // initial sparql query
    this.query=defaultSnorql.query;
    
    // initial url for examples
    this.examplesUrl=defaultSnorql.sparqlUrlExamples;

    //
    // wrap promise to this object
    this.$promise=$q.when(this);
  };

  Snorql.prototype.reset=function(){
    this.result={head:[],results:[]};
  };
  
  Snorql.prototype.endpoint=function(){
    return defaultSnorql.sparqlEndpoint;
  };

  //
  // load sparql examples
  Snorql.prototype.loadExamples=function(){
   var self=this;
   if(this.examples.length){
     return this;
   }
   this.$promise=this.$promise.then(function(){
       return $http({method:'GET',url:this.examplesUrl});
   });
   
   this.$promise.then(function(config){
      self.examples=(config.data);
   });
   
   return this;
  };
  
  // manage default snorql state
  Snorql.prototype.setQuery=function(params){
    // service
    if(params.class){
      this.query=defaultSnorql['class'].replace('URI_COMPONENT',params.class);
    }else
    if(params.property){
      this.query=defaultSnorql['property'].replace('URI_COMPONENT',params.property);
    }else
    if(params.describe){
      this.query=defaultSnorql['describe'].replace('URI_COMPONENT',params.describe);
    }else
      this.query=params.query||defaultSnorql.query;
  }

	
	//
	// start a sparql query,
	//  http filter define : query* (default), describe, class, property and output=json* (default)
  Snorql.prototype.executeQuery=function(sparql,filter){
   var self=this;

   var prefixes=query_getPrefixes();
  
   var params=angular.extend({query:prefixes+' '+sparql}, defaultSparqlParams,filter);
   
   var accept={'Accept':defaultAcceptHeaders[params.output]};

   var url=defaultSnorql.sparqlEndpoint;

   if(params.output!=='html'){
     self.reset();
     var deferred = $q.defer();
     window.location =url+'?'+$.param(params);
     this.$promise=deferred.promise;
     $timeout(function(){
       deferred.resolve(this);
     },200)
     return self;
   }
   
   //
   // html output is done by parsing json
   params.output='json'
   this.$promise=this.$promise.then(function(){
       return $http({method:'GET', url:url,params:params,headers:accept});
   });
   
   this.$promise.then(function(config){
      self.result=(config.data);
      console.log(self.result);
   })
   return this;
  }  

  // access the singleton
  Snorql.prototype.prefixes=function(){
    return namespacePrefixes;
  }
  
  /**
   * SPARQLResultFormatter: Renders a SPARQL/JSON result set into an HTML table.
   */  
  Snorql.prototype.SPARQLResultFormatter=function() {
      return new (function(result, namespaces){
        this._json = result;
        this._variables = this._json.head['vars']||{};
        this._results = this._json.results['bindings']||[];
        this._namespaces = namespaces;
    
        this.toDOM = function() {
            var table = document.createElement('table');
            table.className = 'queryresults';
            table.appendChild(this._createTableHeader());
            for (var i = 0; i < this._results.length; i++) {
            		table.appendChild(this._createTableRow(this._results[i], i));
            }
            return table;
        }
    
        // TODO: Refactor; non-standard link makers should be passed into the class by the caller
        this._getLinkMaker = function(varName) {
            if (varName == 'property') {
                return function(uri) { return '?property=' + encodeURIComponent(uri); };
            } else if (varName == 'class') {
                return function(uri) { return '?class=' + encodeURIComponent(uri); };
            } else {
                return function(uri) { return '/?describe=' + encodeURIComponent(uri); };
            }
        }
    
        this._createTableHeader = function() {
            var tr = document.createElement('tr');
            var hasNamedGraph = false;
            for (var i = 0; i < this._variables.length; i++) {
                var th = document.createElement('th');
                th.appendChild(document.createTextNode(this._variables[i]));
                tr.appendChild(th);
                if (this._variables[i] == 'namedgraph') {
                    hasNamedGraph = true;
                }
            }
            if (hasNamedGraph) {
                var th = document.createElement('th');
                th.appendChild(document.createTextNode(' '));
                tr.insertBefore(th, tr.firstChild);
            }
            return tr;
        }
    
        this._createTableRow = function(binding, rowNumber) {
            var tr = document.createElement('tr');
            if (rowNumber % 2) {
                tr.className = 'odd';
            } else {
                tr.className = 'even';
            }
            var namedGraph = null;
            for (var i = 0; i < this._variables.length; i++) {
                var varName = this._variables[i];
                td = document.createElement('td');
                td.appendChild(this._formatNode(binding[varName], varName));
                tr.appendChild(td);
                if (this._variables[i] == 'namedgraph') {
                    namedGraph = binding[varName];
                }
            }
            if (namedGraph) {
                var link = document.createElement('a');
                link.href = 'javascript:snorql.switchToGraph(\'' + namedGraph.value + '\')';
                link.appendChild(document.createTextNode('Switch'));
                var td = document.createElement('td');
                td.appendChild(link);
                tr.insertBefore(td, tr.firstChild);
            }
            return tr;
        }
    
        this._formatNode = function(node, varName) {
            if (!node) {
                return this._formatUnbound(node, varName);
            }
            if (node.type == 'uri') {
                return this._formatURI(node, varName);
            }
            if (node.type == 'bnode') {
                return this._formatBlankNode(node, varName);
            }
            if (node.type == 'literal') {
                return this._formatPlainLiteral(node, varName);
            }
            if (node.type == 'typed-literal') {
                return this._formatTypedLiteral(node, varName);
            }
            return document.createTextNode('???');
        }
    
        this._formatURI = function(node, varName) {
            var span = document.createElement('span');
            span.className = 'uri';
            var a = document.createElement('a');
            a.href = this._getLinkMaker(varName)(node.value);
            a.title = '<' + node.value + '>';
            a.className = 'graph-link';
            var qname = this._toQName(node.value);
            if (qname) {
                a.appendChild(document.createTextNode(qname));
                span.appendChild(a);
            } else {
                a.appendChild(document.createTextNode(node.value));
                span.appendChild(document.createTextNode('<'));
                span.appendChild(a);
                span.appendChild(document.createTextNode('>'));
            }
            match = node.value.match(/^(https?|ftp|mailto|irc|gopher|news):/);
            if (match) {
                span.appendChild(document.createTextNode(' '));
                var externalLink = document.createElement('a');
                externalLink.href = node.value;
                img = document.createElement('img');
                img.src = '../resources/img/link.png';
                img.alt = '[' + match[1] + ']';
                img.title = 'Go to Web page';
                externalLink.appendChild(img);
                span.appendChild(externalLink);
            }
            return span;
        }
    
        this._formatPlainLiteral = function(node, varName) {
            var text = '"' + node.value + '"';
            if (node['xml:lang']) {
                text += '@' + node['xml:lang'];
            }
            return document.createTextNode(text);
        }
    
        this._formatTypedLiteral = function(node, varName) {
            var text = '"' + node.value + '"';
            if (node.datatype) {
                text += '^^' + this._toQNameOrURI(node.datatype);
            }
            if (this._isNumericXSDType(node.datatype)) {
                var span = document.createElement('span');
                span.title = text;
                span.appendChild(document.createTextNode(node.value));
                return span;
            }
            return document.createTextNode(text);
        }
    
        this._formatBlankNode = function(node, varName) {
            return document.createTextNode('_:' + node.value);
        }
    
        this._formatUnbound = function(node, varName) {
            var span = document.createElement('span');
            span.className = 'unbound';
            span.title = 'Unbound'
            span.appendChild(document.createTextNode('-'));
            return span;
        }
    
        this._toQName = function(uri) {
            for (prefix in this._namespaces) {
                var nsURI = this._namespaces[prefix];
                if (uri.indexOf(nsURI) == 0) {
                    return prefix + ':' + uri.substring(nsURI.length);
                }
            }
            return null;
        }
    
        this._toQNameOrURI = function(uri) {
            var qName = this._toQName(uri);
            return (qName == null) ? '<' + uri + '>' : qName;
        }
    
        this._isNumericXSDType = function(datatypeURI) {
            for (i = 0; i < this._numericXSDTypes.length; i++) {
                if (datatypeURI == this._xsdNamespace + this._numericXSDTypes[i]) {
                    return true;
                }
            }
            return false;
        }
        this._xsdNamespace = 'http://www.w3.org/2001/XMLSchema#';
        this._numericXSDTypes = ['long', 'decimal', 'float', 'double', 'int',
            'short', 'byte', 'integer', 'nonPositiveInteger', 'negativeInteger',
            'nonNegativeInteger', 'positiveInteger', 'unsignedLong',
            'unsignedInt', 'unsignedShort', 'unsignedByte'];
      })(this.result, this.prefixes())
  }
  
  
  return new Snorql()
});

app.directive("menuToggle",[function() {

    function link(scope, element, attrs) {
      element.click(function () {
        $('.row-offcanvas').toggleClass('active')
        $('html').toggleClass('overvlow-hidden')
      });
    }
    
    return {
      link: link
    };    
}]);  

app.directive("sparqlFormatter",['snorql',function(snorql) {
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
}]);  


  