# frozen_string_literal: true

class MissionDecorator < Draper::Decorator
  delegate_all

  def pretty_statuses
    object.class.send(:statuses).keys.map { |item| [item.humanize, item] }
  end
end
