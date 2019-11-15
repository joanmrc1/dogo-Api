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
    email: faker.email({ domain: 'contato.org' }),
    password: 'secret'
  }
})

Factory.blueprint('App/Models/Pet', (faker) => {
  return {
    name: faker.name(),
    gender: faker.gender(),
    breed: faker.animal(),
    species: faker.animal(),
    fur: faker.animal(),
    birthday: faker.birthday(),
    veterinary: faker.name(),
    user_id: faker.integer({ min: 1, max: 10 }),
    avatar: faker.url()
  }
})

Factory.blueprint('App/Models/Vaccine', (faker) => {
  return {
    name: faker.name(),
    vaccine_in: faker.date(),
    next_vaccine: faker.date()
  }
})

Factory.blueprint('App/Models/Vermugation', (faker) => {
  return {
    name: faker.name(),
    weight: faker.floating({ min: 1, max: 100 }),
    date_of_appointment: faker.date(),
    repeat_in: faker.date()
  }
})
