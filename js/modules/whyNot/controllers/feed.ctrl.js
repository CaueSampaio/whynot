whyNotApp.controller("feedCtrl", [ "$scope", "$rootScope", "pub", 
    function ($scope, $rootScope, pub) {

        pub.query().then( promisse => {
            $scope.pubList = promisse.data;
        });

        $scope.pubDate = function () {
            var date = $scope.pubList.date;
        }

        $scope.postPub = function (publication) {
            $scope.responsePub = pub.postPub(publication)
        }

        $scope.postComment = function (comment) {
            // var response = pub.postComment(comment);
            // if(response != "")
            //     $scope.responseComment = response;

            $scope.responseComment = pub.postComment(comment);
        }

        $scope.postReaction = function (reaction) {
            // var response = pub.postReaction(reaction);
            // if(response != "")
            //     $scope.responseReaction = response;

            $scope.responseReaction = pub.postReaction(reaction);
        }

    }
])