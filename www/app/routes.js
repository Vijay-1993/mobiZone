angular.module('app')
    .config(function($stateProvider, $urlRouterProvider, $httpProvider, uiGmapGoogleMapApiProvider) {


        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyDFberVyWaVDCxFLaRxYLxUuSd4uPb_I2s',
            v: '3.17',
            libraries: 'weather,geometry,visualization',
            language: 'en',
            sensor: 'false',
        })

        $urlRouterProvider.otherwise('/home');
        $stateProvider

            .state('app', {
                abstract: true,
                templateUrl: 'app/modules/main/app.html',
                controller: 'appCtrl'
            })
            .state('app.home', {
                url: '/home',
                templateUrl: 'app/modules/home/home.html',
                controller: 'homeCtrl'
            })
            .state('app.oauth', {
                url: '/oauth',
                templateUrl: 'app/modules/auth/oAuth.html',
                controller: 'oAuthCtrl'
            })

        .state('app.map', {
            url: '/map',
            templateUrl: 'app/modules/map/map.html',
            controller: 'mapCtrl'
        });


        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common = 'Content-Type: application/json';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

    });
