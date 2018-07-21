class CreateColonies < ActiveRecord::Migration[5.2]
  def change
    create_table :colonies do |t|

      t.timestamps
    end
  end
end
