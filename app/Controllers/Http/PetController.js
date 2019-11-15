'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Pet = use('App/Models/Pet')
const Helpers = use('Helpers')
/**
 * Resourceful controller for interacting with pets
 */
class PetController {
  /**
   * Show a list of all pets.
   * GET pets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view, pagination }) {
    const name = request.input('name')
    const query = Pet.query()
    // se usar mysql troque ILIKE por LIKE
    if(name) {
      query.where('name', 'ILIKE', `%${name}%`)
    }
    const pets = await query.paginate(pagination.page, pagination.limit)
    return response.send(pets)
  }

  /**
   * Create/save a new pet.
   * POST pets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try {
      const { name, gender, breed, species, fur, birthday, veterinary } = request.all()

      const images = request.file('avatar', {
        types: ['image'],
        size: '2mb'
      })

      await images.move(Helpers.tmpPath('uploads'), {
        name: `${new Date().getTime()}.${images.clientName}`
      })

      if (!images.moved()) {
        return images.errors()
      }

      const pet = await Pet.create({
        name,
        gender,
        breed,
        species,
        fur,
        birthday,
        veterinary,
        doctor,
        avatar: images.fileName
      })
      return response.status(201).send(pet)
    } catch (error) {
      return response.status(400).send({
        message: 'Não foi possível cadastrar seu pet no momento!'
      })
    }
  }

  /**
   * Display a single pet.
   * GET pets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params: { id }, request, response, view }) {
    const pet = await Pet.findOrFail(id)
    return response.send(pet)
  }

  /**
   * Update pet details.
   * PUT or PATCH pets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params: { id }, request, response }) {
    const pet = await Pet.findOrFail(id)
    const { name, sexy, breed, species, coat, birthday, doctor } = request.all()
    const images = request.file('avatar', {
      types: ['image'],
      size: '2mb'
    })

    await images.move(Helpers.tmpPath('uploads'), {
      name: `${new Date().getTime()}.${images.clientName}`
    })

    if (!images.moved()) {
      return images.errors()
    }
    pet.merge({
      name,
      sexy,
      breed,
      species,
      coat,
      birthday,
      doctor,
      avatar: images.fileName
    })
    await pet.save()
    return response.send(pet)
  }

  /**
   * Delete a pet with id.
   * DELETE pets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params: { id }, request, response }) {
    const pet = await Pet.findOrFail(id)
    try {
      await pet.delete()
      return response.status(204).send()
    }catch (error) {
      response.status(500).send({
        message: 'Não foi possível deletar este pet!'
      })
    }
  }
}

module.exports = PetController
