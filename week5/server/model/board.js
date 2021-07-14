const mongoose = require('mongoose')

const Board = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, default: '' }
}, { versionKey: false })

Board.statics.findAll = _ => {
  return this.find({})
}

Board.statics.create = function (payload) {
  const board = new this(payload)
  return board.save()
}

module.exports = mongoose.model('Board', Board)
