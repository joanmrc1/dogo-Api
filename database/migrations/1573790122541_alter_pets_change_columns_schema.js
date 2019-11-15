'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterPetsChangeColumnsSchema extends Schema {
  up () {
    this.table('pets', (table) => {
      table.string('veterinary', 80).nullable();
      table.renameColumn('sexy', 'gender');
      table.renameColumn('coat', 'fur');
    })
  }

  down () {
    this.table('pets', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterPetsChangeColumnsSchema
