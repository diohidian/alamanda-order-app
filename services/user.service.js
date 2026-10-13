const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

class UserService {
  // Method to register a new user
  async userRegister(data) {
    const existingUser = await Users.findOne({ where: { email: data.email } });
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const userData = {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: "customer",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    if (!existingUser) {
      const user = await Users.create(userData);
      return user;
    } else {
      throw new Error("Email already exists");
    }
  }

  // methodfor login user
  async userLogin(data) {
    const user = await Users.findOne({ where: { email: data.email } });
    if (!user || !(await bcrypt.compare(data.password, user.password))) {
      throw new Error("Invalid credentials");
    }
    return user;
  }

  async getUser(data) {
    return await findOne({where: { id: data.id} })
  }

  async generateToken({id, email, name}) {
    const payload = {
      sub: "payload",
      usr: {
        id: id,
        email: email,
        name: name
      }
    }

    return jwt.sign(payload, process.env.SECRETTOKEN, { expiresIn: '1d' });
  }
}
module.exports = UserService;
