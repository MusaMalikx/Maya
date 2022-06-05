const Product = require("../models/Product");
const ProductReview = require("../models/ProductReview");
const Review = require("../models/ProductReview");
const pageChecker = require("../utils/pageChecker");

const addReview = async (req, res, next) => {
  const newReview = new Review(req.body);
  try {
    const product= await Product.findById(req.body.PID)
    const rating=parseFloat(req.body.rating)+(parseFloat(product.rating)*parseFloat(product.ratingCount))
    const frat=rating/(parseFloat(product.ratingCount)+1)
    const totalReviews=parseInt(product.ratingCount)+1
    await Product.findByIdAndUpdate(req.body.PID,{"rating":frat,"ratingCount":totalReviews})
    const savedReview = await newReview.save();
    res.status(200).json(savedReview);
  } catch (err) {
    next(err);
  }
};

const updateReview = async (req, res, next) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json("Review has been updated!");
  } catch (err) {
    next(err);
  }
};

const deleteReview = async (req, res, next) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).json("Review has been deleted!");
  } catch (err) {
    next(err);
  }
};

const getReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);
    res.status(200).json(review);
  } catch (err) {
    next(err);
  }
};

const getAllReviews = async (req, res, next) => {
  try {
    console.log(req.query.pid)
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (err) {
    next(err);
  }
};

const getProductReviews = async (req, res, next) => {

  try {

    const page = req.query.p
    console.log(page)

    if (page) {

      const maxreviews = 3;
      var pages = 0
      // const end = req.query.e
      const reviews = await ProductReview.find({ PID: req.params.pid });
      // console.log(start, end)

      const mod = reviews.length % maxreviews

      if (mod == 0) {
        pages = Math.trunc(reviews.length / maxreviews)
      }
      else {
        pages = Math.trunc(reviews.length / maxreviews) + 1
      }

      const start = pageChecker(page, maxreviews, reviews.length, mod)

      let end = 0

      if (page * maxreviews <= reviews.length) {
        end = start + maxreviews
      }
      else {
        end = reviews.length
      }

      // console.log(start, end)

      res.status(200).json(
        {
          reviews: reviews.slice(start, end),
          length: reviews.length,
          pages: pages
        }
      )
    }
    else {
      const reviews = await Review.find({ PID: req.params.pid });
      res.status(200).json(reviews);
    }
  } catch (err) {
    next(err);
  }

  // try {
  //   const reviews = await Review.find({ PID: req.params.pid });
  //   res.status(200).json(reviews);
  // } catch (err) {
  //   next(err);
  // }
}

module.exports = {
  addReview,
  updateReview,
  deleteReview,
  getReview,
  getAllReviews,
  getProductReviews
};
