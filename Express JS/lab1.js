const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Good bye');
})

app.listen(5555)