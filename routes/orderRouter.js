const router = require('express').Router

const { addOrder } = require('../middleware/ordersMiddleware/addOrder')
const { deleteOrder } = require('../middleware/ordersMiddleware/deleteOrder')
const { getOrder } = require('../middleware/ordersMiddleware/getOrder')
const { updateOrder } = require('../middleware/ordersMiddleware/updateOrder')
router.put('/newOrder', addOrder);
router.get('/getOrder', getOrder);
router.post('/updateOrder', updateOrder);
router.delete('/deleteOrder', deleteOrder);

modeule.exports = router