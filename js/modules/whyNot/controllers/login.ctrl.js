whyNotApp.controller("loginCtrl", [ '$scope', '$rootScope', '$location', 
    function ($scope, $rootScope, $location) {
        console.log(!$rootScope.user);
        $scope.logIn = function() {
            if($scope.user.name == "admin" && $scope.user.pass == "admin") {
                $rootScope.user.name = $scope.user.name;
                $rootScope.user.logged = !$rootScope.logged;
                $location.path('/home/feed');
            }
                else 
                    console.log("Nao logou")
        }
    }
]);