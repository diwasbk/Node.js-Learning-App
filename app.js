import express from "express"
import userModel from "./models/userModel.js"

const app = express()
app.use(express.json())

// Enroll user into company
app.post("/api/user/enroll", async (req, res) => {
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

// Update User by email
app.put("/api/user/update/:email", async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.params.email })
        if (!user) {
            return res.status(404).send({
                message: "User not found",
                success: false
            })
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