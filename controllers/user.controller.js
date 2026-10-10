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

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userService.userLogin({ email, password });
      res.status(200).json({ 
        message: "User logged in successfully",
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt
        } 
      });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
}

module.exports = UserController;