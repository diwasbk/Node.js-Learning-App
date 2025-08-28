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
    res.setHeader("Content-Type", "application/json")
    res.write(JSON.stringify(userData))
    res.end()
})

server.listen(4000)