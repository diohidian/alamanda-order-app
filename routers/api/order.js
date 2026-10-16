const express = require('express');
const routerOrder = express.Router();
const OrderController = require('../../controllers/order.controller');
const checkToken = require('../../middleware/checkToken');
const orderController = new OrderController();

routerOrder.post('/v1/orders/create', orderController.createOrder);
routerOrder.get('/v1/orders/get', orderController.getOrderById);

module.exports = routerOrder;