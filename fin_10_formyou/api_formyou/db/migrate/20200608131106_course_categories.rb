class CourseCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :course_categories do |t|
      t.belongs_to :course, index:true
      t.belongs_to :category, index:true
      t.timestamps

    end
  end
end
