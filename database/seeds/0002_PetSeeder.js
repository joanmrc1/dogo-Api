'use strict'

/*
|--------------------------------------------------------------------------
| PetSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class PetSeeder {
  async run () {
    const pets = await Factory.model('App/Models/Pet').createMany(10)
  }
}

module.exports = PetSeeder
