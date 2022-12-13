const http = require('http');
const fs = require('fs');
const url = require('url');

const ALL_USERS = fs.readFileSync(`${__dirname}/users.json`, 'utf-8');
const server = http.createServer((req, res) => {
    const pathName = req.url;
    try {
        if (pathName == "/" || pathName == "home") {
            res.writeHead(200, "Successfull home visit", {
                'Content-type': "text/html",
                "anotherAttribute": 500
            });
            res.end("<h3>Welcome to home page fella's</h3>")
        } else if (pathName == "/users") {
            res.writeHead(200, "User", {
                'Content-Type': "application/json",
                "anotherAttribute": 401
            });
            res.end(`${ALL_USERS}`);
        } else {
            res.writeHead(404, {
                'Content-type': "text/html",
                "anotherAttribute": 404
            });
            res.end(`<h3 style='color:red'>Page not found</h3>`)
        }
    } catch (error) {
        console.log("ERROR OCCURED", error)
    }

})

server.listen(5000, "127.0.0.1", () => {
    console.log("Server running")
})