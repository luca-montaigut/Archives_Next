class Api::V1::ProfileController < Api::ApplicationController
  before_action :authenticate_user!
  def show
    render json: current_user
  end

  def my_images
    render json: Image.where(user: current_user)
  end

  def my_comments
    render json: Comment.where(user: current_user)
  end
end