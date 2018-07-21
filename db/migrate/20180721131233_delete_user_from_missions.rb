class DeleteUserFromMissions < ActiveRecord::Migration[5.2]
  def change
  	remove_column :missions, :user
  end
end
