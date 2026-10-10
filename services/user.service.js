const { Users } = require("../models");
const bcrypt = require("bcrypt");

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
}
module.exports = UserService;
