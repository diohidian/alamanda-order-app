const { Users } = require("../models");
const bcrypt = require("bcrypt");

class UserService {
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
}
module.exports = UserService;
