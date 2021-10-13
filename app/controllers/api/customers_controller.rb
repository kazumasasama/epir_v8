class Api::CustomersController < ApplicationController
  def index
    @customers = Customer.all
    render json: @customers
  end

  def show
    @customer = Customer.find(params[:id])
    render json: @customer
  end

  def new
    @customer = Customer.new
  end

  def edit
  end

  def create
    @customer = Customer.new(customer_params)
    if @customer.save
      render json: @customer
    end
  end

  private
  # Only allow a list of trusted parameters through.
  def customer_params
    params.fetch(:customer, {}).permit(
      :id, :name, :birthday, :gender, :phone, :email, :line_id, :event_id, :address, :zip, :memo, :customer_note, :danger, 
    )
  end
end
