const express = require("express");
const auth=require("../middlewares/auth")
const { placeOrder, verifyPayment } = require("../controllers/orderController");

const orderRouter = express.Router();

orderRouter.post("/place", placeOrder);
orderRouter.post("/verify", verifyPayment);



module.exports = orderRouter;
