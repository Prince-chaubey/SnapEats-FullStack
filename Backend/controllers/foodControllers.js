const foodModel=require("../models/foodModel.js");
const fs=require("fs");




//Controller to add Food in the database
const addFood=async(req,res)=>{
    
    //File access to store the image of food
    const file_name = req.file?.filename || " ";

  const newfood = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: file_name,
  });

  //try and catch block 
  try{
    await newfood.save();
    res.json({success:true,message:"Food Added!"});
  }
  catch(err){
    console.log("Error:",err);
    res.status(500).json({success:false,message:err});
  }

}


//Controller to remove food from the database
const removeFood=async(req,res)=>{
     const id=req.body.id;
     //Foound food via id
    try{
        const food=await foodModel.findById(id);
        //Unlinked the image
        fs.unlink(`uploads/${food.image}`,()=>{});
        //Deleted the food 
        await foodModel.findByIdAndDelete(id);
        res.json({success:true,message:"Food removed!"});

    }
    catch(err){
        console.log("Error:",err);
        res.json({success:false,message:err});
    }


}



//Controller to list all the foods

const listFood=async(req,res)=>{
     
    try{
        const allFoods=await foodModel.find({});
        res.json({success:true,data:allFoods});
    }
    catch(err){
        console.log("Error",err);
        res.json({success:false,message:err});
    }
}


module.exports={listFood,removeFood,addFood};