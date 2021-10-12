# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

# Rails.application.config.middleware.insert_before 0, Rack::Cors do
#   allow do
#     origins 'example.com'
#
#     resource '*',
#       headers: :any,
#       methods: [:get, :post, :put, :patch, :delete, :options, :head]
#   end
# end
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # APIを実行するドメイン 今回は、フロントはlocalhost:3001で立ち上げるので、以下の通り
    origins "http://localhost:3001"
    # アクセスしていいリクエストを定義。表現が使えたので、/api以下に制限した。
    # credentials: true を付与することでsession・cookieのやり取りができる
    resource "^/api",
             headers: :any,
             methods: [:get, :post, :patch, :delete, :head, :options],
             credentials: true
  end
end