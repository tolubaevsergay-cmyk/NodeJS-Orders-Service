const db = require('../db/index');
const shortid = require('shortid')
let orderSchema = new db.Schema({
	id: {type: String, required: true, unique: true, default: shortid.generate},
    name: {type: String, required: true},
    date: {type: Date, default: Date.now}
});
const Order = db.model('Order', orderSchema)

const createOrderSchema = {
    body: {
        type: 'object',
        required: ['name'],
        properties: {name:{ type: 'string', minLength: 1}},
        additionalProperties: false
    },
    response: {
        201: {
            type: 'object',
            properties: {
                id: {type: 'string'},
                name: {type: 'string'},
                date: {type: 'string'}
            }
        }
    }
}

const idParamsSchema = {
    params: {
        type: 'object',
        required: ['id'],
        properties: {id:{ type: 'string', minLength: 1}},
        additionalProperties: false
    },
    response: {
        200: {
            type: 'object',
            properties: {
                message: {type: 'string'},
                order:{
                id:   { type: 'string' },
                name: { type: 'string' },
                date: { type: 'string' }
                }
            }
        }
    }
}

module.exports = {
    Order,
  createOrderSchema,
  idParamsSchema
}