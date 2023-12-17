Rails.application.routes.draw do
  get 'youtube/youtube'
  root "index#index"

  # All TikTok Routes
  get 'tiktok', to: 'index#tiktok'
  get 'tiktok/followers'
  get 'tiktok/views'
  get 'tiktok/likes'
  get 'tiktok/comments'

  post 'tiktok/viewsapi', to:  'tiktok#viewsapi'
  post 'tiktok/likesapi', to: 'tiktok#likesapi'
  post 'tiktok/followersapi', to: 'tiktok#followersapi'




  # ALl Instagram Routes
  get 'instagram', to: 'index#instagram'
  get 'instagram/followers'
  get 'instagram/views'
  get 'instagram/likes'
  get 'instagram/comments'

  post 'instagram/viewsapi', to:  'instagram#viewsapi'
  post 'instagram/likesapi', to: 'instagram#likesapi'
  post 'instagram/followersapi', to: 'instagram#followersapi'



  # All Youtube Routes
  get 'youtube', to: 'index#youtube'
  get 'youtube/subscribers'
  get 'youtube/views'
  get 'youtube/likes'
  get 'youtube/comments'

  post 'youtube/viewsapi', to:  'youtube#viewsapi'
  post 'youtube/likesapi', to: 'youtube#likesapi'
  post 'youtube/subscribersapi', to: 'youtube#subscribersapi'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end
