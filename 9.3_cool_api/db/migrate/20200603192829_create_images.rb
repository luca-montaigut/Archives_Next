class CreateImages < ActiveRecord::Migration[6.0]
  def change
    create_table :images do |t|
      t.binary :stream
      t.string :description
      t.string :extension
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
