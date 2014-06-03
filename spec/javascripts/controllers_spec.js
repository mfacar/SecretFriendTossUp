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

  	describe('AddPlayer', function(){
  		it('should add a new player to the list', function() {
          scope.currentPlayer = {name: 'Maria', email: 'Maria@mail.com'};
          scope.AddPlayer();
          expect(scope.players).toContain({name: 'Maria', email: 'Maria@mail.com'});
          expect(scope.currentPlayer).toEqual({name:'', email:''});
      });
  	});  	
 });
});