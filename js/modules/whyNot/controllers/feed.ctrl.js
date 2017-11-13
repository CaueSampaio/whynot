whyNotApp.controller("feedCtrl", [ "$scope", "$rootScope", "pub", 
    function ($scope, $rootScope, pub) {
        $scope.pubDate = function () {
            var date = new Date($scope.pubList.date);
            var currentDate = new Date (Date.now());
            var pubDate = currentDate - date;

            if(currentDate.getHours() >= 1 )
                var postedDate = currentDate.getYear() + 'h';
            else    
                var postedDate = 'agora';
            
            return postedDate;
        }

        pub.query().then( promisse => {
            console.log(promisse.data[0])
            $scope.pubList = promisse.data;
            console.log($scope.pubList);
            // for(let i = 0; i < promisse.data.length; i++)
            //     $scope.pubList.push(promisse.data[i]);

            //     console.log($scope.pubList)

            for(let i = 0; i < $scope.pubList.length; i++)
                $scope.pubList[i].postedDate = $scope.pubDate;
            console.log($scope.pubList)
        });

        $scope.postPub = function () {
            if($rootScope.user.logado != false)
                pub.postPub($scope.pub, $scope.responsePub)
        }

        $scope.postSearch = function (search) {
            pub.postReaction(search, $scope.responseSearch);
        }
    }
])