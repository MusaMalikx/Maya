const express = require('express');
const { CreateCart, AddToCart, RemoveFromCart, getCart } = require("../controllers/cart");
const router = express.Router();

router.post('/', CreateCart)

router.put('/:id', AddToCart)

router.delete('/:id', RemoveFromCart)

router.get('/:uid', getCart)

module.exports = router;