const express = require('express');
const { CreateOrder, EditOrder, DeleteOrder, getOrder,getAllOrders } = require("../controllers/order");
const router = express.Router();

router.post('/', CreateOrder)

router.put('/:id', EditOrder)

router.delete('/:id', DeleteOrder)

router.get('/:id', getOrder)

router.get('/', getAllOrders)

module.exports = router;