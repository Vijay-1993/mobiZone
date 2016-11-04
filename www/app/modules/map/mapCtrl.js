angular.module('kpApp.controllers')
    .controller("mapCtrl", function($scope, $state, dashService) {
        $scope.map = { center: { latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
        //map options
        $scope.options = { scrollwheel: false };
    });
