class AddAttributesToColony < ActiveRecord::Migration[5.2]
  def change
    change_table :colonies do |t|
      t.string :name
      t.float :lat
      t.float :lng
      t.text :description
    end
  end
end
