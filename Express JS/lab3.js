const express = require('express')
const app = express()
const dog = require('./lab3_dog')
const cat = require('./lab3_cat')

app.use('/dog', dog)
app.use('/cat', cat)

app.listen(3000)