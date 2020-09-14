# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

Booking.destroy_all
Product.destroy_all


puts "creating products"
file = URI.open('https://res.cloudinary.com/dmwa29qvx/image/upload/v1581174946/fake_bouquet_q4rugt.jpg')
product = Product.new(name: 'Wedding Bouquet', description: "Beautiful wedding bouquet(fake) for hire", price: 15, user: User.first)
product.photos.attach(io: file, filename: 'fake_bouquet.jpg', content_type: 'image/jpg')
product.save!
