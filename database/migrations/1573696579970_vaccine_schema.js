'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VaccineSchema extends Schema {
  up () {
    this.create('vaccines', (table) => {
      table.increments()
      table.string('name')
      table.string('vaccine_in')
      table.string('next_vaccine')
      table.timestamps()
    })
  }

  down () {
    this.drop('vaccines')
  }
}

module.exports = VaccineSchema
