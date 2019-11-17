'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddComlumnVaccineSchema extends Schema {
  up () {
    this.table('vaccines', (table) => {
      table.integer('pet_id').unsigned()

      table
      .foreign('pet_id')
      .references('id')
      .inTable('pets')
      .onDelete('cascade')

    })
  }

  down () {
    this.table('vaccines', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddComlumnVaccineSchema
