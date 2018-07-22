# frozen_string_literal: true

class Colony < ApplicationRecord
  has_many :users
  has_many :items
  has_many :missions
end
