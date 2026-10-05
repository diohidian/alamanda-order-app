'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * 
     */

    static associate(models) {
      // define association here
      Orders.belongsTo(models.Users, {
        foreignKey: 'user_id',
      });

      Orders.hasMany(models.Order_item, {
        foreignKey: 'order_id',
      });
    }
  }
  Orders.init({
    surename: DataTypes.STRING,
    ordertype: DataTypes.STRING,
    table: DataTypes.STRING,
    notes: DataTypes.STRING,
    methodpayment: DataTypes.STRING,
    subtotal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};