const asyncHandler=require("express-async-handler")
const bcrypt=require("bcrypt")
const User=require("../model/userModel")
require("dotenv").config()

const registerUser=asyncHandler(async(req,res)=>{
    const {firstname,lastname, gender, age, bloodgroup,email,password,phoneNumber}=req.body

    if(!firstname ||!lastname||!age||!bloodgroup||!gender || !email || !password || !phoneNumber){
        res.status(400);
        throw new Error("Please provide all fields")
    }

    //check if user already exists
    const userExists=await User.findOne({email});
    if(userExists){
        return res.status(400).json({message:"User already exists"});
    }

    //Hash the password
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt);

    const user=await User.create({
        email,
        firstname,
        lastname,
        age,
        bloodgroup,
        gender,
        phoneNumber,
        password:hashedPassword,
    })

    res.status(201).json({message:"User registered successfully",user})
})