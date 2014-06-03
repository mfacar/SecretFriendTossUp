var secretFriendApp = angular.module('secretFriendApp', []);

secretFriendApp.controller('PlayerCtrl',  ['$scope', function($scope){
  $scope.players = [];
}]);