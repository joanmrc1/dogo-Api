'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddColumnVaccineSchema extends Schema {
  up () {
    this.table('vaccines', (table) => {
      table.string('type', 80).nullable();
    })
  }

  down () {
    this.table('add_column_vaccines', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddColumnVaccineSchema
