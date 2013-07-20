require.config({
	paths: {
		'angular': 'vendor/angular.min',
		'text': 'vendor/text',
		'angularRouter' : 'vendor/angular-ui-router.min',
		'angularAnalytics' : 'vendor/angular-google-analytics'
	},
	baseUrl: 'js',
	shim: {
		'angular' : { 'exports' : 'angular' },
		'angularMocks' : { deps : ['angular'], 'exports' : 'angular.mock' },
		'angularRouter': { deps : ['angular'], 'exports' : 'angular.router' },
		'angularAnalytics' : { deps : ['angular'], 'exports' : 'angular.analytics' }
	},
	priority: [
		"angular"
	]
});

require([
	'angular',
	'app',
	'router'
], function(angular, app, routing) {

	angular.bootstrap(document, [app['name']]);
});
