define(['angular', 'directives', 'controllers', 'angularRouter', 'angularAnalytics', 'directives/navLinkDirective'], function(angular) {
	return angular.module('stephenwan', ['stephenwan.directives', 'stephenwan.controllers', 'ui.state', 'ng', 'angular-google-analytics']);
});