class MissionDecorator < Draper::Decorator
  delegate_all

  def pretty_statuses 
    object.class.send(:statuses).keys.collect { |item| [item.humanize, item] }
  end
end