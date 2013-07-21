define(['angular', 'directives', 'controllers', 'services', 'angularRouter', 'angularAnalytics', 'directives/navLinkDirective'], function(angular) {
	return angular.module('stephenwan', ['stephenwan.directives', 'stephenwan.controllers', 'stephenwan.services', 'ui.state', 'ng', 'angular-google-analytics']);
});