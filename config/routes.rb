Rails.application.routes.draw do
  resources :missions
  resources :items
  resources :roles
  resources :jobs
  resources :colonies
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
