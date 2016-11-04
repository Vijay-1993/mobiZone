kpApp.service('dashService', function(dataService, CONSTANT) {
	this.getUsersList = function(){
		return dataService.get(CONSTANT.APIPATH.URL + '/users/allusers');
	}
});
