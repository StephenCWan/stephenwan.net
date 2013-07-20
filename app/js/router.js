define(['angular', 'app'], function(angular) {

	angular.module('stephenwan').
	config(function($stateProvider, $routeProvider, $locationProvider, AnalyticsProvider) {

		$locationProvider.html5Mode(true);

		$stateProvider.state('index', {
			url: "/",
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
			templateUrl: "partials/blog/post.html",
			controller: "blogPostCtrl"
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

	// google analytics tracking
	AnalyticsProvider.setAccount("UA-25136677-2");
	AnalyticsProvider.trackPages(true);

});
});