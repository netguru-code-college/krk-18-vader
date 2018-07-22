# frozen_string_literal: true

class DashboardController < ApplicationController
  def index
    @missions = current_user.missions
  end

  def new
    @mission = current_user.missions.build.decorate
  end

end
