const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const routes = require('./src/routes')

const PORT = process.env.PORT || 3000

let app = express()

app.use(cors())

const server = require('http').Server(app)

app.use(morgan('tiny'))
app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(routes)

server.listen(PORT, () => {
 console.log(`server running at port ${PORT}`)
})

module.exports = { app }
