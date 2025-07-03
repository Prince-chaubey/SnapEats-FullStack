const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());



// Connect to database
connectDB();


// Test routes
app.get("/", (req, res) => {
    res.send("Welcome to SnapEats Backend Side");
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
