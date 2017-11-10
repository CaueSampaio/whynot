whyNotApp.controller("registerCtrl", [ "$scope", "user",  
    function($scope, user) {
        console.log($scope.user)

        $scope.responseRegister = "";

        $scope.register = function() {
            user.post($scope.user, $scope.responseRegister);
        }
    }
])