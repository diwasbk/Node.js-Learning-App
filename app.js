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
        res.status(201).send({
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

app.listen(4200, () => {
    console.log("Server is running at the port 4200.")
})