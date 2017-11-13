whyNotApp.controller("postCtrl", [ "$scope",
    function ($scope, $rootScope) {

        $scope.responseComment = ""
        $scope.responseReaction = ""

        $scope.reaction = 0

        $scope.postComment = function (comment) {
            if($rootScope.user.logado != false)
                pub.postComment(comment, $scope.responseComment);
        }

        $scope.postReaction = function (icon) {
            if($rootScope.user.logado != false){
                var reaction
                if(icon == 1)
                    reaction = true
                else
                    reaction = false
                    
                pub.postReaction(reaction, $scope.responseReaction);
            }
        }

        $scope.isActive = function(icon) {
            if($scope.reaction == icon)
                return true
            else
                return false 
        }

        $scope.activeIcon = function(icon) {
            $scope.reaction = icon
            $scope.postReaction(icon)
        }
    }

])