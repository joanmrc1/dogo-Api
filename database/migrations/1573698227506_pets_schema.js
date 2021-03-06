'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PetsSchema extends Schema {
  up () {
    this.table('pets', (table) => {
      // alter table
      table.integer('user_id').unsigned()
      table
      .foreign('user_id')
      .references('id')
      .inTable('users')
      .onDelete('cascade')
    })
  }

  down () {
    this.table('pets', (table) => {
      // reverse alternations
      table.dropForeign('user_id')
    })
  }
}

module.exports = PetsSchema
