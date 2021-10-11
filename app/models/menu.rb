class Menu < ApplicationRecord
  validates :title, presence: true, length: { maximum: 100 }
  validates :description, length: { maximum: 3000 }
end
