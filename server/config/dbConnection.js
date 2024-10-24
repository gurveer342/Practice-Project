// mongoose module require maane package install krna pdega
import { constants } from '../constants.js'; // Ensure this path is correct
import mongoose from 'mongoose';
const connectDb=async()=>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Database Connected: ",connect.connection.name)
    }catch(error){
        console.log(error)
    }
}
export default connectDb;