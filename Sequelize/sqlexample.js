const express = require('express')
const mysql = require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'sys'
})
db.connect()
const app = express()

app.get('/users', (req, res) => {
    let sql = 'select * from sailers'
    let query = db.query(sql, (err, result) => {
        console.log(err)
        if (err) throw err
        console.log(result)
        res.json(result)
    })
})
app.listen('3000', () => {
    console.log('start server!')
})