Rails.application.routes.draw do
  namespace :api, format: "json" do
    namespace :v1 do
      mount_devise_token_auth_for "User", at: "auth", controllers: {
        registrations: "api/v1/auth/registrations"
      }
    end
  end

  namespace :api do
    resources :menus, only: [:index, :show, :new, :edit, :create]
    resources :customers, only: [:index, :show, :new, :edit]
    post '/login', to: 'session#log_in'
    post '/logout', to: 'session#log_out'
    get  '/account', to: 'accounts#show'
  end

  # 標準のdeviseが用意するルーティングは一切使わない
  # しかしdevise_for 書かないとcurrent_hogehogeなどのメソッドが使用できなくなるので注意する
  devise_for :accounts, skip: [:sessions, :passwords, :registrations]
end