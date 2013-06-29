angular.module('stephenwan', ['ui.state', 'ng'])
.config(function($stateProvider, $routeProvider, $locationProvider) {
	$stateProvider.state('index', {
		url: "",
		templateUrl: "partials/home.html"
	}).state('blog', {
		abstract: true,
		url: "/blog",
		template: "<div data-ui-view></div>"
	}).state('blog.main', {
		url: "",
		templateUrl: "partials/blog/main.html"
	}).state('blog.post', {
		url: "/:id",
		templateUrl: "partials/blog/post.html"
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
