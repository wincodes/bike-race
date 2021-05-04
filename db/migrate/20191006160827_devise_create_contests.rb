class CreateContesters < ActiveRecord::Migration[6.0]
  def change
    create_table :contesters do |t|
      t.text :slogan
      t.string :first_name
      t.string :last_name
      t.string :email

      t.timestamps
    end
  end
end
