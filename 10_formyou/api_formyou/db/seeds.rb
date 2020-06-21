# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Category.destroy_all
Session.destroy_all
Course.destroy_all
CourseCategory.destroy_all
Classroom.destroy_all
Usersession.destroy_all
User.destroy_all

#Usable users
User.create(
  first_name: "Van",
  last_name: "Wilder",
  email: "student@yopmail.com",
  password: "123456",
  can_access: true,
)
User.create(
  first_name: "Walter",
  last_name: "White",
  email: "teacher@yopmail.com",
  password: "123456",
  can_access: true,
  is_teacher: true,
)
User.create(
  first_name: "Jean-Michel",
  last_name: "Admin",
  email: "admin@yopmail.com",
  password: "123456",
  can_access: true,
  is_admin: true,
)


# Users to validate in adminboard
2.times do
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: "123456",
    password_confirmation: "123456",
    can_access: false,
    )
end

2.times do
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: "123456",
    password_confirmation: "123456",
    can_access: false,
    is_teacher: true,
    )
end

2.times do
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: "123456",
    password_confirmation: "123456",
    can_access: false,
    is_admin: true,
    )
end

#students
50.times do
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: "123456",
    password_confirmation: "123456",
    can_access: true,
    )
end

# Création des catégories
Category.create(name: "Javascript")
Category.create(name: "Ruby on Rails")
Category.create(name: "React JS")
Category.create(name: "Management")

# Création des cours
adj = ["Débutant", "Intermédiaire", "Confirmé", "Expert"]
5.times do
  Course.create(title: "#{Category.all.sample.name + " " + adj.sample}", description: Faker::Lorem.paragraph_by_chars, teacher_id: User.is_teacher.sample.id)
end

adj = ["Débutant", "Intermédiaire", "Confirmé", "Expert"]
3.times do
  Course.create(title: "#{Category.all.sample.name + " " + adj.sample}", description: Faker::Lorem.paragraph_by_chars, teacher_id: User.is_teacher.find_by(email:"teacher@yopmail.com"))
end

# Création des catégories
10.times do  
  CourseCategory.create(course_id: Course.all.sample.id, category_id: Category.all.sample.id)
end

# Création des Classroom
10.times do |i|
  Classroom.create(name: "ClassRoom #{i+1}")
end


# Creation des sessions
170.times do
  Session.create(
    begin_date: Faker::Date.between(from: 40.days.ago, to: 40.days.from_now),
    course_id: Course.all.sample.id,
    classroom_id: Classroom.all.sample.id,
    availables_seats: rand(1...20)
  )
end

# Creation des User Sessions
500.times do
  Usersession.create do |usersession|
    usersession.note = rand(1...20)
    usersession.student_id = User.is_student.sample.id
    usersession.session_id = Session.all.sample.id
  end
end