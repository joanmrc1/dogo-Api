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
    const vermugation = await Factory.model('App/Models/Vermugation').createMany(10)
    const pets = await Factory.model('App/Models/Pet').createMany(10)

    await Promise.all(
      vaccine.map( async vaccine => {
        await Promise.all(pets.map(async pet => {
          await pet.vaccines().attach([vaccine.id])
        }))
      })
    )

    await Promise.all(
      vermugation.map( async vermugation => {
        await Promise.all(pets.map(async pet => {
          await pet.vermugations().attach([vermugation.id])
        }))
      })
    )
  }
}

module.exports = VaccinePetSeeder
