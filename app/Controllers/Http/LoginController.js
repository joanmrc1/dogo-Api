'use strict'

const User = use('App/Models/User');

class LoginController {

  async Login({ request, auth }) {
    const { email, password } = request.all();

    const token = await auth.attempt(email, password); 
    
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
