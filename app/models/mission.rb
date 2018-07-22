# frozen_string_literal: true

class Mission < ApplicationRecord
  belongs_to :captain, class_name: 'User'
  has_many :items

  enum aim: %i(colonize maintain utilize other)
  enum status: %i(assigned in_progress completed)
end
