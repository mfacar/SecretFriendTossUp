'use strict';

describe('secretFriendApp controllers', function() {

  beforeEach(module('secretFriendApp'));

  describe('PlayerCtrl', function(){

  	var scope, controller;

  	beforeEach(inject(function($rootScope, $controller){
      scope = $rootScope.$new();
  	  controller = $controller('PlayerCtrl', { '$scope': scope});
  	}));

  	it('players should be empty', function() {  		
    	expect(scope.players).toEqual([]);
  	});
 });
});