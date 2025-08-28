// HTML code in Server

const http = require("http")

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.write(
        `
        <h1>Welcome to diwascodes</h1>
        <p>learn coding with diwas</p>
        `
    )
    res.end();
})
server.listen(4000);