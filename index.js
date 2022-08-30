// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream('./static/index.html')
//     read.pipe(res)
// })

// server.listen(3000)
// console.log(`Server on port ${3000}`)

const express = require('express')

const app = express()

app.all('/info', (req, res) => {
    res.send('server info')
})

app.get('/search', (req, res) => {
    if (req.query.q === 'javascript books') {
        res.send('lista de libros de javascript')
    } else {
        res.send('pagina normal')
    }
}
)

app.get('/hello/:username', (req, res) => {
    console.log(typeof req.params.username)
    res.send(`hello ${req.params.usernametoUpperCase()}`)
})

app.get('/add/:x/:y', (req, res) => {
    console.log(req.params.x)
    console.log(req.params.y)

    const { x, y } = req.params

    // const result = parseInt(req.params.x) + parseInt(req.params.y)

    // const result = parseInt(x) + parseInt(y)

    // res.send(`result: ${req.params.x} + ${req.params.y}`)
    res.send(`la suma es ${parseInt(x) + parseInt(y)}`)
})

app.get('/users/:username/profile', (req, res) => {
    if (req.params.username === "alejandro") {
        return res.send('alejandro profile')
    }

    res.send('no se encontro el usuario')
})

app.listen(3000)

console.log(`Server on port ${3000}`)