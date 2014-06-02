Rails.application.routes.draw do
  root :to => 'raffle#new' 
  get 'raffle/new'
end