# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
fruits = ['Mango', 'Pineapple', 'Passion fruit', 'Dragonfruit']
fruits.each{|fruit| Fruit.create(name: fruit, description: "I am a delicious #{fruit}.")}

# vendors = ['Jon', 'Josh', 'Jack ']
# vendors.each{|vendor| Vendor.create(firstname: vendor,  lastname: "second name of  #{vendor}.")}
User.destroy_all

user1 = User.create(username: "sample", password: "sample")

puts 'seeded'