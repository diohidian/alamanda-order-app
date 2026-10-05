const { Orders, Order_item, menus } = require('../models');

class OrderService {
    async createOrder(orderData, orderItems) {
        const order = await Orders.create(orderData);
        const orderItemData = orderItems.map(item => ({
            ...item,
            order_id: order.id
        }));
        await Order_item.bulkCreate(orderItemData);
        return order;
    }

    async getOrderById(orderId) {
        return await Orders.findOne({
            where: { id: orderId },
            include: [
                {
                    model: Order_item,
                    include: [ menus ]
                }
            ]
        });
    }

    
}

module.exports = OrderService;