app.directive('appTable', [function(){
    return {
        restrict: 'E',
        templateUrl: 'template/table-directive.html',
        scope: {
            delete: '=',
            show: '=',
            data: '=',
            cols: '='
        },
        controller: ['$scope', '$log', function($scope, $log) {
            $log.log($scope.data, $scope.cols);
            $scope.currentData = [];

            $scope.$watch('data', function(newData, oldData) {
                $scope.currentData = newData;
            });
        }]
    };
}]);