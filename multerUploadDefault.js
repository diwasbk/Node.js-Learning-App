import express from "express"
import multer from "multer"

const app = express()

// Configure multer to store uploaded files in the "uploads/" folder
const upload = multer({ dest: "uploads/" });

// API route to upload a single file
// "myfile" is the field name in the form-data request
app.post("/api/upload", upload.single("myfile"), (req, res) => {
    // Send response after successful file upload
    res.send({
        message: "File Uploaded Successfully!",
        success: true
    })
})

// Start the Express server on port 4200
app.listen(4200, ()=>{
    console.log("Server is running in the port 4200.")
})