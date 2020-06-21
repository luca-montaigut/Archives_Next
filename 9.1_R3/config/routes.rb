Rails.application.routes.draw do
  root to: "images#index"
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
	
  get 'profile', to: 'static_pages#profile'
  resources :users, only: [:show]
  resources :images
end
