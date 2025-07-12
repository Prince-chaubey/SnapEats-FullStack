const userModel = require("../models/userModel");
const orderModel = require("../models/orderModel");
const stripe = require("stripe");

const Stripe = new stripe(process.env.STRIPE_SECRET);
const Frontend_URL = "http://localhost:5173";

// Placing user order from Frontend
const placeOrder = async (req, res) => {
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();

    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100 * 80,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 2 * 100 * 80,
      },
      quantity: 1,
    });

    const session = await Stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${Frontend_URL}/verify?success=true&orderId=${newOrder.id}`,
      cancel_url: `${Frontend_URL}/verify?success=false&orderId=${newOrder.id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to place order" });
  }
};


const verifyPayment = async (req, res) => {
  const { orderId, success } = req.body;

  try {
    if (!orderId) {
      return res.status(400).json({ success: false, message: "Order ID is required" });
    }

    const isPaymentSuccess = success === true || success === "true";

    if (isPaymentSuccess) {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      return res.json({ success: true, message: "Payment verified" });
    } else {
      return res.json({ success: false, message: "Payment not completed" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Verification failed" });
  }
};

//Controller for user Orders
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.user.id });
    res.json({ success: true, data: orders });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

//Listing all the orders of all the users

const listOrders=async(req,res)=>{
           try{
            const orders=await orderModel.find({});
            res.json({success:true,data:orders});
           }
           catch(err){
            console.log("Error:",err);
            res.json({success:false,message:err});
           }
}

//Order Status
const updateOrderStatus = async (req, res) => {
  const { orderId, status } = req.body;

  try {
    if (!orderId || !status) {
      return res.status(400).json({ success: false, message: "Order ID and status required" });
    }

    const updatedOrder = await orderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.json({ success: true, message: "Order status updated", data: updatedOrder });
  } catch (error) {
    console.error("Status update error:", error);
    res.status(500).json({ success: false, message: "Failed to update order status" });
  }
};

module.exports = { placeOrder,verifyPayment,userOrders,listOrders,updateOrderStatus};
