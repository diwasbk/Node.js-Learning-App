import express from "express"
const app = express()

const ageCheck = (req, res, next) => {
    if (req.query.age >= 18) {
        next()
    } else {
        res.send("You cannot vote right now.")
    }
}

app.get("/vote", ageCheck, (req, res) => {
    res.send("You are eligible to vote.")
})

app.get("home", (req, res) => {
    res.send("Home Page")
})

app.listen(4000, () => {
    console.log("Server is running on the port 4000.")
})