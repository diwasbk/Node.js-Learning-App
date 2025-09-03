import express from "express";
const app = express();

// Routes first
app.get("/home", (req, res) => {
    res.send("Home Page");
});

app.get("/users", (req, res) => {
    res.send("Users Page");
});

// Error handling middleware should be at the end
const errorHandlingMiddleware = (err, req, res, next) => {
    res.status(err.status || 500).send("Server Error!\nTry Again");
};

app.use(errorHandlingMiddleware);

app.listen(4000, () => {
    console.log("Server is running on port 4000.");
});