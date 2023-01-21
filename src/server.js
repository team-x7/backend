const mongoose = require('mongoose')

const PORT = process.env.PORT || 7000

const app = require('./app')

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! Shutting down...')
  console.log(err)
  process.exit(1)
})

mongoose.set('strictQuery', false)

console.log('hello world')
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connections successfull')
    const server = app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`)
    })

    process.on('unhandledRejection', (err) => {
      console.log('UNHANDLED REJECTION! Shutting down...')
      console.log(err)
      server.close(() => {
        process.exit(1)
      })
    })

    process.on('SIGTERM', () => {
      console.log('SIGTERM RECEIVED. Shutting down gracefully.')
      server.close(() => {
        console.log('Process terminated !')
      })
    })
  })
  .catch((err) => console.log(err))
