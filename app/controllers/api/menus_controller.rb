class Api::MenusController < ApplicationController
  def index
    @menus = Menu.all
    render 'index-menus', formats: 'json', handlers: 'jbuilder'
  end

  def show
    @menu = Menu.find(params[:id])
    render 'show-menu', formats: 'json', handlers: 'jbuilder'
  end
end
