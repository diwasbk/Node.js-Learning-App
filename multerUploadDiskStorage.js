import express from "express"
import multer from "multer"

const app = express()

// Multer Storage Configuration
// This defines how and where the uploaded files will be stored
const storage = multer.diskStorage({
    // Set the destination folder for uploaded files
    destination: function (req, file, cb) {
        cb(null, "uploads"); // Save files in the "uploads" folder
    },
    // Set the filename for uploaded files
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Keep the original filename of the uploaded file
    }
})

// Initialize multer with the disk storage configuration
const upload = multer({ storage: storage });

// POST API endpoint to handle single file upload
// "myfile" is the name of the form field used in the request
app.post("/api/upload", upload.single("myfile"), (req, res) => {
    // Send a response back to the client after successful upload
    res.send({
        message: "File Uploaded Successfully!",
        success: true
    })
})

// Start the Express server on port 4200
app.listen(4200, (req, res) => {
    console.log("Server is running in the port 4200.")
})
