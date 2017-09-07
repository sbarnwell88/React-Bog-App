Rails.application.routes.draw do
  namespace :api do
    resources :creatures do
      resources :pets
      end
    end
end
