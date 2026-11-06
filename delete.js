const {idParamsSchema} = require('../schema/index')
const {toResource} = require('./index')
module.exports = (app, db) => {
    app.delete('/orders/:id', {schema: idParamsSchema}, async (request, reply)=> {
        let Order = require('../schema/index').Order
        const order = await Order.findOneAndDelete({id: request.params.id})
        if(!order) return reply.code(404).send({error: 'Order Not Found'})
        return reply.code(200).send({
            message: 'Order deleted successfully', 
            order: toResource(order)
        })
    })
}