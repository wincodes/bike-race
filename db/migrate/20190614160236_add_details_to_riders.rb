class AddDetailsToRiders < ActiveRecord::Migration[5.2]
  def change
    add_column :riders, :first_name, :string
    add_column :riders, :last_name, :string
    add_column :riders, :city_of_origin, :string
    add_column :riders, :state_of_origin, :string
  end
end
