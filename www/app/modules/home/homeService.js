kpApp.service('homeService', function(dataService, CONSTANT) {

    this.registerUsers = function(obj) {
        return dataService.post(CONSTANT.APIPATH.URL + 'users/register', obj)
    }

this.userLogin = function(obj){
	return dataService.post(CONSTANT.APIPATH.URL + 'users/login', obj)
}
   
});
