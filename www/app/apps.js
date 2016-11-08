(function() {
    'use strict';
})();

var kpApp = angular.module('app', ['ui.router',
    'kpApp.controllers',
    'kpApp.providers',
    'kpApp.services',
    'kpApp.filters',
    'kpApp.constant',
    'ionic',
    'ngStorage',
    'ngCordova',
    'ngCordovaOauth',
    'uiGmapgoogle-maps',
    'ui.rCalendar'
]);

angular.module('kpApp.providers', []);

angular.module('kpApp.controllers', ['uiGmapgoogle-maps']);

angular.module('kpApp.factories', []);

angular.module('kpApp.directives', []);

angular.module('kpApp.services', []);

angular.module('kpApp.filters', []);

angular.module('kpApp.constant', []);
