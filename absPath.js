/*
    absPath (short for absoulate path). 
    It typically refers to an absoulate file path on our system - a path that starts from the root of the system, 
    not relative to out current directory.
*/

import express from "express";
import path from "path"

const app = express()

app.get("", (req, res) => {
    const absPath = path.resolve("html/index.html")
    console.log(absPath)
    res.sendFile(absPath)
})

app.listen(4200, () => {
    console.log("Server is running on the port 4200.")
})