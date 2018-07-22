class ColoniesController < ApplicationController
  before_action :set_colony, only: %i[show edit update destroy]

  def index
    @colonies = Colony.all
  end

  def show; end

  def new
    @colony = Colony.new
  end

  def edit; end

  def create
    @colony = Colony.new(colony_params)

    respond_to do |format|
      if @colony.save
        format.html { redirect_to @colony, notice: 'Colony was successfully created.' }
        format.json { render :show, status: :created, location: @colony }
      else
        format.html { render :new }
        format.json { render json: @colony.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @colony.update(colony_params)
        format.html { redirect_to @colony, notice: 'Colony was successfully updated.' }
        format.json { render :show, status: :ok, location: @colony }
      else
        format.html { render :edit }
        format.json { render json: @colony.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @colony.destroy
    respond_to do |format|
      format.html { redirect_to colonies_url, notice: 'Colony was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def colony_params
      params.require(:colony).permit(:name, :lat, :lng)
    end

  def set_colony
    @colony = Colony.find(params[:id])
  end

end
