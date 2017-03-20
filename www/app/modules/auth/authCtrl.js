angular.module('kpApp.controllers')
    .controller("oAuthCtrl", function($scope, $state, $localStorage, authService, socketService) {
        var socket = socketService.socket;

        $scope.videoState = false;

        $scope.TabOpen = function(Action, type) {

                var data = {
                    'type': type,
                    'action': Action
                }
   


            socket.emit('action', data);



        }

        //socket message handler
        socket.on('connect', function() {
            console.log('socket connected');
        });

        socket.on('action', function(data) {

        });

        socket.on('disconnect', function() {
            console.log('socket disconnected');
        });

    });
