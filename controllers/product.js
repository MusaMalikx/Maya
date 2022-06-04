const Product = require("../models/Product");
const pageChecker = require("../utils/pageChecker");

const addProduct = async (req, res, next) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json("Product has been updated!");
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted!");
  } catch (err) {
    next(err);
  }
};

const getProdcut = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

const getAllProducts = async (req, res, next) => {
  
  try {

    const page = req.query.p
    console.log(page)

    if (page) {

      const maxproducts = 4;
      var pages = 0
      // const end = req.query.e
      const products = await Product.find();
      // console.log(start, end)

      const mod = products.length % maxproducts

      if (mod == 0) {
        pages = Math.trunc(products.length / maxproducts)
      }
      else {
        pages = Math.trunc(products.length / maxproducts) + 1
      }

      const start = pageChecker(page, maxproducts, products.length, mod)

      let end = 0

      if (page * maxproducts <= products.length) {
        end = start + maxproducts
      }
      else {
        end = products.length
      }

      // console.log(start, end)

      res.status(200).json(
        {
          products: products.slice(start, end),
          length: products.length,
          pages: pages
        }
      )
    }
    else {
      const products = await Product.find();
      res.status(200).json(products);
    }
  } catch (err) {
    next(err);
  }

  // try {
  //   const products = await Product.find();
  //   res.status(200).json(products);
  // } catch (err) {
  //   next(err);
  // }
};

const searchProducts = async (req, res, next) => {
  console.log(req.params)
  const products = await Product.find({ category: req.params.category });
  try {
    // console.log(req.body)
    // console.log(products)
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  getProdcut,
  getAllProducts,
  searchProducts
};
