Rails.application.routes.draw do
  namespace :api do
    resources :creatures do
      resources :pets, only: [:index, :show]
      end
    end
end
