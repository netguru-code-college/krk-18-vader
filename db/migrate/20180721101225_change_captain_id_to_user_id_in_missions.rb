class ChangeCaptainIdToUserIdInMissions < ActiveRecord::Migration[5.2]
  def change
  	rename_column :missions, :captain_id, :user_id 
  end
end
