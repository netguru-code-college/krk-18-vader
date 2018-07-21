class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  belongs_to :colony, optional: true
  mount_uploader :picture, PictureUploader
  has_one :mission
  has_one :role
  has_one :job

end
