'use strict'

const User = use('App/Models/User');
const Pet = use('App/Models/Pet');

class UserController {

	async getInfoUser({ auth, response }) {

		const user = await auth.getUser()

	    const pets = await user.pets().fetch()

	    const favorityPet = await user.pets().where('favorite', true).fetch()

	    return response.send({
	    	user,
	    	pets,
	    	favorityPet
	    })
    }
}

module.exports = UserController
