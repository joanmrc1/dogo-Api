'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Vaccine = use('App/Models/Vaccine')
/**
 * Resourceful controller for interacting with vaccines
 */
class VaccineController {
  /**
   * Show a list of all vaccines.
   * GET vaccines
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response }) {

    const { petId } = request.all()

    const vaccines = await Vaccine.query().where('pet_id', petId).fetch()
   
    return response.send(vaccines)
  }

  /**
   * Create/save a new vaccine.
   * POST vaccines
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try {
      const { name, pet_id, type, vaccine_in, next_vaccine } = request.all()

      const vaccine = await Vaccine.create({ name, pet_id, type, vaccine_in, next_vaccine })

      return response.status(201).send(vaccine)
    } catch (error) {
      response.status(400)
      .send({ message: 'Não foi possivel criar a vacina neste momento!'})
    }
  }

  /**
   * Display a single vaccine.
   * GET vaccines/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params: { id }, request, response, view }) {
    const vaccine = await Vaccine.findOrFail(id)
    return response.send(vaccine)
  }

  /**
   * Update vaccine details.
   * PUT or PATCH vaccines/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params: { id }, request, response }) {
    const vaccine = await Vaccine.findOrFail(id)
    try {
      const { name, vaccine_in, next_vaccine } = request.all()
      vaccine.merge({ name, vaccine_in, next_vaccine })
      await vaccine.save()
      return response.send(vaccine)
    } catch (error) {
      return response.status(400).send({
        message: 'Não foi possível atualizar!'
      })
    }
  }

  /**
   * Delete a vaccine with id.
   * DELETE vaccines/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params: { id }, request, response }) {
    const vaccine = await Vaccine.findOrFail(id)
    try {
      await vaccine.delete()
      return response.status(204).send()
    }catch (error) {
      response.status(500).send({
        message: 'Não foi possível deletar este registro!'
      })
    }
  }
}

module.exports = VaccineController
