const router = require('express').Router()
const Board = require('../model/board')

router.post('/', async (req, res) => {
  try {
    await Board.create(req.body)
    res.send(JSON.stringify({ msg: 'success' }))
  } catch (err) {
    res.send(JSON.stringify({ msg: 'error' }))
  }
})

module.exports = router
