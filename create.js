const {createOrderSchema} = require('../schema/index')
const {toResource} = require('./index')
const {normalizeName} = require('./index')
module.exports = (app, db) => {
    app.post('/order', {schema: createOrderSchema}, async (request, reply) => {
        let Order = require('../schema/index').Order
        const orderName = normalizeName(request.body.name)
        const existing = await Order.findOne({ name: orderName })
        if(existing) return reply.code(409).send({ message: 'Order already exists' })
        if(!orderName) return reply.code(400).send({error: 'The Name Field Is Required'})
        const created = await Order.create({ name: orderName })
        return reply.code(201).send({
            message: 'Order created successfully', 
            order: toResource(created)
        })
    })
}