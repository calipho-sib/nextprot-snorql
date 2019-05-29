(function (angular, undefined) {
    'use strict';

    //Define the application global configuration
    angular.module('snorql.config', []).factory('config', ['$http',
    function ($http) {

            ///// TODO: fixing; we are breaking the DRY principle and it is really bad (see duplication in nextprot-ui/app/js/np.js) !!!!
            //var BASE_URL = "https://api.nextprot.org"
            var BASE_URL = "https://dev-api.nextprot.org"

            //Environment that should be set from outside //TODO should replace this using GRUNT
            var nxEnvironment = "NX_ENV"; //env can be replaced, by dev, alpha or pro
            if (nxEnvironment.indexOf("NX_") == -1) { // means nxEnvironment content has been replaced by "dev", "alpha", "pro" or "vit"
                var protocol = "http";

                // set protocol
                if (nxEnvironment.toLowerCase() === "pro" || nxEnvironment.toLowerCase() === "vit" || nxEnvironment.toLowerCase() === "dev") {
                    protocol = "https";
                }

                // set api url
                if (nxEnvironment.toLowerCase() === "pro") {
                    BASE_URL = protocol+'://api.nextprot.org';
                }
                else {
                    BASE_URL = protocol+'://' + nxEnvironment.toLowerCase() + '-api.nextprot.org';
                }
            }

            // global application configuration
            var defaultConfig = {
                environment: nxEnvironment,
                apiUrl: BASE_URL,
                // home:'https://github.com/calipho-sib/nextprot-snorql',
                home: '/',
                sparql: {
                    prefixesUrl: BASE_URL + "/sparql-prefixes",
                    endpoint: BASE_URL + '/sparql',
                    examples: BASE_URL + '/queries/tutorial.json?snorql=true',
                         //endpoint: 'http://192.168.10.163:8899/sparql'
                         //endpoint: 'http://10.2.2.58:8899/sparql'
                         //endpoint: 'http://localhost:8899/sparql'
                         //endpoint: 'http://mac-097.isb-sib.ch:8080/sparql'
                         //endpoint: 'http://kant:8890/sparql'
                        // examples: 'http://localhost:8080/nextprot-api-web/demo/sparql/queries.json',
                }
            }


            return defaultConfig;
    }
]);


})(angular);