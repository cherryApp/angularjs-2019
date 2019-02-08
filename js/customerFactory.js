app.factory('customerFactory', ['$http', function($http) {
    var endPoint = 'http://139.59.154.132:3000/customers';
    return {
        getAll: function() {
            return $http.get(endPoint);
        },
        getOne: function(id) {
            return $http.get(endPoint+'/'+id);
        },
        create: function(customer) {
            return $http.post(endPoint, customer);
        },
        delete: function(id) {
            return $http.delete(endPoint+'/'+id);
        }
    };
}]);