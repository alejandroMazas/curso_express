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

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/myUser', (req, res) => {
    res.json({
        "name": "alejandro",
        "lastname": "mazas de lizana",
        "age": "29",
        "points": [1, 2, 3],
        "addres": {
            city: "Madrid",
            street: "San Modesto"
        }
    })
})

app.listen(3000)

console.log(`Server on port ${3000}`)