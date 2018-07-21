class AddForeignKeyOnMigrations < ActiveRecord::Migration[5.2]
  def change
  	add_column :missions, :captain_id, :integer, index: true
  	add_foreign_key :missions, :users, column: :captain_id
  end
end
