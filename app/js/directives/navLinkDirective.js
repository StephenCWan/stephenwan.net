define(['angular', '../directives'], function(angular, directives) {

	directives.directive('navLink', [function() {
		return {
			restrict: "E",
			replace: true,
			templateUrl: "partials/navLinkDirective.html",
			controller: function($scope, $attrs, $http) {
				$http({ method: "GET", url: $attrs.iconRef }).success(function(data) {
					$scope.icon = data;
				});
			},
			scope: {
				title: "@title",
				iconRef: "@iconRef",
				link: "@link"
			}
		}
	}]);
});