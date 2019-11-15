'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterPetsSchema extends Schema {
  up () {
    this.table('pets', (table) => {
      // alter table
      table.dropColumn('doctor')
    })
  }

  down () {
    this.table('pets', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterPetsSchema
