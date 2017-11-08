whyNotApp.controller("feedCtrl", [
    function ($scope, pub) {

        pub.query().then( promisse => {
            $scope.pubList = promisse.data;
        });

        console.log($scope.pubList)
    }
])