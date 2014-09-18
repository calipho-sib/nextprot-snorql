'use strict';
//Define the application global configuration
angular.module('snorql.config', []).factory('config', [
    function () {


        var namespacePrefixes={
             owl:'http://www.w3.org/2002/07/owl#',
             xsd:'http://www.w3.org/2001/XMLSchema#',
             rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
             rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
             foaf: 'http://xmlns.com/foaf/0.1/',
             geo:'http://www.w3.org/2003/01/geo/wgs84_pos#',
             dc: 'http://purl.org/dc/elements/1.1/',
             '': 'http://dbpedia.org/resource/',
             dbpedia2: 'http://dbpedia.org/property/',
             dbpedia: 'http://dbpedia.org/',
             skos: 'http://www.w3.org/2004/02/skos/core#',
             category: 'http://dbpedia.org/resource/Category:',
             dcterms: 'http://purl.org/dc/terms/',
             ontology: 'http://dbpedia.org/ontology/',
             virtuoso:'http://www.openlinksw.com/virtrdf-data-formats'
        };

        /*
        var namespacePrefixes={
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
            "": 'http://nextprot.org/rdf#',
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
        */
        
        // global application configuration
        var defaultConfig = {
            sparql : {
              endpoint: 'http://dbpedia.org/sparql',
              examples: 'queries.json',
              prefixes: namespacePrefixes
          }
        }


        return defaultConfig;
    }
]);
