const userModel = require("../models/userModel");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const validator=require("validator");


//Function to generate the token 
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}

//Controller for the Login
const login=async(req,res)=>{
  
    const {email,password}=req.body;
        
    try{
        const user=await userModel.findOne({email});
        
        //If user has not signed with the e ntered email!
        if(!user) return res.json({success:false,message:"User doesn't exist!"});

        //If password doesn't match 
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch) return res.json({success:false,message:"Invalid Credentials!"});

        const token=generateToken(user._id);
        const username=user.name;
        const userId=user._id;
        res.json({success:true,token,username,userId});

    }
    catch(err){
        console.log("Eroor:",err);
        res.json({success:false,message:err});
    }

}



//Controller for the register
const register=async(req,res)=>{
     const {name,email,password}=req.body;

     const existingUser=await userModel.findOne({email});

     //User already exists with same email 
     if(existingUser) return res.json({success:false,message:"User Already Exists!"});

     //validating email and strong password
     if(!validator.isEmail(email)) return res.json({success:false,message:"Invalid Email Format!"});
     if(password.length<6) return res.json({success:false,message:"Password must be length of 6!"});

     //Hashing the password using salt
     const salt=await bcrypt.genSalt(10);
     const hashedPassword=await bcrypt.hash(password,salt);


     //Creating new User to store in the UserModel Database
     const newUser=new userModel({
        name:name,
        email:email,
        password:hashedPassword
     });

     await newUser.save();
     const token=generateToken(newUser._id);
     return res.json({success:true,token});
     
}



module.exports={login,register};