/*
    Express.js is a framerwork for Node.js.
    It makes us easy to build web servers and APIs using JavaScript.
    It ia very easy and clean to use. (Built-in routing, middleware and more)
*/

import express from "express"

const app = express()

app.get("/api", (req, res) => {
    res.send("Welcome to my Express.js Server.")
})

app.listen(4200, () => {
    console.log("Serve is running on the port 4200.")
})