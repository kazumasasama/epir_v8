class Api::MenusController < ApplicationController
  def index
    @menus = Menu.all
    render 'index', formats: 'json', handlers: 'jbuilder'
  end
end
