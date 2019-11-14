'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PetVaccineSchema extends Schema {
  up () {
    this.create('pet_vaccine', (table) => {
      table.increments()
      table.integer('vaccine_id').unsigned()
      table
      .foreign('vaccine_id')
      .references('id')
      .inTable('vaccines')
      .onDelete('cascade')
      table.integer('pet_id').unsigned()
      table
      .foreign('pet_id')
      .references('id')
      .inTable('pets')
      .onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('pet_vaccines')
  }
}

module.exports = PetVaccineSchema
