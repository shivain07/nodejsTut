const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Server created")
})

server.listen(5000,"127.0.0.1", () => {
    console.log("Server running")
})