define(['angular'], function(angular) {
	return angular.module('stephenwan.services', [])
	.factory('appConfig', ['$location', function($location) {
		return {
			basePath : $location.$$protocol + "://" + $location.$$host + ":" + $location.$$port
		};
	}]);
});