angular.module('kpApp.controllers')
    .controller("homeCtrl", function($scope, $state, homeService, $localStorage, $cordovaOauth, $cordovaCamera) {


        $scope.callCam = function() {
            var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 100,
                targetHeight: 100,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };

            $cordovaCamera.getPicture(options).then(function(imageData) {

                $scope.image = "data:image/jpeg;base64," + imageData;


            }, function(err) {
                // error
            });

        }




    });
