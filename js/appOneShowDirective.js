app.directive('appOneShow', [function(){
    return {
        restrict: 'E',
        templateUrl: 'template/app-one-show-directive.html',
        scope: {
            data: '=',
            cols: '=',
            showtable: '='
        },
        controller: ['$scope', '$log', function($scope, $log) {
            $log.log('app-one-show', $scope.data, $scope.cols);
            $scope.currentData = [];

            $scope.$watch('data', function(newData, oldData) {
                $scope.currentData = newData;
            });
        }]
    };
}]);