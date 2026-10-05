const express = require('express');
const routerMenu = express.Router();
const MenuController = require('../../controllers/menu.controller');
const menuController = new MenuController();

routerMenu.get("/v1/menus", menuController.getAllMenus);
routerMenu.get("/v1/menus/name", menuController.getMenuByName);
routerMenu.post("/v1/menus/create", menuController.createMenu);

module.exports = routerMenu;