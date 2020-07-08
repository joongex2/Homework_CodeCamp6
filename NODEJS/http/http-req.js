const http = require('http')
const server = http.createServer()

// req = http.incomingMessage
// res = serverResponse
server.on('request', (req, res) => {
    let {httpVersion, method, url} = req

    console.log(httpVersion)
    console.log(method)
    console.log(url)

    // console.log(req.headers.host)
    // console.log(req.httpVersion);
    // console.log(req.method); //important
    // console.log(req.url); //important
});

server.listen(8080)
