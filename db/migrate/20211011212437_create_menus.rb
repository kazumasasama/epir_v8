class CreateMenus < ActiveRecord::Migration[5.2]
  def change
    create_table :menus do |t|
      t.string :title, null: false
      t.text :description
      t.integer :price
      t.time :duration

      t.timestamps
    end
  end
end
