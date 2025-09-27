import express from "express"
import cookieParser from "cookie-parser"

const app = express()

app.use(cookieParser())

app.get("/set", (req, res) => {
    res.cookie("name", "diwasbk");
    res.send({
        message: "Cookie Done!",
        success: true
    })
})

app.get("/read", (req, res) => {
    console.log(req.cookies)
    res.send({
        message: req.cookies,
        success: true
    })
})

app.listen(4200, () => {
    console.log("Server is running at the port 4200.")
})