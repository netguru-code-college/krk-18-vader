class Mission < ApplicationRecord
	has_one :captain, foreign_key: "user_id", class_name: "User"
	has_many :users
	has_many :items

	enum aim: %i(colonize maintain utilize other)
end
