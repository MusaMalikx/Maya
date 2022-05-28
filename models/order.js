const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true
    },
    status: {
      type: Object,
    },
    products: {
      type: Array,
      required: true
    },
    subtotal: {
      type: String,
      required: true

    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
