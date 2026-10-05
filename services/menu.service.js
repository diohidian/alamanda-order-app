const { menus } = require('../models');

class MenuService {
    
    async getAllMenus() {
        return await menus.findAll();
    }

    async getMenuByName(data) {
        return await menus.findOne({ where: { name: data.name } });
    }

    async createMenu(data) {
        return await menus.create(data);
    }
}

module.exports = MenuService;