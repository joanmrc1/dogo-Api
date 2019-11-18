'use strict'

const User = use('App/Models/User');

class LoginController {

  async Login({ request, auth, response }) {
    const { email, password } = request.all();

    try {
      const token = await auth.attempt(email, password);

      const user = await User.findBy('email', email);

      const pets = await user.pets().fetch()

      const favorityPet = await user.pets().where('favorite', true).fetch()

      return response.send({
        token,
        user,
        pets,
        favorityPet,
      });
    } catch (error) {
      return error;
    }
  }

  async Register ({ request, auth, response }) {
    const data = request.only(['name', 'birthday', 'email', 'password']);

    const user = await User.create(data);

    const token = await auth.generate(user);

    const pets = [];

    const favorityPet = [];

    return response.send({
      token,
      user,
      pets,
      favorityPet,
    });
  }
}

module.exports = LoginController
