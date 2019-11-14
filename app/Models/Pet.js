'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pet extends Model {
  user() {
    return this.belongsTo('App/Models/User')
  }

  vaccines() {
    return this.belongsToMany('App/Models/Vaccine')
  }

  vermugations() {
    return this.belongsToMany('App/Models/Vermugation')
  }
}

module.exports = Pet
