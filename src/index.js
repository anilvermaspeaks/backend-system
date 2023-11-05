
import dotenv from 'dotenv';
import express from "express"
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})

connectDB();

const app = express()


app.on("error", () => {
    console.log("Error:", error);
    throw error
})

app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`)
})