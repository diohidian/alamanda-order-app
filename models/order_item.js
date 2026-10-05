'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order_item.belongsTo(models.Orders, {
        foreignKey: 'order_id',
      });
      
      Order_item.belongsTo(models.menus, {
        foreignKey: 'menu_id',
      });
    }
    
  }
  Order_item.init({
    order_id: DataTypes.INTEGER,
    menu_id: DataTypes.INTEGER,
    unit_price: DataTypes.STRING,
    subtotal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order_item',
  });
  return Order_item;
};