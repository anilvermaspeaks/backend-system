import mongoose from "mongoose";
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        console.log(`${process.env.MONGODB_URI}/${DB_NAME}`)
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDb connected !! DB Host: ${connectionInstance.connection.host}`)

    } catch (err) {
        console.log(`MongoDB Connection Failed, ${err}`);
        process.exit(1)
    }

}

export default connectDB;