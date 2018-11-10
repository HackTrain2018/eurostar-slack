const express = require('express')
const app = express()

const {PORT} = require('./config')
const {router} = require('./router')

function logger() {
  console.log(`Example app listening on port ${PORT}!`)
}

app.use(router)
app.listen(PORT, logger)
