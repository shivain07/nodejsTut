const http = require('http');
const fs = require('fs');
const url = require('url');

const ALL_USERS = fs.readFileSync(`${__dirname}/users.json`, 'utf-8');
const server = http.createServer((req, res) => {
    const pathName = req.url;
    const URL = req.url;
    const parsedURl = url.parse(req.url, true);
    console.log(parsedURl)
    try {
        if (pathName == "/" || pathName == "home") {
            res.writeHead(200, "Successfull home visit", {
                'Content-type': "text/html",
                "anotherAttribute": 500,
                'Access-Control-Allow-Origin': '*'
            });
            res.end("<h3>Welcome to home page fella's</h3>")
        } else if (pathName == "/api/users") {
            res.writeHead(200, "User", {
                'Content-Type': "application/json",
                'Access-Control-Allow-Origin': '*'
            });
            res.end(`${ALL_USERS}`);
        } else if (pathName == "/api/") {

        }

        else {
            res.writeHead(404, {
                'Content-type': "text/html",
                "anotherAttribute": 404,
                'Access-Control-Allow-Origin': '*'
            });
            res.end("Page not found")
        }
    } catch (error) {
        console.log("ERROR OCCURED", error)
    }

})

server.listen(8000, "127.0.0.1", () => {
    console.log("Server running")
})