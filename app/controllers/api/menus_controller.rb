class Api::MenusController < ApplicationController
  def index
    @menus = Menu.all
    render 'index', formats: 'json', handlers: 'jbuilder'
  end

  def show
    @menu = Menu.find(params[:id])
    render 'show', formats: 'json', handlers: 'jbuilder'
  end
end
