# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

menus = Menu.create!([
  { title: 'VIO', description: '介護脱毛でのご利用も多いですよ', price: '10800', duration: '03:00' },
  { title: '全身', description: 'ツルツル', price: '48000', duration: '03:00' },
  { title: 'Sパーツ', description: 'V O えりあし　鼻下', price: '3300', duration: '01:00' },
  { title: 'Mパーツ', description: 'ひざ下', price: '5500', duration: '01:30' },
  { title: 'Lパーツ', description: '背中　ヒップ', price: '8800', duration: '02:00' },
])

accounts = Account.create!([
  { name: 'epiR-Azumi', birthday: '2021-10-10', gender: 'Female', phone1: '090-1234-5678', email:'test@example.com', line_id:'epiR_soshigaya', zip:'123-4567', prefecture:'TOKYO', address:'Setagaya, Kinuta', event_id:'1', memo:'メモだよ', customer_note:'ノートだよ', danger:'true', password:'password'},
])