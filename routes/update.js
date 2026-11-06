const {createOrderSchema} = require('../schema/index')
const {idParamsSchema} = require('../schema/index')
const {normalizeName} = require('./index')
module.exports = (app, db) => {
    app.put('/orders/:id', {schema:
            {params: idParamsSchema.params,
            body: createOrderSchema.body,
            response: { 204: { type: 'null' } }}}, async (request, reply)=> {
        let Order = require('../schema/index').Order
        const order = await Order.findOne({id: request.params.id})
        const name = normalizeName(request.body.name)
        if(!order) return reply.code(404).send({error: 'Order Not Found'})
        if(!name) return reply.code(400).send({error: 'The Name Field Is Required'})
        await Order.updateOne({id: request.params.id}, {$set: {name: name}})
        return reply.code(204).send()
    })
}
