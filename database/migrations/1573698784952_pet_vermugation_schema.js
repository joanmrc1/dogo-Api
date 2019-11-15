'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PetVermugationSchema extends Schema {
  up () {
    this.create('pet_vermugation', (table) => {
      table.increments()
      table.integer('vermugation_id').unsigned()
      table
      .foreign('vermugation_id')
      .references('id')
      .inTable('vermugations')
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
    this.drop('pet_vermugation')
  }
}

module.exports = PetVermugationSchema
