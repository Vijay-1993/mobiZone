angular.module('kpApp.controllers')
    .controller("oAuthCtrl", function($scope, $state, $localStorage, $cordovaOauth) {


        $scope.faceBooklogIn = function() {
            alert('result');
            $cordovaOauth.facebook("176628139460888", ["public_profile", "email", "user_friends"]).then(function(result) {
                $localStorage.accessToken = result;
                alert("result.access_token " + result.access_token);
            }, function(error) {
                alert("There was a problem signing in!  See the console for logs");
                console.log(error);
            });


        }


    });
