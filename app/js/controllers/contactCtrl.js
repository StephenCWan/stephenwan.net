angular.module('stephenwan.controllers')
.controller('contactCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.sendMessage = function() {
		$http({ url: '/api/contact', method: "POST", data: { 
			'message': $scope.message,
			'name': $scope.name,
			'email': $scope.email
		}}).success(function(data, status) {
			console.log('success email~');
		}).error(function(data, status) {
			console.error('fail');
		});
	};
}]);