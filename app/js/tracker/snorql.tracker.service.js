'use strict';

var TrackingService = angular.module('snorql.tracker', []);

TrackingService
    .value('developTrackingId', 'UA-61448300-1')
    .value('productionTrackingId', 'UA-61448300-2')
    .value('trackingProduction', 'NX_TRACKING_PROD');

TrackingService.factory('Tracker', [
    '$window',
    '$location',
    '$routeParams',
    'version', 'build',
    'developTrackingId','productionTrackingId','trackingProduction',
    function ($window, $location, $routeParams,
              version, build,
              developTrackingId, productionTrackingId, trackingProduction) {

        var separator = '_';

        var tracker = {};

        tracker.trackPageView = function () {
            $window.ga('send', 'pageview', $location.url());
        };

        tracker.trackTransitionRouteChangeEvent = function(dest) {

            var gaEvent = {
                'hitType': 'event',
                'eventCategory': 'snorql'+separator+'routing-'+dest
            };

            if (Object.keys(gaEvent).length>0) {

                console.log("tracking transition route -> ga event:", gaEvent);
                ga('send', gaEvent);
            }
        };

        tracker.trackRouteChangeEvent = function() {

            var gaEvent = {};

            if ("article" in $routeParams) {
                gaEvent = new HelpRouteEvent('doc', $routeParams.article);
            }
            else if ("entity" in $routeParams) {
                gaEvent = new HelpRouteEvent('entity', $routeParams.entity);
            }
            else if ("query" in $routeParams) {
                gaEvent = new SparqlSearchRouteEvent($routeParams.output);
            }

            if (Object.keys(gaEvent).length>0) {

                console.log("tracking route -> ga event:", gaEvent);
                ga('send', gaEvent);
            }
        };

        tracker.trackSelectExampleEvent = function(selectedQueryId) {

            var gaEvent = {
                'hitType': 'event',
                'eventCategory': 'snorql'+separator+'select-example'
            };

            gaEvent.eventAction = gaEvent.eventCategory;
            gaEvent.eventLabel = gaEvent.eventAction+separator+selectedQueryId;

            //console.log("tracking example selection event -> ga event:", gaEvent);

            ga('send', gaEvent);
        };

        tracker.trackSearchTermEvent = function(term, hasSucceed) {

            if (!hasSucceed) {

                var exceptionEvent = {
                    'exDescription': 'could not search term "'+term+'"',
                    'exFatal': false,
                    'appName': 'nextprot-snorql',
                    'appVersion': version
                };

                if (!isNaN(build))
                    exceptionEvent.appVersion += "-build."+build;

                console.log("tracking searching term exception -> ga event:", exceptionEvent);
                ga('send', 'exception', exceptionEvent);
            } else {

                var gaEvent = newSearchTermEvent(term);

                console.log("tracking searching term event -> ga event:", gaEvent);
                ga('send', gaEvent);
            }
        };

        tracker.trackContactUsEvent = function(subject) {

            var gaEvent = {
                'hitType': 'event',
                'eventCategory': 'snorql'+separator+'contact-us'
            };

            gaEvent.actionCategory = gaEvent.eventCategory+separator+subject;

            console.log("tracking contacting us -> ga event:", gaEvent);
            ga('send', gaEvent);
        };

        function newSearchTermEvent(term) {

            var gaEvent = {
                'hitType': 'event',
                'eventCategory': 'snorql'+separator+'search'
            };

            gaEvent.eventAction = gaEvent.eventCategory+separator+'term';
            gaEvent.eventLabel = gaEvent.eventAction+separator+term;

            console.log("tracking search term -> ga event:", gaEvent);

            return gaEvent;
        }

        function RouteEvent(funcCategory, funcAction, funcLabel) {

            funcCategory = typeof funcCategory !== 'undefined' ? funcCategory : function() {return ""};
            funcAction = typeof funcAction !== 'undefined' ? funcAction : function() {return ""};

            var event = {
                'hitType': 'event',
                'eventCategory': 'snorql'+separator+funcCategory(),
                'eventAction': 'snorql'+separator+funcAction()
            };

            if (typeof funcLabel !== 'undefined')
                event.eventLabel = 'snorql'+separator+funcLabel();

            return event;
        }

        function HelpRouteEvent(doctype, docname) {

            var object = new RouteEvent(category, action, label);

            function category() {
                return 'help';
            }

            function action() {
                return category()+separator+doctype;
            }

            function label() {
                return action()+separator+docname;
            }

            return object;
        }

        function SparqlSearchRouteEvent(output) {

            function category() {
                return 'search';
            }

            function action() {

                return category()+separator+'sparql';
            }

            function label() {

                return action()+separator+((output) ? output : 'html');
            }

            return new RouteEvent(category, action, label);
        }

        function formatQueryId(queryId) {

            function log10(val) {
                return Math.log(val) / Math.LN10;
            }
            var numOf0s = 4-Math.floor(log10(queryId));
            var query = "NXQ_";

            while (numOf0s--) {
                query += '0';
            }
            query += queryId;

            return query;
        }

        // The ga() function provides a single access point for everything in the analytics.js library
        // all tracking calls are made via the ga() function
        function createAndInitGATracker(propertyId) {

            // Google Analytics
            // Asynchronously loads the analytics.js library onto this page
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            // Creates a new default tracker object
            ga('create', propertyId, 'auto');
        }

        function getTrackingId() {

            var trackingId = (trackingProduction == "true") ? productionTrackingId : developTrackingId;

            console.log('Tracking ids: { develop:', developTrackingId, ', production:', productionTrackingId, ', current tracking:', trackingId, '}');

            return trackingId;
        }

        // Setup Universal Analytics Web Tracking (analytics.js)
        createAndInitGATracker(getTrackingId());

        // Sends a first pageview hit for the current page to Google Analytics
        ga('send', 'pageview');

        return tracker;
    }]);

