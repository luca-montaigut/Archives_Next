class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtBlacklist

  has_many :usersessions
  has_many :sessions, through: :usersessions
  validates :first_name, presence: true
  validates :last_name, presence: true 

  scope :is_teacher, -> { where(is_teacher: 1) } # User.is_teacher -> Renvoit la liste des profs
  scope :is_admin, -> { where(is_admin: 1) } # User.is_admin -> Renvoit la liste des profs
  scope :is_student, -> { where(can_access: 1) } # User.can_access -> Renvoit la liste des students

  #TODO Activer quand on poussera en prod pour recevoir un email quand on créé un User
  # after_create :welcome_send

  def welcome_send
    UserMailer.welcome_email(self).deliver_now
  end


end
