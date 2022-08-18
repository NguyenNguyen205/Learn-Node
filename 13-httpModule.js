const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write('Welcome to our home page');
    }
    else if (req.url === "/about") {
        res.write('Hello world');
    }
    else {
        res.write(`<h1>404 not found</h1> <a href="/"> Home </a>`);
    }
    res.end();
})

server.listen(5000)
