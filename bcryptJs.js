import express from "express"
import bcrypt, { hash } from "bcrypt"

const app = express()

// Encryption (to hash a password)
app.get("/enc", (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash("password123", salt, (err, hash) => {
            console.log(hash)
            res.send({
                message: "Hashed!",
                success: true
            })
        })
    })
})

// Decryption (to compare password)
app.get("/dec", (req, res) => {
    bcrypt.compare("password123", "$2b$10$PbF9cnxz56os5SMFLhlNL.1.8aBNLsTfmU3kTcqQv0g4LKYikCmx6", (err, result) => {
        console.log(result)
        if (result) {
            res.send({
                message: "Password Matched!",
                success: result
            })
        } else {
            res.send({
                message: "Wrong Password!",
                success: false
            })
        }
    })
})

app.listen(4200, () => {
    console.log("Server is running at the port 4200.")
})