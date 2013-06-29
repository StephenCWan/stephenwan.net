angular.module('stephenwan', ['ui.state', 'ng'])
.config(function($stateProvider, $routeProvider, $locationProvider) {
	$stateProvider.state('index', {
		url: "",
		templateUrl: "partials/home.html"
	}).state('blog', {
		url: "/blog",
		templateUrl: "partials/blog.html"
	}).state('projects', {
		url: "/projects",
		templateUrl: "partials/projects.html"
	}).state('gallery', {
		url: "/gallery",
		templateUrl: "partials/gallery.html"
	}).state('contact', {
		url: "/contact",
		templateUrl: "partials/contact.html"
	});

}).controller('navigationCtrl', ['$scope', '$http', function($scope, $http) {
	var loadResource = function(resource, identifier) {
		$http({ method: "GET", url: resource }).success(function(data) {
			$scope[identifier] = data;
		});
	};

	loadResource("img/cloud.svg", "cloud");
	loadResource("img/ironman.svg", "ironman");
	loadResource("img/camera.svg", "camera");
	loadResource("img/airplane.svg", "airplane");
}]);