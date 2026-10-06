const MenuService = require('../services/menu.service');
const menuService = new MenuService();

class MenuController {
    async getAllMenus(req, res) {
        try {
            const menus = await menuService.getAllMenus();
            res.status(200).json({ 
                message: "Menus retrieved successfully",
                data: menus 
            });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    async getMenuByName(req, res) {
        const { name } = req.body;
        try {
            const menu = await menuService.getMenuByName({ name });
            if (!menu) {
                return res.status(404).json({ message: "Menu not found" });
            }
            res.status(200).json({ 
                message: "Menu retrieved successfully",
                data: menu 
            });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    async createMenu(req, res) {
        const { name, price, description, image, is_available } = req.body;
        try {
            const menu = await menuService.createMenu({ name, price, description, image, is_available });
            res.status(201).json({ 
                message: "Menu created successfully",
                data: menu 
            });
        } catch (error) {
            res.status(400).json({ message: "Internal server error" });
        }
    }
}

module.exports = MenuController;