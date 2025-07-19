const express=require("express");
const multer=require("multer");
const { addFood, removeFood, listFood } = require("../controllers/foodControllers");


//Router for the FoodModel onlu
const foodRouter=express.Router();

//Storage to add the Images of the food
const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,filename,callback)=>{
        return callback(null,`${Date.now()}-${filename.originalname}`);
    }
})

const uploads=multer({storage:storage});


//Route to add Foods
foodRouter.post("/add",uploads.single("image"),addFood);

//Route to remove Foods
foodRouter.post("/remove",removeFood);

//Route to list all the Foods
foodRouter.get("/list",listFood);


module.exports=foodRouter;