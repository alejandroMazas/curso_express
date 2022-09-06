const { Router } = require('express')

const router = Router()

app.all('/about', (req, res) => {
    res.send('about page')
})

app.get('/dashboard', (req, res) => {
    res.send('dasboard page')
})

module.exports = router