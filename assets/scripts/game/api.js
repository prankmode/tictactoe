'use strict'

const config = require('../config.js')
const store = require('../store.js')

const newGame = () => {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = (pos, val, gameOver) => {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: pos,
          value: val
        },
        over: gameOver
      }
    }
  })
}

module.exports = {
  newGame,
  updateGame
}
