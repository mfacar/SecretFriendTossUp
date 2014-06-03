'use strict';

var secretFriendApp = angular
  .module('secretFriendApp', [
    'PlayerCtrl',
    'ngRoute'
  ]);

secretFriendApp.config([
  "$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
]);
