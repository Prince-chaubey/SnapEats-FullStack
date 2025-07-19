const express = require("express");
const { addToCart, removeFromCart, getCart } = require("../controllers/cartController");
const authMiddlware = require("../middlewares/auth"); 

const cartRouter = express.Router();

cartRouter.post("/add", authMiddlware, addToCart);
cartRouter.post("/remove", authMiddlware, removeFromCart);
cartRouter.get("/get", authMiddlware, getCart);

module.exports = cartRouter;