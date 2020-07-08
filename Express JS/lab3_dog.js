const express = require('express')
const router = express.Router()

router.get('/walk', (req, res) => {
    res.send('dog walk')
})

router.get('/play', (req, res) => {
    res.send('dog play')
})

module.exports = router