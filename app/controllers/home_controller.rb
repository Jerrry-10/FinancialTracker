# app/controllers/home_controller.rb
class HomeController < ActionController::Base
  def index
    # Note: The layout might be false if you don't have an application.html.erb
    render layout: 'application'
  end
end
