define(['angular', '../controllers'], function(angular, controllers) {

	return ['$scope', '$http', '$location', function($scope, $http, $location) {
		$scope.postId = 'bSzfAOgmOV';
		$http.get('http://' + $location.$$host + ':' + $location.$$port + "/api/blogposts/" + $scope.postId).success(function(data) {
			$scope.title = data.title;
			$scope.content = data.content;
		});
		$scope.$apply();
	}];
});