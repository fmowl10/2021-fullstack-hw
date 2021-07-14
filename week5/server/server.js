const express = require('express')
const http = require('http')
const mongoose = require('mongoose')

const connectionOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}

mongoose.connect(
  'mongodb://localhost:27017/?readPreference=primary&ssl=false',
  connectionOption,
  _ => {
    console.log('DB connected')
  }
)

mongoose.connection.on('error', _ => {
  console.log('db error')
  process.exit(1)
})

const app = express()

app.use(express.json())
app.use('/board', require('./router/board'))

const port = process.env.PORT || 80
const server = http.createServer(app)

server.listen(port, _ => {
  console.log("application's port is " + port)
})
