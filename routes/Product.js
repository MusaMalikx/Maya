const express = require('express');
// const multer = require('multer');
// const { request } = require('../app');

const { addProduct, updateProduct, deleteProduct, getProdcut, getAllProducts,searchProducts } = require("../controllers/product");
const Product = require('../models/Product');
const router = express.Router();

// const storage = multer.diskStorage({
//     destination: (req,file,cb) => {
//         cb(null,'./public/products')
//     },
//     filename: (req,file,cb) => {
//         cb(null,Date.now() + '--' + file.originalname)
//     }
// })

// const upload = multer({storage: storage})
// upload.single("product"), 
router.post('/', addProduct)
router.post('/image/:id', async (req, res, next) => {

    console.log(req.body.myFile);
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, { picture: req.body }, { new: true })
        // const newImage = await Post.create(body);
        product.save();
        res.status(201).json({ message: "new image uploaded", createdPost: newImage });
    } catch (error) {
        res.status(409).json({
            message: error.message,
        });
    }
})

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

router.get('/:id', getProdcut)

router.get('/', getAllProducts)

router.get('/search/:category', searchProducts)

module.exports = router;