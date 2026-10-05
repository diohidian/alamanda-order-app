const OrderService = require('../services/order.service');
const orderService = new OrderService();

class OrderController {
    async createOrder(req, res) {
        try {
            const { orderData, orderItems } = req.body;
            const order = await orderService.createOrder(orderData, orderItems);
            res.status(201).json({
                message: 'Order created successfully',
                data: order
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getOrderById(req, res) {
        try {
            const { orderId } = req.body;
            const order = await orderService.getOrderById(orderId);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json({
                message: 'Order retrieved successfully',
                data: order
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = OrderController;