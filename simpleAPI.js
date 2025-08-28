const userData = [
    {
        name: "Diwas",
        age: 20,
        gender: "male"
    },
    {
        name: "Siri",
        age: 22,
        gender: "female"
    }
]

const http = require("http")

const server = http.createServer((req, res) => {
    // Add CORS header to allow requests from any origin
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Content-Type", "application/json")
    res.write(JSON.stringify(userData))
    res.end()
})

server.listen(4000)