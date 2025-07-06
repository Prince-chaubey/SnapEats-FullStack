const express=require("express");
const { login, register } = require("../controllers/userControllers");



//Router to manage the Authentication
const userRouter=express.Router();


//Route to login the user in DB
userRouter.post("/login",login);

//Route to register the user in DB
userRouter.post("/register",register);




module.exports=userRouter;