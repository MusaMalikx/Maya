const Order = require("../models/order");
const Cart = require("../models/cart");

const CreateOrder = async (req, res, next) => {
  // const newOrder = new Order(req.body);
  
  try {
    const cart = await Cart.findById(req.body.Cartid);
    const ucart = await Cart.findByIdAndUpdate(req.body.Cartid, { Ordernumber: cart.Ordernumber + 1, products: [], subtotal: 0 });
    const newOrder = new Order({
      user_id: cart.uid,
      products: cart.products,
      Ordernumber: ucart.Ordernumber,
      subtotal: cart.subtotal,
      status: req.body.status
    });
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    next(err);
  }
};

const EditOrder = async (req, res, next) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    next(err);
  }

};
const DeleteOrder = async (req, res, next) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted!");
  } catch (err) {
    next(err);
  }
};

const getOrder = async (req, res, next) => {
  try {
    const order = await Order.find({ user_id: req.params.id });
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
}

const getAllOrders = async (req, res, next) => {
  try {
    const Orders = await Order.find();
    res.status(200).json(Orders);
  } catch (err) {
    next(err);
  }
}

module.exports = { CreateOrder, EditOrder, DeleteOrder, getOrder, getAllOrders };
