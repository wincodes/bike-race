Rails.application.routes.draw do
  #devise_for :contests
  #devise_for :installs
  devise_for :users, controllers: {
        sessions: 'users/sessions',
        registrations: 'users/registrations',
        confirmations: 'users/confirmations',
        unlocks: 'users/unlocks',
        passwords: 'users/passwords'
      }, path_names: {
        sign_in: 'login',
        sign_out: 'logout',
        password: 'secret',
        registrations: 'register',
        confirmations: 'verification',
        sign_up: 'signup'
      }
    
  devise_scope :user do
      get '/users/logout' => 'users/sessions#destroy', as: "user_signout" 
    end

  resources :places
  resources :riders
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/home-home' => 'home#home'
  get '/pages-about' => 'pages#about'
  get '/pages-photo' => 'pages#photo'
  get '/pages-location' => 'pages#location'
  get '/contest-contest' => 'contest#contest'
  get '/riders' => 'riders#riders'

  root to: "home#home"

end
