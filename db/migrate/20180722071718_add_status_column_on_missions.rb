class AddStatusColumnOnMissions < ActiveRecord::Migration[5.2]
   def up
  	add_column :missions, :status, :integer
  end
  def down
  	remove_column :missions, :status, :integer
  end
end
