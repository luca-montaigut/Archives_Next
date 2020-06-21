class Classroom < ApplicationRecord
    has_many :sessions
    validates :name, presence: true 
end
