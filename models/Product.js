const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      // required: true,
    },
    size: {
      type: Object,
      required: true,
    },
    rating: {
      type: String,
      default: '0'
    },
    ratingCount:{
      type:String,
      default:'0'
    },
    image: {
      type: String,
      // required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
