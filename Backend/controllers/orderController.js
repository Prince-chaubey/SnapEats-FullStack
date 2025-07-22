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
        unit_amount: item.price * 10 * 100, // changed from *10*80 to *10*100
      },
      quantity: item.quantity,
    }));

    // Delivery charges set to ₹50 (i.e., 50 * 100 = 5000 paise)
    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 50 * 100,
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
