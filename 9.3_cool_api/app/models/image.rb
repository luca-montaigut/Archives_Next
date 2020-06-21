class Image < ApplicationRecord
  belongs_to :user
  has_many :comments

  scope :all_public, -> { where(is_private: false) }
end
