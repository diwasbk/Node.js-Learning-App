import { homePage } from "./homePage.js";
import { aboutPage } from "./aboutPage.js";

import express from "express"

const app = express()

app.get("/api/home", (req, res)=>{
    res.send(homePage())
})

app.get("/api/about", (req, res)=>{
    res.send(aboutPage())
})

app.listen(4200, ()=>{
    console.log("Server is running on the port 4200.");
    
})