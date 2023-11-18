
import dotenv from 'dotenv';
import { app } from './app.js';
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
        app.on("error", () => {
            console.log("Error:", error);
            throw error
        })

    })
    .catch((err) => {
        console.log("MONGO DB CONNECTION FAIlED", err)
    })

