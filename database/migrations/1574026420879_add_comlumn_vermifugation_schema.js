'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddComlumnVermifugationSchema extends Schema {
  up () {
    this.table('vermugations', (table) => {
      table.integer('pet_id').unsigned()

      table
      .foreign('pet_id')
      .references('id')
      .inTable('pets')
      .onDelete('cascade')
    })
  }

  down () {
    this.table('vermugations', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddComlumnVermifugationSchema
