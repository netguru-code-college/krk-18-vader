class ChangeCaptainIdToUser < ActiveRecord::Migration[5.2]
  def change
  	rename_column :missions, :user_id, :user
  end
end
