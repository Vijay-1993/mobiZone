kpApp.service('socketService', ['CONSTANT',function(CONSTANT){
    this.socket = io('http://qct.herokuapp.com/');
}]);