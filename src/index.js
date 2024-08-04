// require('dotenv').config({path: './env'})
import connectDb from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path:'./.env'// Here '.' caused you trouble NOOB.
})

connectDb()




/*
THIS IS THE FIRST APPROACH, TO WRITE DB CONNECTION CODE IN INDEX FILE ITSELF, (SEE /db/index.js)
import express from "express"
const app = express()

async function connectDb(){//easier syntax/effy code: (async ()=>{})()
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERRR", error)
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on ${process.env.PORT}`)
        })
    } catch (error) {
        console.error(`ERROR: ${error}`)//test
        throw error
    }
}

connectDb()*/