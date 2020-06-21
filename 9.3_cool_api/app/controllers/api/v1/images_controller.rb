class Api::V1::ImagesController < Api::ApplicationController
  before_action :set_image, only: [:show, :update, :destroy]
  before_action :authenticate_user!, except: [:show, :index]

  # GET /images
  def index
    @images = Image.all_public.or(Image.where(user: current_user))

    render json: @images
  end

  # GET /images/1
  def show
    render json: @image
  end

  # POST /images
  def create
    @image = Image.new(image_params)

    if @image.save
      render json: @image, status: :created, location: api_v1_images_url(@image)
    else
      render json: @image.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /images/1
  def update
    if @image.update(image_params)
      render json: @image
    else
      render json: @image.errors, status: :unprocessable_entity
    end
  end

  # DELETE /images/1
  def destroy
    @image.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_image
      @image = Image.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def image_params
      params.require(:image).permit(:stream, :description, :extension, :is_private).merge(user_id: current_user.id)
    end
end
