angular.module('stephenwan', ['ui.state'])
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

});