class ContestController < ApplicationController
  def index
  end

  def created
  end

  # GET /contest/new
  def new
    @contest = Contest.new
  end

  # POST /contest/create
  def create
    @contest = Contest.create(params.require(:contest).permit(:firstname, :lastname, :email, :slogan))
    redirect_to contest_created_url
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
