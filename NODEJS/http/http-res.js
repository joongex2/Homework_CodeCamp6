const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html',
        'Codecamp': 'five'
    })
    res.write('This is response message...\n')
    res.write('from your local server')
    res.end('<H2> Good bye </H2>');
}).listen(8080, () => {
    console.log('Server start...');
});