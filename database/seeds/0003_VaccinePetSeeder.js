'use strict'

/*
|--------------------------------------------------------------------------
| VaccinePetSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class VaccinePetSeeder {
  async run () {
    const vaccine = await Factory.model('App/Models/Vaccine').createMany(10)

    await Promise.all(
      vaccine.map( async vaccine => {
        const pets = await Factory.model('App/Models/Pet')
        await Promise.all(pets.map(async pet => {
          await pet.vaccines().attach([vaccine.id])
        }))
      })
    )
  }
}

module.exports = VaccinePetSeeder
