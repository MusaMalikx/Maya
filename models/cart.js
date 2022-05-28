const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartSchema = new Schema(
  {
    uid: {
      type: String,
      required: true
    },
    products: {
      type: Array,

    },
    subtotal: {
      type: String,

    },
    Ordernumber: {
      type: Number,
      default: 0
      // required: true
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
