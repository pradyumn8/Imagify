import mongoose from "mongoose";

const connectDB = async(req,res)=>{

    mongoose.connection.on('connected',()=>{
        console.log('Database Connected')
    })

    await mongoose.connect(`${process.env.MONGO_URI}/imagify`)
}

export default connectDB