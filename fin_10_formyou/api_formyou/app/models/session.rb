class Session < ApplicationRecord
  belongs_to :course
  belongs_to :classroom
  has_many :usersessions
  has_many :students, through: :usersessions
  
  validates :begin_date, presence: true 

end
