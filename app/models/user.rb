class User < ActiveRecord::Base
	attr_accessible :firstname, :lastname, :email, :membership_id, :major, :year

	def self.to_csv
		CSV.generate do |csv|
			csv << column_names
			all.each do |user|
				csv << user.attributes.values_at(*column_names)
			end
		end
	end

end
