class AddNameDescriptionCaptainAndAimToMissions < ActiveRecord::Migration[5.2]
  def change
  	change_table :missions do |t| 
  		t.string :name
  		t.text :description
  		t.integer :captain_id
  		t.integer :aim
  	end
  end
end
