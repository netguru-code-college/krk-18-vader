class AddForeignKeyOnMigrations < ActiveRecord::Migration[5.2]
  def change
  	change_table :missions do |t| 
  		t.rename :user, :captain_id
  	end

  	add_foreign_key :missions, :users, column: :captain_id
  end
end
