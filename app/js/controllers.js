define(['angular'], function(angular) {
	return angular.module('stephenwan.controllers', [])
	.controller('ContactCtrl', ['$scope', '$injector', function($scope, $injector) {
		require(['controllers/contactCtrl'], function(ctrl) {
			$injector.invoke(ctrl, this, { '$scope' : $scope });
		});
	}]);
});