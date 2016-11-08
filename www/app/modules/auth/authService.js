kpApp.service('authService', function($q, dataService) {
    this.getprofileInfo = function(data) {
        return dataService.get('https://graph.facebook.com/v2.2/me', data)
    }
    this.getprofileInfoGplus = function(data) {
        return dataService.get("https://www.googleapis.com/plus/v1/people/me", data)
    }
});
