Given(/^I am on (.+)$/) do |page_name|
  @session = Capybara::Session.new(:selenium)
  @session.visit '/'
end

Given(/^I fill in "(.*?)" for "(.*?)"$/) do |arg1, arg2|
  pending # express the regexp above with the code you wish you had
end

When(/^I add the player$/) do
  pending # express the regexp above with the code you wish you had
end

Then(/^"(.*?)" should be part of the players$/) do |arg1|
  pending # express the regexp above with the code you wish you had
end

Then(/^I should be able to input another player$/) do
  pending # express the regexp above with the code you wish you had
end