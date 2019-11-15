'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker) => {
  return {
    name: faker.name(),
    birthday: faker.birthday(),
    email: faker.email({ domain: 'fsocietybrasil.org' }),
    password: 'secret'
  }
})

Factory.blueprint('App/Models/Pet', (faker) => {
  return {
    name,
    gender,
    breed,
    species,
    fur,
    birthday,
    veterinary,
    user_id,
    avatar: images.fileName
  }
})

Factory.blueprint('App/Models/Vaccine', (faker) => {
  return {
    name,
    vaccine_in,
    next_vaccine
  }
})

Factory.blueprint('App/Models/Vermugation', (faker) => {
  return {
    name,
    weight,
    date_of_appointment,
    repeat_in
  }
})
