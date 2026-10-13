const express = require('express');
const routerUser = express.Router();
const UserController = require('../../controllers/user.controller');
const userController = new UserController();

routerUser.post("/v1/register", userController.register);
routerUser.post("/v1/login", userController.login);
routerUser.post('/v1/loginAuth', userController.loginAuth)

module.exports = routerUser;