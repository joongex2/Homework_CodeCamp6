const express = require('express')
const formBody = require('body/form')

const app = express()
const array = []
const form = `<form action="/post" method="post">
        <input style="margin-bottom: 5px" name='fname'></input><br>
        <input style="margin-bottom: 5px" name='lname'></input><br>
        <button>Submit</button>
    </form>`

app.get('/', (req, res) => {
    res.send(form)
})

// post
app.post('/post', (req, res) => {
    formBody(req, res, (err, body) => {
        array.push({
            fname: body.fname,
            lname: body.lname
        })
        res.writeHead(200)
        for (const item of array) {
            res.write(`<p>${item.fname} ${item.lname}</p>`)
        }
        res.write(form)
        res.end()
    })
});

// put
app.put('/put', (req, res) => {
    res.send('put request')
});

// delete
app.delete('/delete', (req, res) => {
    res.send('delete request')
});

// default
// app.get('/', (req, res) => {
//     res.send('Hello world this is get method')
// })

app.listen(5555)
