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
	$http({ method: "GET", url: "img/cloud.svg" }).success(function(data) {
		$scope.cloud = data;
	});
	$http({ method: "GET", url: "img/ironman.svg" }).success(function(data) {
		$scope.ironman = data;
	});
	$http({ method: "GET", url: "img/camera.svg" }).success(function(data) {
		$scope.camera = data;
	});
	$http({ method: "GET", url: "img/airplane.svg" }).success(function(data) {
		$scope.airplane = data;
	});
}]);