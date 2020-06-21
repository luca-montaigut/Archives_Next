class AddColumnsToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :first_name, :string, default: ""
    add_column :users, :last_name, :string, default: ""
    add_column :users, :can_access, :boolean, default: false
    add_column :users, :is_admin, :boolean, default: false
    add_column :users, :is_teacher, :boolean, default: false
  end
end
