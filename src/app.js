const express = require('express')

const app = express()

require('dotenv').config()

app.get('/', (req, res) => {
  res.send('App is running')
})

app.get('/healthcheck', (req, res) => {
  res.json({ status: 'aba ta purai naya ho' })
})

module.exports = app
