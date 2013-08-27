class CreateUser < ActiveRecord::Migration
  def change
    create_table :users do |t|
    	t.string :firstname
    	t.string :lastname
    	t.string :email
    	t.integer :membership_id
    	t.string :major
    	t.integer :year

    	t.timestamps
    end
  end
end
