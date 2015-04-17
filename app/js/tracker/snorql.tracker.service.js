'use strict';

var TrackingService = angular.module('snorql.tracker', []);

TrackingService.factory('Tracker', [
    '$window',
    '$location',
    '$routeParams',
    function ($window, $location, $routeParams) {

        var tracker = {};

        tracker.trackPageView = function () {
            $window.ga('send', 'pageview', $location.url());
        };

        tracker.trackTransitionRouteChangeEvent = function(dest) {

            var gaEvent = {
                'hitType': 'event',
                'eventCategory': 'snorql_routing-'+dest
            };
            console.log("tracking route -> ga event:", gaEvent);

            if (Object.keys(gaEvent).length>0) {
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

            console.log("tracking route -> ga event:", gaEvent);

            if (Object.keys(gaEvent).length>0) {
                //ga('send', gaEvent);
            }
        };

        tracker.trackSelectExampleEvent = function(selectedQueryId) {

            var gaEvent = {
                'hitType': 'event',
                'eventCategory': 'snorql_select-example'
            };

            gaEvent.eventAction = gaEvent.eventCategory;
            gaEvent.eventLabel = gaEvent.eventAction+'_'+formatQueryId(selectedQueryId);

            console.log("tracking selection event -> ga event:", gaEvent);

            ga('send', gaEvent);
        };

        tracker.trackSearchTermEvent = function(term, hasSucceed) {

            var gaEvent = newSearchTermEvent(term);

            if (hasSucceed) gaEvent.eventLabel = gaEvent.eventLabel+'_success';
            else gaEvent.eventLabel = gaEvent.eventLabel+'_failure';

            ga('send', gaEvent);
        };

        function newSearchTermEvent(term) {

            var gaEvent = {
                'hitType': 'event',
                'eventCategory': 'snorql_search'
            };

            gaEvent.eventAction = gaEvent.eventCategory+'_term';
            gaEvent.eventLabel = gaEvent.eventAction+'_'+term;

            console.log("tracking search term -> ga event:", gaEvent);

            return gaEvent;
        }

        function RouteEvent(funcCategory, funcAction, funcLabel) {

            funcCategory = typeof funcCategory !== 'undefined' ? funcCategory : function() {return ""};
            funcAction = typeof funcAction !== 'undefined' ? funcAction : function() {return ""};

            var event = {
                'hitType': 'event',
                'eventCategory': 'snorql_'+funcCategory(),
                'eventAction': 'snorql_'+funcAction()
            };

            if (typeof funcLabel !== 'undefined')
                event.eventLabel = 'snorql_'+funcLabel();

            return event;
        }

        function HelpRouteEvent(doctype, docname) {

            var delimitor = '_';

            var object = new RouteEvent(category, action, label);

            function category() {
                return 'help';
            }

            function action() {
                return category()+delimitor+doctype;
            }

            function label() {
                return action()+delimitor+docname;
            }

            return object;
        }

        function SparqlSearchRouteEvent(output) {

            var delimitor = '_';

            function category() {
                return 'search';
            }

            function action() {

                return category()+delimitor+'sparql';
            }

            function label() {

                return action()+delimitor+((output) ? output : 'html');
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

        return tracker;
    }]);

