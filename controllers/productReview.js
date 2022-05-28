const Review = require("../models/ProductReview");

const addReview = async (req, res, next) => {
  const newReview = new Review(req.body);
  try {
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

const getProductReviews = async (req,res,next) => {
  try {
    const reviews = await Review.find({ PID: req.params.pid });
    res.status(200).json(reviews);
} catch (err) {
    next(err);
}
}

module.exports = {
  addReview,
  updateReview,
  deleteReview,
  getReview,
  getAllReviews,
  getProductReviews
};
