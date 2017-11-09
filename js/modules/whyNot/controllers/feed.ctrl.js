whyNotApp.controller("feedCtrl", [ "$scope", "$rootScope", "pub", 
    function ($scope, $rootScope, pub) {

        $scope.responsePub = ""
        $scope.responseComment = ""
        $scope.responseReaction = ""
        $scope.responseSearch = ""

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
            for(let i = 0; i < promisse.data.length; i++)
                $scope.pubList.push(promisse.data[i]);

            for(let i = 0; i < $scope.pubList.length; i++)
                $scope.pubList[i].postedDate = $scope.pubDate;
        });

        $scope.pubDate()

        $scope.postPub = function (publication) {
            if($rootScope.user.logado != false)
                pub.postPub(publication, $scope.responsePub)
        }

        $scope.postComment = function (comment) {
            if($rootScope.user.logado != false)
                pub.postComment(comment, $scope.responseComment);
        }

        $scope.postReaction = function (reaction) {
            if($rootScope.user.logado != false)
                pub.postReaction(reaction, $scope.responseReaction);
        }

        $scope.postSearch = function (search) {
            pub.postReaction(search, $scope.responseSearch);
        }
    }
])