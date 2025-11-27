import express from "express"
import userModel from "./models/userModel.js"

const app = express()
app.use(express.json())

// Enroll user into company
app.post("/api/enroll", async (req, res) => {
    try {
        const user = await userModel.create({
            username: req.body.username,
            email: req.body.email,
            address: req.body.address
        })
        res.send({
            message: "Enrolled!",
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

app.listen(4200, () => {
    console.log("Server is running at the port 4200.")
})