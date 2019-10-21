'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterUserColumnsSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('name', 80).nullable().alter()
      table.string('birthday', 80).nullable().alter()
      table.dropUnique('name');
      table.dropUnique('birthday');
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterUserColumnsSchema
