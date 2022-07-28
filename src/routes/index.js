const { getUsers } = require('../controllers/userController')

const app = (module.exports = require('express')())

app.get('/api/v1/users', getUsers)
