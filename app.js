import express from "express"
import multer from "multer"
import userModel from "./models/userModel.js"
import schemaValidateMiddleware from "./middlewares/schemaValidateMiddleware.js"
import enrollSchema from "./validators/schemaValidator.js"

const app = express()
app.use(express.json())
app.use("/uploads", express.static("uploads")) // This makes all files in the uploads folder publicly accessible

// Multer storage configuration
// This defines how and where the uploaded files will be stored
const storage = multer.diskStorage({
    // Set destination folder for uploaded files
    destination: function (req, file, cb) {
        cb(null, "uploads") // Save files in the "uploads" folder
    },
    // Set the filename for uploaded files
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname)
    }
})
// Initialize multer with the disk storage configuration
const upload = multer({ storage: storage })

// Enroll user into company
// "myfile" is the name of the form field used in the request
app.post("/api/user/enroll", upload.single("myfile"), schemaValidateMiddleware(enrollSchema), async (req, res) => {
    try {
        const user = await userModel.create({
            username: req.body.username,
            email: req.body.email,
            address: req.body.address,
            image: req.file.path.replace(/\\/g, "/")
        })
        res.status(201).send({
            message: "Enrolled!",
            result: user,
            success: true
        })
    } catch (err) {
        res.send({
            message: err.message ?? "Unknown Error",
            success: false
        })
    }
})

// Get User by email
app.get("/api/user/:email", async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.params.email })
        if (!user) {
            return res.status(404).send({
                message: "User Not Found",
                success: false
            })
        }
        res.status(200).send({
            message: `Welcome ${user.username}`,
            result: user,
            success: false
        })
    } catch (err) {
        res.send({
            message: err.message ?? "Unknown Error",
            success: false
        })
    }
})

// Update User by email
app.put("/api/user/update/:email", upload.single("myfile"), schemaValidateMiddleware(enrollSchema.partial()), async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.params.email })
        if (!user) {
            return res.status(404).send({
                message: "User not found",
                success: false
            })
        }
        // If a file is uploaded, add its path to req.body
        if (req.file) {
            // Save relative path or URL to your DB
            req.body.image = req.file.path.replace(/\\/g, "/"); // for Windows path fix
        }
        await userModel.findOneAndUpdate(
            { email: req.params.email },
            { $set: req.body },
            { new: true }
        )
        res.status(201).send({
            message: "User Updated!",
            success: true
        })
    } catch (err) {
        res.send({
            message: err.message ?? "Unknown Error",
            success: false
        })
    }
})

// Delete User by email
app.delete("/api/user/delete/:email", async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.params.email })
        if (!user) {
            return res.status(404).send({
                message: "User not found",
                success: false
            })
        }
        await userModel.findOneAndDelete({ email: req.params.email })
        res.status(200).send({
            message: `User Account of ${user.username} has been deleted successfully!`,
            success: true
        })
    } catch (err) {
        res.send({
            message: err.message ?? "Unknown Error",
            success: false
        })
    }
})

app.listen(4200, () => {
    console.log("Server is running at the port 4200.")
})