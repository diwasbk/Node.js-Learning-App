// Import express framework
import express from "express"
const app = express();

// Import MongoClient from mongodb package
import { MongoClient } from "mongodb";

// MongoDB connection URL (local MongoDB server)
const url = "mongodb://127.0.0.1:27017"

// Create a new MongoClient instance
const client = new MongoClient(url);

// Middleware to parse incoming JSON requests
app.use(express.json())

// Connect to MongoDB
client.connect().then((connection) => {
    // Select the "school" database
    const db = connection.db("school")

    // Select the "students" collection
    const collection = db.collection("students")

    // Define GET API endpoint to fetch all students
    app.get("/api/students", async (req, res) => {
        // Fetch all documents from the "students" collection
        const result = await collection.find().toArray()

        // Send response back to client
        res.send({
            message: "Students Fetched Successfully!",
            result: result,
            success: true
        })
    })
})

// Start the server on port 4200
app.listen(4200, () => {
    console.log("Server is running on the port 4200")
})
