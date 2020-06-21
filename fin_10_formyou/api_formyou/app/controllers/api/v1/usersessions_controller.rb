class Api::V1::UsersessionsController < Api::ApplicationController

  before_action :set_usersession, only: [:show, :update, :destroy]
  before_action :authenticate_user!, except: [:index]

  # GET /usersessions
  def index
    @usersessions = Usersession.all

    render json: @usersessions.to_json(include: :student)
  end

  # GET /usersessions/1
  def show
    render json: @usersession
  end

  # POST /usersessions
  def create
    @usersession = Usersession.new(usersession_params)
    if @usersession.save
      render json: @usersession, status: :created, location: api_v1_usersessions_url(@usersession)
    else
      render json: @usersession.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /usersessions/1
  def update
    if @usersession.update(usersession_params)
      render json: @usersession
    else
      render json: @usersession.errors, status: :unprocessable_entity
    end
  end

  # DELETE /usersessions/1
  def destroy
    @usersession.destroy
    @usersessions = Usersession.all
    render json: @usersessions
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_usersession
      @usersession = Usersession.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def usersession_params
      params.require(:usersession).permit(:note, :student_id, :session_id).merge(student_id: current_user.id)
    end
end
