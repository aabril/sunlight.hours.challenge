const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const controllers = require('./controllers')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/init', controllers.init)
app.get('/api/sunlight', controllers.sunlight)

module.exports = app