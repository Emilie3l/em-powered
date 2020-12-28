Rails.application.routes.draw do
  # devise_for :users
  root to: 'pages#home'
  get  '/refresh',    to: 'pages#refresh'
  get  '/stupidbug',    to: 'pages#stupidbug'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
