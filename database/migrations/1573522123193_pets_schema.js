'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PetsSchema extends Schema {
  up () {
    this.create('pets', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('sexy').notNullable()
      table.string('breed').notNullable()
      table.string('species').notNullable()
      table.string('coat').notNullable()
      table.string('birthday').notNullable()
      table.string('doctor').nullable()
      table.string('avatar').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('pets')
  }
}

module.exports = PetsSchema
