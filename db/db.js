import mongoose from "mongoose"
import { MONGO_DB_URL } from "../config/config.js"

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_DB_URL)
        console.log("Database Connected Successfully!")
    } catch (err) {
        console.log(`DB Connection Failed!: ${err.message}`)
        process.exit(1)
    }
}

export default connectDB;