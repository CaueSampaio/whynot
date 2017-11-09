whyNotApp.controller("registerCtrl", [ "$scope", "user",  
    function($scope, user) {
        console.log("ola")

        $scope.responseRegister = "";

        $scope.register = function(newUser) {
            user.post(newUser, responseRegister);
        }
    }
])