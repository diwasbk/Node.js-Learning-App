import express from "express"
import studentRouter from "./routes/studentRoute.js"
import dotenv from "dotenv"
import connectDB from "./db/db.js"

const app = express()
app.use(express.json())
dotenv.config()

app.use("/api/student", studentRouter)

const startServer = async () => {
    try {
        await connectDB()
        app.listen(4200, () => {
            console.log("Server is running at the port 4200.")
        })
    } catch (err) {
        console.log(`Failed to start server. ${err.message}`)
        process.exit(1)
    }
}

startServer();
