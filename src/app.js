const express = require('express')

const app = express()

const AppError = require('./utils/AppError')
const globalErrorController = require('./controllers/globalErrorHandler')

const profileRoutes = require('./routes/profile.route')

require('dotenv').config()

// middleware
app.use(express.json())

// routes
app.use('/api/v1/profiles', profileRoutes)

app.get('/healthcheck', (req, res) => {
  res.json({ status: 'aba ta purai naya ho' })
})

app.all('/*', (req, res, next) => {
  next(new AppError(404, `Can't find ${req.originalUrl} on this API`))
})

// global error handler
app.use(globalErrorController)

module.exports = app
