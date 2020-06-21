class Api::V1::SessionsController < Api::ApplicationController
  before_action :set_session, only: [:show, :update, :destroy]
  before_action :is_admin?, only: [:create, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show, :all]


  # GET courses/:courses_id/sessions
  def index
    @sessions = Session.where(course_id: params[:course_id])
    render json: @sessions.to_json(include: :usersessions)
  end

  # GET course/:courses_id/sessions/1
  def show
    render json: @session
  end

  # POST course/:courses_id/sessions
  def create
    @session = Session.new(session_params)

    if @session.save
      render json: @session, status: :created, location: api_v1_sessions_url(@session)
    else
      render json: @session.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT course/:courses_id/sessions/1
  def update
    if @session.update(session_params)
      render json: @session
    else
      render json: @session.errors, status: :unprocessable_entity
    end
  end

  # DELETE course/:courses_id/sessions/1
  def destroy
    @session.destroy
  end

  # All sessions GET /sessions
  def all
    @sessions = Session.all
    
    render json: @sessions.to_json(include: [:course, :usersessions])
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_session
      @session = Session.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def session_params
      params.require(:session).permit(:begin_date, :availables_seats, :course_id, :classroom_id)
    end
end
