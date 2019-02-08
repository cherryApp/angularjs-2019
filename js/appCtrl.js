app.controller(
    'appCtrl', 
    [
        '$scope', 
        '$log',
        'customerFactory', 
        function(
            $scope, 
            $log,
            customerFactory
        ) {
            // Init customers array.
            $scope.customers = [];

            // Cols will show.
            /*
            "id": "5c5c2d697029edd8ac089e13",
    "firstName": "Sanchez",
    "lastName": "Hopkins",
    "email": "sanchezhopkins@opticon.com",
    "address": "826, Louisiana Avenue",
    "city": "Lawrence",
    "state": "District Of Columbia",
    "orderTotal": 11606*/
            $scope.cols = [
                {key: 'id', text: '#'},
                {key: 'firstName', text: 'First Name'},
                {key: 'lastName', text: 'Surname'},
                {key: 'email', text: 'Email'},
                {key: 'address', text: 'Address'},
                {key: 'city', text: 'City'},
                {key: 'state', text: 'State'},
                {key: 'orderTotal', text: 'Total Order'},

            ];

            // Get customers from the server and save to the customers array.
            $scope.refresh = function() {
                customerFactory.getAll()
                    .then( function(resp) {
                        $log.log(resp);
                        $scope.customers = resp.data;
                    }, function(err) {
                        $log.error(err);
                    });
            }

            // Delete selected row.
            $scope.deleteRow = function(id) {
                customerFactory.delete(id)
                    .then(function(resp) {
                        $log.log('deleted: ' + id);
                        $scope.refresh();
                    }, function(err) {
                        $log.error(err);
                    });
            }
            
            // Show selected row.
            $scope.showRow = function(row) {
                customerFactory.getOne(row.id)
                    .then(function(resp) {
                        $log.log(resp.data);
                    }, function(err) {
                        $log.error(err);
                    });
            }


            $scope.refresh();

            
        }
]);