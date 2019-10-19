'use strict'

const User = use('App/Models/User');

class LoginController {
  async Auth({ request, auth }) {
    const { email, passwotd } = request.all();

    const token = await auth.Attempt(email, passwotd);

    return token;
  }

  async Register ({ request, auth }) {
    const data = request.only(['name', 'email', 'password']);

    const user = await User.create(data);

    const token = await auth.generate(user)

    return token;
  }
}

module.exports = LoginController
