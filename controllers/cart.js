const Product = require("../models/Product");
const Cart = require("../models/cart");

const CreateCart = async (req, res, next) => {

  const cart = await Cart.findOne({ uid: req.body.uid })

  if (cart) {
    res.status(200).json(cart);
  }
  else {
    const newCart = new Cart(req.body);

    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      next(err);
    }
  }
};


const AddToCart = async (req, res, next) => {
  const productID = req.body.productID;
  const count = req.body.count;
  const UserID = req.params.id;
  console.log(UserID)
  try {

    const product = await Product.findById(productID);
    const sub_total = parseInt(product.price) * count;

    const cart = await Cart.findOne({ uid: UserID });

    const productsInCart = cart.products;

    let total = 0

    if (cart.subtotal) {
      total = parseInt(cart.subtotal) + sub_total;
    }
    else {
      total = sub_total
    }

    const index = productsInCart.findIndex(x => x.id == productID);
    if (index == -1) {
      const prodObj = {
        id: product._id,
        name: product.name,
        size: product.size,
        price: product.price,
        image: product.image,
        quantity: count,
        total: sub_total,
      }
      productsInCart.push(prodObj);

    }
    else {

      productsInCart[index].total = parseInt(productsInCart[index].total) + parseInt(sub_total);
      productsInCart[index].quantity = parseInt(productsInCart[index].quantity) + parseInt(count);


    }
    const UpdatedCart = await Cart.findByIdAndUpdate(
      cart._id,
      { products: productsInCart, subtotal: total },
      { new: true }
    );
    res.status(200).json(UpdatedCart);

  } catch (err) {
    next(err);
  }
};

const RemoveFromCart = async (req, res, next) => {

  // console.log(req.body)
  const productID = req.body.productID;

  try {
    console.log("in")
    const cart = await Cart.findById(req.params.id);
    let productsInCart = cart.products;
    const index = productsInCart.findIndex(x => x.id == productID);
    console.log("out")
    let total = 0;
    if (index == -1) {
      const err = new Error();
      err.status = 400;
      err.message = "Invalid operation"
      next(err);
    }

    if (productsInCart[index].quantity == 1) {
      total = parseInt(cart.subtotal) - parseInt(productsInCart[index].price);
      productsInCart.splice(index, 1);
    }
    else if (productsInCart[index].quantity > 1) {
      productsInCart[index].quantity = parseInt(productsInCart[index].quantity) - 1;
      productsInCart[index].total = parseInt(productsInCart[index].total) - parseInt(productsInCart[index].price);
      total = parseInt(cart.subtotal) - parseInt(productsInCart[index].price);
    }

    const UpdatedCart = await Cart.findByIdAndUpdate(
      cart._id,
      { products: productsInCart, subtotal: total },
      { new: true }
    );
    res.status(200).json(UpdatedCart);
  } catch (err) {
    next(err);
  }
};

const getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ uid: req.params.uid });
    res.status(200).json(cart);
  } catch (err) {
    next(err);
  }
}



module.exports = { CreateCart, AddToCart, RemoveFromCart, getCart };
