const userModel = require("../models/userModel");
const orderModel = require("../models/orderModel");
const stripe = require("stripe");

const Stripe = new stripe(process.env.STRIPE_SECRET);
const Frontend_URL = "http://localhost:8080";

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
  const { success, orderId } = req.body;

  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, {
        payment: true,
        status: "Order Confirmed",
      });
      res.json({ success: true, message: "Payment verified and order updated." });
    } else {
      res.json({ success: false, message: "Payment failed or canceled." });
    }
  } catch (error) {
    console.error("Verification Error:", error);
    res.status(500).json({ success: false, message: "Failed to verify payment" });
  }
};

module.exports = { placeOrder, verifyPayment };
