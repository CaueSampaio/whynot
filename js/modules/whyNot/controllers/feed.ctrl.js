whyNotApp.controller("feedCtrl", [ "$scope", "$rootScope", "pub", 
    function ($scope, $rootScope, pub) {

        console.log($rootScope.user)

        $scope.responsePub = ""
        $scope.responseSearch = ""

        // $scope.pubDate = function () {
        //     var date = new Date($scope.pubList.date);
        //     var currentDate = new Date (Date.now());
        //     var pubDate = currentDate - date;

        //     if(currentDate.getHours() >= 1 )
        //         var postedDate = currentDate.getYear() + 'h';
        //     else    
        //         var postedDate = 'agora';
            
        //     return postedDate;
        // }

        // pub.query().then( promisse => {
        //     for(let i = 0; i < promisse.data.length; i++)
        //         $scope.pubList.push(promisse.data[i]);

        //     for(let i = 0; i < $scope.pubList.length; i++)
        //         $scope.pubList[i].postedDate = $scope.pubDate;
        // });
<<<<<<< HEAD
=======

        // $scope.pubDate()
>>>>>>> 4aff5ec9e6dd2b1e6f80f0ab1f3dc64bc5b53472

        $scope.postPub = function (publication) {
            if($rootScope.user.logado != false)
                pub.postPub(publication, $scope.responsePub)
        }

        $scope.postSearch = function (search) {
            pub.postReaction(search, $scope.responseSearch);
        }
    }
])