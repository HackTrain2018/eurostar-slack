const express = require('express')
const router = express.Router()

const {reportProblem, resolveProblem} = require('./slack')

const issue = {
  train: 4000,
  carriage: 10,
  seat: 33,
  manager: 'Tina West',
  issue: 'Temperature is too low!'
}

router.get('/', (req, res) => {
  resolveProblem(issue)

  res
  .status(200)
  .send("OK")
})

router.post('/', (req, res) => {
  reportProblem(issue)

  res
  .status(200)
  .send("OK")
})

module.exports = {router}
