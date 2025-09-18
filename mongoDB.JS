// Import MongoClient from the mongodb package
import { MongoClient } from "mongodb";

// Define the database name
const dbName = "school"

// Define the MongoDB connection URL (local MongoDB server)
const url = "mongodb://127.0.0.1:27017"

// Create a new MongoClient instance
const client = new MongoClient(url);

// Function to connect to MongoDB and fetch data
const dbConnection = async () => {
    try {
        // Connect to the MongoDB server
        await client.connect()

        // Select the "school" database
        const db = client.db(dbName)

        // Select the "students" collection
        const collection = db.collection("students")

        // Fetch all documents from the "students" collection
        const result = await collection.find().toArray()

        // Print the results to the console
        console.log(result)
    } catch (err) {
        // Print any errors that occur
        console.log(err)
    }
}

// Execute the dbConnection function
dbConnection()
