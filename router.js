const express = require('express')
const router = express.Router()

const {reportProblem, resolveProblem} = require('./slack')

router.get('/', (req, res) => {
  resolveProblem(4000, 10, 33, 'Bobby Tables', 'Temperature is too low!')

  res
  .status(204)
  .send(null)
})

router.post('/', (req, res) => {
  reportProblem(4000, 10, 33, 'Bobby Tables', 'Temperature is too low!')

  res
  .status(204)
  .send(null)
})

module.exports = {router}
