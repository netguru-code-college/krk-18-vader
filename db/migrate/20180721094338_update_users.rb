class UpdateUsers < ActiveRecord::Migration[5.2]
  def change
    change_table :users do |t|
      t.belongs_to :colonies
      t.string :name
      t.string :homeplanet
      t.string :birthday
      t.string :picture
    end
  end
end
