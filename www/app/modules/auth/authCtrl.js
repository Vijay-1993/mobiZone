angular.module('kpApp.controllers')
    .controller("oAuthCtrl", function($scope, $state, $localStorage, $cordovaOauth, authService, $cordovaSms) {


        $scope.faceBooklogIn = function() {
            $cordovaOauth.facebook("605754812961802", ["email"])
                .then(function(result) {
                    $localStorage.accessToken = result;
                    console.log(result)
                    $scope.getProfileInfo(result);
                }, function(error) {
                    alert("There was a problem signing in!  See the console for logs");
                    console.log(error);
                });


        }

        $scope.getProfileInfo = function(result) {
            access_token = { 'access_token': result.access_token, 'expires': result.expires_in }
            var data = {
                params: { access_token: access_token, fields: "id,name,gender,location,website,picture,relationship_status", format: "json" }
            }
            authService.getprofileInfo(data)
                .then(function(result) {
                    $scope.profileData = result.data;
                    console.log($scope.profileData);
                }, function(error) {
                    alert("There was a problem getting your profile.  Check the logs for details.");
                    console.log(error);
                });
        };



        $scope.googleLogin = function() {

            $cordovaOauth.google("810927839244-l1i57oggc8nu6htutp7529n1cd2664hm.apps.googleusercontent.com" + "&include_profile=true", ["email", "profile"]).then(function(result) {

                authService.getprofileInfoGplus({ params: { access_token: result.access_token } })
                    .then(function(res) {
                        $scope.details = res.data;

                    }, function(error) {
                        alert("Error: " + error);
                    });

            }, function(error) {
                // error
                $scope.details = 'got error';
            });
        }

        $scope.sms = function() {

            var options = {
                replaceLineBreaks: false, // true to replace \n by a new line, false by default
                android: {
                    intent: '' // send SMS with the native android SMS messaging
                        //intent: '' // send SMS without open any other app
                        //intent: 'INTENT' // send SMS inside a default SMS app
                }
            };

            $cordovaSms.send('****', 'Hi Kamal', options)
                .then(function() {
                    // Success! SMS was sent
                }, function(error) {
                    // An error occurred
                });


        }



    });
