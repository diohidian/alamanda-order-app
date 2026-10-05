'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class menus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      menus.hasMany(models.Order_item, {
        foreignKey: 'menu_id'
      });
    }
  }
  menus.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    image: DataTypes.STRING,
    is_available: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'menus',
  });
  return menus;
};