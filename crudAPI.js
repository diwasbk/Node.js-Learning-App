// Import express framework
import express from "express"
const app = express();

// Import MongoClient from mongodb package
import { MongoClient, ObjectId } from "mongodb";

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

    // GET Students by ID
    app.get("/api/students/:id", async (req, res) => {
        const result = await collection.findOne({ _id: new ObjectId(req.params.id) })
        if (!result) {
            return res.send({
                message: "Student Not Found",
                success: false
            })
        }
        res.send({
            message: `Welcome! ${result.name}`,
            result: result,
            success: true
        })
    })

    // POST API to Enroll New Student
    app.post("/api/students/enroll", async (req, res) => {
        const result = await collection.insertOne(req.body)
        res.send({
            message: "New Student Enrolled",
            result: result,
            success: true
        })
    })

    // PUT API to Update Student Details
    app.put("/api/students/update/:id", async (req, res) => {
        const result = await collection.updateMany(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        )
        res.send({
            message: "Student Details Updated Successfully",
            result: result,
            success: true
        })
    })
})

// Start the server on port 4200
app.listen(4200, () => {
    console.log("Server is running on the port 4200")
})
