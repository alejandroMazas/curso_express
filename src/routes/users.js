const express = require('express')

const router = express.Router()

app.get('/username', (req, res) => {
    res.send('username route')
})

app.get('/profile', (req, res) => {
    console.log('req.body')
    res.send('profile page')
})

module.exports = router

