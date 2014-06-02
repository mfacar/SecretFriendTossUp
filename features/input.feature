Feature: Input of Players
  #As an organizer
  #I want to input the data of players
  #In order to make the raffle

  Scenario: Input of players
    Given I am on the "home_page"
    And I fill in "Juan" for "Player Name" 
    And I fill in "juan@mail.com" for "Player Email" 
    When I add the player
    Then "Juan" should be part of the players
	And I should be able to input another player
