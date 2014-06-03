Given(/^I am on (.+)$/) do |page_name|
  @session = Capybara::Session.new(:selenium)
  @session.visit '/'
end

Given(/^I enter the data for "(.*?)" with mail "(.*?)"$/) do |name, email|
  @session.fill_in("name", :with => name)
  @session.fill_in("email", :with => email)
end

When(/^I add the player$/) do
  @session.click_button("addPlayerBtn")
end

Then(/^"(.*?)" should be part of the players$/) do |name|
  firstPlayer = @session.find('#playersList>tbody>tr').text
  firstPlayer.should have_text(name)
end

Then(/^I should be able to input another player$/) do
  @session.find_field('name').should have_text('')
end