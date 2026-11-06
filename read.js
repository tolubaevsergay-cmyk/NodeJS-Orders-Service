const {toResource} = require('./index')
module.exports = (app, db) => {
    app.get('/orders', async (request, reply)=> {
        let Order = require('../schema/index').Order
        const orders = await Order.find().sort({ date: -1 })
        return reply.send({
            count: orders.length, 
            orders: orders.map(toResource)
        })
    })
}