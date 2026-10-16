const express = require('express');
const routerUser = express.Router();
const UserController = require('../../controllers/user.controller');
const checkToken = require('../../middleware/checkToken');
const userController = new UserController();

routerUser.post("/v1/register", userController.register);
routerUser.post("/v1/login",checkToken ,userController.login);
routerUser.post('/v1/loginAuth', userController.loginAuth)

module.exports = routerUser;