var secretFriendApp = angular.module('secretFriendApp', []);

secretFriendApp.controller('PlayerCtrl',  ['$scope', function($scope){
  $scope.players = [];
  $scope.currentPlayer = {name: '', email: ''};

  $scope.AddPlayer = function(){
  	if ( $scope.currentPlayer != undefined )
  	{
    	$scope.players.push({name:$scope.currentPlayer.name, email:$scope.currentPlayer.email});
    	$scope.currentPlayer.name = '';
    	$scope.currentPlayer.email = '';
    };
  };
}]);