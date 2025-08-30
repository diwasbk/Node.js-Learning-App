import express from "express"

const app = express()

app.get("/test", (req, res) => {
    // Check if "name" query parameter is missing (e.g., /test?name=Diwas)
    if (!req.query.name) {
        // If "name" is not provided, immediately send response and
        // stop further code execution inside this route
        return res.send("Name is required!");
    }
    // If "name" was provided, this line runs and sends back a greeting
    res.send(`Hello, ${req.query.name}`);
});

app.listen(4000, () => {
    console.log("Server is running on the port 4000");
});
