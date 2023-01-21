const express = require('express')

const app = express()

require('dotenv').config()

app.get('/', (req, res) => {
  res.json({ msg: 'hello world' })
})

app.get('/healthcheck', (req, res) => {
  res.json({ status: 'aba ta purai naya message' })
})

module.exports = app
