const express = require('express');
const { addReview ,updateReview, deleteReview, getReview, getAllReviews, getProductReviews} = require("../controllers/productReview");
const router = express.Router();

router.post('/', addReview)

router.put('/:id', updateReview)

router.delete('/:id', deleteReview)

router.get('/:id', getReview)
router.get('/product/:pid', getProductReviews)

router.get('/', getAllReviews)

module.exports = router;