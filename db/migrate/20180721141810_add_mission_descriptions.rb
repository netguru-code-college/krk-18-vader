class AddMissionDescriptions < ActiveRecord::Migration[5.2]
  def up
  	add_column :missions, :description, :text
  end
  def down
  	remove_column :missions, :description, :text
  end
end
