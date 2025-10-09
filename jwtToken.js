import express from "express"
import cookieParser from "cookie-parser"
import jwt from "jsonwebtoken"

const app = express()
app.use(cookieParser())

app.get("/token", (req, res) => {
    const token = jwt.sign({ email: "diwasbk@gmail.com", userID: "230185" }, "my-secret", { expiresIn: 30 })
    res.cookie("token", token)
    res.send({
        token: token
    })
})

app.get("/cookies", (req, res) => {
    console.log(req.cookies)
    res.send({
        token: req.cookies.token,
        message: "done",
        success: true
    })
})

app.get("/verify", (req, res) => {
    const data = jwt.verify(req.cookies.token, "my-secret")
    console.log(data)
    res.send({
        tokenDetails: data,
        success: true
    })
})

app.listen(4200, () => {
    console.log("Server is running at the port 4200.")
})