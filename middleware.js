/*  Middleware in Express.js is a function that runs between receiving a request and sending a response.
    It can:  
    1. Modify the request or reponse
    2. End the request-response cycle
    3. Call the next phase middleware

    Example:
        When you try to access your bank account dashboard in the app, middleware first checks if you're logged in(automatically).
        If you're not, it blocks access and ask you to login. If you're logged in and try to open a sensitive route like "admin/dashboard", another middleware checks your user role(authorization).
        Since, you are not a bank staff, it blocks you from accessing that page. 
        The way middleware protects both you & bank system.
*/
import express from "express"
const app = express();

const checkRoute = (req, res, next) => {
    console.log(req.url)
    next()
}

app.use(checkRoute)

app.get("/", (req, res) => {
    res.send("Home Page")
})

app.get("/users", (req, res) => {
    res.send("Users Page")
})

app.listen(4000, () => {
    console.log("Server is running in the port 4000.")
})