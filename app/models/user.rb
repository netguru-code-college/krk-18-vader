# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  belongs_to :colony, optional: true
  mount_uploader :picture, PictureUploader
  has_many :missions, dependent: :nullify, foreign_key: :captain_id
  has_one :role

  enum job: %i(captain soldier cook pilot medic)
end
