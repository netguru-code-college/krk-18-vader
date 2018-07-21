class CreateMissions < ActiveRecord::Migration[5.2]
  def change
    create_table :missions do |t|
	    t.integer :captain_id, index: true
	    t.string :name
	    t.integer :aim
		t.timestamps
    end
	
	add_foreign_key :missions, :users, column: :captain_id
  
  end
end
