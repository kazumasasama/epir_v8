json.set! :menus do
  json.array! @menus do |menu|
    json.extract! menu, :id, :title, :description, :price, :duration
  end
end