import express from "express"

const app = express()

// Log Print Middleware
const logPrintMiddleware = (req, res, next) => {
    console.log(`Date: ${new Date()} | Request Made Through: ${req.url}`)
    next()
}

app.use(logPrintMiddleware)

app.get("/", (req, res) => {
    res.send({
        message: "Done",
        success: true
    })
})

app.get("/home", (req, res) => {
    res.send("Home Page")
})

app.listen(4200, () => {
    console.log("Server is running at the port 4200.")
})
