const UserService = require("../services/user.service");
const userService = new UserService();
class UserController {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;
      const user = await userService.userRegister({ name, email, password });
      res.status(201).json({ 
        message: "User registered successfully",
        data: user 
        });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = UserController;