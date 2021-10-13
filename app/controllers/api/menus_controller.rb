class Api::MenusController < ApplicationController
  def index
    @menus = Menu.all
    render json: @menus
  end

  def show
    @menu = Menu.find(params[:id])
    render json: @menu
  end

  def new
    @menu = Menu.new
  end
  
  def create
    @menu = Menu.new(menu_params)
    if @menu.save
      render json: @customer
    end
  end

  def update
    @menu = Menu.find(params[:id])
    if @menu.update(menu_params)
      render json: @menu
    end
  end

  private
  # Only allow a list of trusted parameters through.
  def menu_params
    params.fetch(:menu, {}).permit(
      :id, :title, :description, :price, :duration,
    )
  end
end
