class Api::V1::ArtcilesController < Api::ApplicationController
  before_action :set_artcile, only: [:show, :update, :destroy]
  before_action :authenticate_user!, except: [:show, :index]

  # GET /artciles
  def index
    @artciles = Artcile.all

    render json: @artciles
  end

  # GET /artciles/1
  def show
    render json: @artcile
  end

  # POST /artciles
  def create
    @artcile = Artcile.new(artcile_params)

    if @artcile.save
      render json: @artcile, status: :created, location: api_v1_artciles_url(@artcile)
    else
      render json: @artcile.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /artciles/1
  def update
    if @artcile.update(artcile_params)
      render json: @artcile
    else
      render json: @artcile.errors, status: :unprocessable_entity
    end
  end

  # DELETE /artciles/1
  def destroy
    @artcile.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_artcile
      @artcile = Artcile.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def artcile_params
      params.require(:artcile).permit(:title, :content).merge(user_id: current_user.id)
    end
end
