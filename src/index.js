// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream('./static/index.html')
//     read.pipe(res)
// })

// server.listen(3000)
// console.log(`Server on port ${3000}`)

const express = require('express')
const morgan = require('morgan')
const path = require('path')

const homeRoutes = require('./routes/home')
const userRoutes = require('./routes/users')

const app = express()


//settings
app.set('appName', 'Express Course')

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
router.use(homeRoutes)
router.use(userRoutes)


//routes
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.listen(3000)
console.log(`Server on port ${3000}`)