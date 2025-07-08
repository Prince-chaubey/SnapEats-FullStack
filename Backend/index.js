const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const foodRouter=require("./routes/foodRoute");
const userRouter = require("./routes/userRoute");
const cartRouter = require("./routes/cartRoute");
const orderRouter = require("./routes/orderRoute");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads",express.static("uploads"));



// Connect to database
connectDB();


//API's complete end points
app.use("/api/food",foodRouter);
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);


// Test routes
app.get("/", (req, res) => {
    res.send("Welcome to SnapEats Backend Side");
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});