class AddPrivateToImages < ActiveRecord::Migration[6.0]
  def change
    add_column :images, :private_img, :boolean, default: false
  end
end
