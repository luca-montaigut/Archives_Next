class CreateUsersessions < ActiveRecord::Migration[6.0]
  def change
    create_table :usersessions do |t|
      t.integer :note
      t.references :student, class_name: "User"
      t.references :session
      t.timestamps
    end
  end
end
