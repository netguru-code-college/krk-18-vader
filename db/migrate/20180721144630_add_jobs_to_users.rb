class AddJobsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :job, :integer
  end
end
