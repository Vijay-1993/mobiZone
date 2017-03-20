angular.module('app')
    .config(function($stateProvider, $urlRouterProvider, $httpProvider) {



        $urlRouterProvider.otherwise('/oauth');
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
            });


        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common = 'Content-Type: application/json';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

    });
