const express = require('express')

const app = express()

require('dotenv').config()

app.get('/', (req, res) => {
  res.json({ msg: 'hello world' })
})

app.get('/healthcheck', (req, res) => {
  res.json({ status: 'healthy' })
})

module.exports = app
