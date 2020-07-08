const express = require('express')
const app = express()
const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./sample.json'))
let users = data.users
let listCounter = 0

app.use('/list', (req, res, next) => {
    listCounter++
    console.log('Request to /list number : ' + listCounter)
    next()
})

app.get('/list', (req, res) => {
    res.send(users)
})

app.get('/listname', (req, res) => {
    let outHTML = "<ol>"
    users.forEach(x => {
        outHTML += `<li>${x.firstName} ${x.lastName} <b>${x.emailAddress}</b></li>`
    })
    outHTML += "</ol>"
    res.send(outHTML)
})

app.get('/users/:id', (req, res) => {
    res.send(users[parseInt(req.params.id) - 1])
})

app.get('/username/:uname', (req, res) => {
    res.send(users.find(x => (
        x.firstName === req.params.uname
    )))
})

app.get('/search', (req, res) => {
    res.send(users.find(x => (
        x.firstName === req.query.uname
    )))
})

app.listen(3000)