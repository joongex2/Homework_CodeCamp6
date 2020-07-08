const express = require('express')
const router = express.Router()

router.get('/eat', (req, res) => {
    res.send('cat eat')
})

router.get('/sleep', (req, res) => {
    res.send('cat sleep')
})

module.exports = router