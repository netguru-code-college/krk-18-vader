# frozen_string_literal: true

class DashboardController < ApplicationController
  def index
    @missions = current_user.missions
  end
end
