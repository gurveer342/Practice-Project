//mongoose module require maane package install karna padega

import mongoose from "mongoose";

export const connectDb=async()=>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Connected to mongo")
    }catch(error){
        console.log(error)
    }
}