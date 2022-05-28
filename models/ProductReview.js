const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductReviewSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: [1, "Must be atleast 1!"],
      max: 5,
    },
    PID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductReview",ProductReviewSchema);
