Rails.application.routes.draw do
  root 'home#index'
  resource :users, only: [:create]
  post "/login", to: "auth#login"
  delete "/logout", to: "auth#destroy"

  get "/auto_login", to: "auth#auto_login"
  get "/user_is_authed", to: "auth#user_is_authed"


  namespace :api do 
    namespace :v1 do 
      # get 'user' => 'users#index'
      resources :users, only: [:index]
      resources :fruits, only: [:index, :create, :destroy, :update]
    end 
  end 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
