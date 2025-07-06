const userModel = require("../models/userModel.js");

//  Add item to cart
const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const itemId = req.body.itemId;

    const userData = await userModel.findById(userId);
    const cartData = userData.cartData || {};

    cartData[itemId] = (cartData[itemId] || 0) + 1;

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Item added to cart!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

//  Remove item from cart
const removeFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const itemId = req.body.itemId;

    const userData = await userModel.findById(userId);
    const cartData = userData.cartData || {};

    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] <= 0) delete cartData[itemId];

      await userModel.findByIdAndUpdate(userId, { cartData });
      res.json({ success: true, message: "Item removed from cart!" });
    } else {
      res.json({ success: false, message: "Item not found in cart." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get user cart
const getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const userData = await userModel.findById(userId);
    const cartData = userData.cartData || {};
    res.json({ success: true, cartData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { addToCart, removeFromCart, getCart };
