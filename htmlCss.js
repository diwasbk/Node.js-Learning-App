// Load HTML and CSS file in Node.js

const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("html/index.html", "utf-8", (error, data) => {
            if (error) {
                res.writeHead(500, { "Content-Type": "text/plain" })
                res.end("Internal Server Error!")
                return false
            } else {
                res.write(data)
                res.end()
            }
        })
    } else if (req.url === "/style.css") {
        fs.readFile("html/style.css", "utf-8", (error, data) => {
            if (error) {
                res.writeHead(500, { "Content-Type": "text/plain" })
                res.end("Internal Server Error!")
                return false
            } else {
                res.writeHead(200, {"Content-Type": "text/css"})
                res.end(data)
            }
        })
    }
})

server.listen(4200, () => {
    console.log("Ther server is running on the port 4200")
})