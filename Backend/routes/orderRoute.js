const express = require("express");
const auth=require("../middlewares/auth")
const { placeOrder, verifyPayment, userOrders, listOrders, updateOrderStatus } = require("../controllers/orderController");

const orderRouter = express.Router();

orderRouter.post("/place", placeOrder);
orderRouter.post("/verify", verifyPayment);
orderRouter.post("/userOrders",auth,userOrders);
orderRouter.post("/list",listOrders);
orderRouter.post("/status",updateOrderStatus)


module.exports = orderRouter;
