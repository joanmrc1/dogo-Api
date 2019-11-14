'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vaccine extends Model {
  pets() {
    return this.belongsToMany('App/Models/Pet')
  }
}

module.exports = Vaccine
