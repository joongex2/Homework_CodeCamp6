const http = require('http')
// const server = http.createServer()

// server.on('request', (req, res) => {
//     console.log('request coming..')
//     res.writeHead(200, {'Content-type': 'text/html'})
//     res.write('Hello, world')
//     res.end()
// });

function app(req, res) {
    console.log('request coming..')
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write('Hello, world')
    res.end()
}

http.createServer(app).listen(8080);
