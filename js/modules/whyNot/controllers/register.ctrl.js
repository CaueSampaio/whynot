whyNotApp.controller("registerCtrl", [ "$scope", "user",  
    function($scope, user) {

        $scope.responseRegister = "";

        $scope.register = function(newUser) {
            user.post(newUser, responseRegister);
        }
    }
])