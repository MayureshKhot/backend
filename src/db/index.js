import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from 'dotenv'

dotenv.config({
    path:"./env"
})


const connectDb = async ()=>{
    try {//by holding it in a database, you can see what response is returned and we can handle it.
        console.log(`${process.env.MONGODB_URL}`)
        console.log(`${DB_NAME}`)
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n Mongodb connected !! DB HOST: ${connectionInstance.connection.host}`);//try console.log(connectionInstance)
        
    } catch (error) {
        console.error("MongoError", error)
        process.exit(1)//works like throw, exits the code.
    }
}

export default connectDb