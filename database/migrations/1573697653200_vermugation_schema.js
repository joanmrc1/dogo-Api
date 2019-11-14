'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VermugationSchema extends Schema {
  up () {
    this.create('vermugations', (table) => {
      table.increments()
      table.string('name')
      table.float('weight')
      table.string('date_of_appointment')
      table.string('repeat_in')
      table.timestamps()
    })
  }

  down () {
    this.drop('vermugations')
  }
}

module.exports = VermugationSchema
