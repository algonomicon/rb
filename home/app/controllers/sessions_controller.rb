class SessionsController < ApplicationController
  # GET /login
  def new
    @user = User.new
  end

  # POST /login
  def create
    if @user = login(params[:email], params[:password])
      redirect_back_or_to :root, notice: 'Login successful.'
    else
      render :new, notice: 'Login failed.'
    end
  end

  # DELETE /logout
  def destroy
    logout
    redirect_to :root, notice: 'Logged out.'
  end
end