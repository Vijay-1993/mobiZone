kpApp.service('dataService', ['$http', function($http) {

    $http.defaults.headers.common = {
        "X-Requested-With": 'XMLHttpRequest',
        "Content-Type": "application/json",
        "Accept": "application/json"
    }

    this.get = function(url, params) {
        if (params == null) {
            params = {};
        }
        return $http({
            url: url,
            params: params,
            method: 'GET'
        });
    };

    this.post = function(url, data) {
        return $http({
            url: url,
            data: data,
            method: 'POST'
        });
    };

    this.put = function(url, params) {
        return $http({
            url: url,
            params: params,
            method: 'PUT'

        });
    };

    this.delete = function(url) {
        return $http({
            method: 'DELETE',
            url: url,
            data: null // specific fix for IE. without this delete throws error in IE
        });
    };

    this.jsonp = function(url, params) {
        var args = '';
        angular.forEach(params, function(value, key) {
            args += '&' + key + '=' + value;
        });
        return $http.jsonp(url + "?callback=JSON_CALLBACK" + args);
    };
}]);
