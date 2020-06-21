Rails.application.routes.draw do

  devise_for :users,
  path: '',
  path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'sessions',
    registrations: 'registrations'
  }

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get '/profile', to: "profile#show"
      get '/profile/my_images', to: "profile#my_images"
      get '/profile/my_comments', to: "profile#my_comments"
      resources :images do
        resources :comments
      end
      resources :artciles
    end
  end
end
