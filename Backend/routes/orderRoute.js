const express = require("express");
const auth=require("../middlewares/auth")
const { placeOrder, verifyPayment, userOrders } = require("../controllers/orderController");

const orderRouter = express.Router();

orderRouter.post("/place", placeOrder);
orderRouter.post("/verify", verifyPayment);
orderRouter.post("/userOrders",auth,userOrders);


module.exports = orderRouter;
