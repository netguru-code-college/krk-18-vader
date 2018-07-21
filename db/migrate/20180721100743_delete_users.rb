class DeleteUsers < ActiveRecord::Migration[5.2]
  def down
    drop_table :users
  end
end
