class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [:show]

  def show
    if @user == current_user
      redirect_to profile_path
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

end
