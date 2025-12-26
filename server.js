import express from "express"
import studentRouter from "./routes/studentRoute.js"

const app = express()
app.use(express.json())

app.use("/api/student", studentRouter)

app.listen(4200, () => {
    console.log("Server is running at the port 4200.")
})