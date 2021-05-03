class CreateRiders < ActiveRecord::Migration[5.2]
  def change
    create_table :riders do |t|

      t.timestamps
    end
  end
end
