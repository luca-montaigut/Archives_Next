class Image < ApplicationRecord
  before_save :set_extension

  belongs_to :user
  has_one_attached :picture

  def set_extension
    self.extension = self.picture.filename.extension_with_delimiter
  end

end
