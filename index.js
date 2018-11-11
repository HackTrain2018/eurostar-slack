const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const {PORT} = require('./config')
const {router} = require('./router')

function logger() {
  console.log(`Listening on port ${PORT}!`)
}

app.use(bodyParser.json())
app.use(router)
app.listen(PORT, logger)
