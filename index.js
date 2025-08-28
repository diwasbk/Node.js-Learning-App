/*  Node.js ia a runtime environment for JavaScript. 
    With Node.js, we can run JavaScript outside the browser.
*/

// Create a Server in Node.js
const http = require("http");

http.createServer((req, res) => {
    res.write("My first Server.")
    res.end()
}).listen(4000);