const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./sample.json'))
users = data.users

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/pub', express.static('./public'))
app.get('/', (req, res) => {
    res.redirect('/pub/form1.html')
})

app.post('/dosearch', (req, res) => {
    console.log(req.body)
    res.send(users.filter(x => x.firstName.includes(req.query.firstname)))
})

app.listen(3000, () => console.log('Server Start...'))