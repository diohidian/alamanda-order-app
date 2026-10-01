const express = require('express');
const routerUser = express.Router();
const UserController = require('../../controllers/user.controller');
const userController = new UserController();

routerUser.post("/v1/register", userController.register);

module.exports = routerUser;