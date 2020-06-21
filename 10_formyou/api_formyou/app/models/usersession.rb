class Usersession < ApplicationRecord
  belongs_to :student, class_name: "User", foreign_key: "student_id"
  belongs_to :session
  before_create :one_at_once
  before_validation :check_if_seats_availables
  before_save :reserve_a_seat

  def one_at_once
    Usersession.where(student_id: (User.find(self.student_id))).each do |userSession| 
      if (userSession.session.begin_date == self.session.begin_date)
        throw :abort
      end
    end
  end

  def reserve_a_seat  
    @session = Session.find(self.session_id)
    @session.update(availables_seats: @session.availables_seats-1)
  end

  def check_if_seats_availables
    @session = Session.find(self.session_id)
    if(@session.availables_seats < 1)
      throw :abort
    end
  end

end
