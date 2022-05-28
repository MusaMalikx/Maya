const express = require('express');
const multer = require('multer');
const { request } = require('../app');

const { addProduct, updateProduct, deleteProduct, getProdcut, getAllProducts } = require("../controllers/product");
const Product = require('../models/Product');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'./public/products')
    },
    filename: (req,file,cb) => {
        cb(null,Date.now() + '--' + file.originalname)
    }
})

const upload = multer({storage: storage})

router.post('/', addProduct)
router.post('/image/:id', upload.single("product"), async (req, res, next) => {
    // try {console.log(req.file);
    // res.status(200).json("file uploaded!")
    // } catch (err) {
    //     next(err)
    // }
    try {
        console.log(req.file);

        const user = await Product.findByIdAndUpdate(req.params.id, { picture: req.file.path }, { new: true })
        res.status(200).json("file uploaded!")
    } catch (err) {
        next(err)
    }
})

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

router.get('/:id', getProdcut)

router.get('/', getAllProducts)

module.exports = router;