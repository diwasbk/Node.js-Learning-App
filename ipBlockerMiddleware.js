import express from "express"
const app = express()

const ipCheck = (req, res, next) => {
    const ip = req.socket.remoteAddress
    console.log(ip)
    if (ip.includes("any-ip-address-here")) {
        res.send("Alert! You cannot access this page.")
    } else {
        next()
    }
}

app.get("/home", ipCheck, (req, res) => {
    res.send("Home Page")
})

app.listen(4000, () => {
    console.log("Server is running on the port 4000.")
})