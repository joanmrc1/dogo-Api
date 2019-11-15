'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Vermugation = use('App/Models/Vermugation')
/**
 * Resourceful controller for interacting with vermugations
 */
class VermugationController {
  /**
   * Show a list of all vermugations.
   * GET vermugations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view, pagination }) {
    const name = request.input('name')
    const query = Vermugation.query()
    // se usar mysql troque ILIKE por LIKE
    if(name) {
      query.where('name', 'ILIKE', `%${name}%`)
    }
    const vermugation = await query.paginate(pagination.page, pagination.limit)
    return response.send(vermugation)
  }

  /**
   * Create/save a new vermugation.
   * POST vermugations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try {
      const { name, weight, date_of_appointment, repeat_in } = request.all()
      const vermugation = await Vermugation.create({ name, weight, date_of_appointment, repeat_in })
      return response.status(201).send(vermugation)
    } catch (error) {
      response.status(400)
      .send({ message: 'Não foi possivel criar a vacina neste momento!'})
    }
  }

  /**
   * Display a single vermugation.
   * GET vermugations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params: { id }, request, response, view }) {
    const vermugation = await Vermugation.findOrFail(id)
    return response.send(vermugation)
  }

  /**
   * Update vermugation details.
   * PUT or PATCH vermugations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params: { id }, request, response }) {
    const vermugation = await Vermugation.findOrFail(id)
    try {
      const { name, weight, date_of_appointment, repeat_in } = request.all()
      vermugation.merge({ name, weight, date_of_appointment, repeat_in })
      await vaccine.save()
      return response.send(vermugation)
    } catch (error) {
      return response.status(400).send({
        message: 'Não foi possível atualizar!'
      })
    }
  }

  /**
   * Delete a vermugation with id.
   * DELETE vermugations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params: { id }, request, response }) {
    const vermugation = await Vermugation.findOrFail(id)
    try {
      await vermugation.delete()
      return response.status(204).send()
    }catch (error) {
      response.status(500).send({
        message: 'Não foi possível deletar este registro!'
      })
    }
  }
}

module.exports = VermugationController
