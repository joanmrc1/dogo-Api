'use strict'

/*
|--------------------------------------------------------------------------
| VermugationPetSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class VermugationPetSeeder {
  async run () {
    const vermugation = await Factory.model('App/Models/Vermugation').createMany(10)

    await Promise.all(
      vermugation.map( async vermugation => {
        const pets = await Factory.model('App/Models/Pet')
        await Promise.all(pets.map(async pet => {
          await pet.vaccines().attach([vermugation.id])
        }))
      })
    )
  }
}

module.exports = VermugationPetSeeder
