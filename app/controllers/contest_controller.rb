class ContestController < ApplicationController
  def index
  end

  # GET /contest/new
  def new
    @contest = Contest.new
  end

  # POST /contest/create
  def create
    @contest = Contest.create(params.require(:contest).permit(:firstname, :lastname, :email, :slogan))
    if @contest.valid?
      flash[:success] = "Your Slogan Has been Saved"
      redirect_to contest_new_path
    else
      flash[:errors] = @contest.errors.full_messages
      redirect_to contest_new_path     
    end
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
