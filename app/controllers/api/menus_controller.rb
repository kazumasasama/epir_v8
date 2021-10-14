class Api::MenusController < ApplicationController
  protect_from_forgery except: [:create, :update]
  before_action :set_menu, only: %i[ show edit update destroy ]

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
      render json: @menu
    end
  end

  def edit
  end

  def update
    @menu = Menu.find(params[:id])
    if @menu.update(menu_params)
      render json: @menu
    end
  end

  def destroy
    Menu.find(params[:id]).destroy
    render json: { status: "SUCCESS", message: "Menu removed"}
  end

  private
    def set_menu
      @menu = Menu.find(params[:id])
    end
    # Only allow a list of trusted parameters through.
    def menu_params
      params.fetch(:menu, {}).permit(
        :id, :title, :description, :price, :duration,
      )
    end
end
