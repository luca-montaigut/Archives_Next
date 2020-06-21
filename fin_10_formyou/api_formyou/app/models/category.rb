class Category < ApplicationRecord
    has_many :course_categories
    has_many :courses, :through => :course_categories, dependent: :destroy

    validates :name, presence: true
end
