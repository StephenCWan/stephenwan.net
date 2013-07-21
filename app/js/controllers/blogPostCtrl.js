define(['angular', '../controllers', '../services'], function(angular) {

	return ['$scope', '$http', 'appConfig', function($scope, $http, appConfig) {
		$scope.postId = 'bSzfAOgmOV';
		$http.get(appConfig.basePath + "/api/blogposts/" + $scope.postId).success(function(data) {
			$scope.title = data.title;
			$scope.content = data.content;
		});
		$scope.$apply();
	}];
});