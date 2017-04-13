'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api.js')
const ui = require('./ui')
const game = require('../playGame')
const auth = require('../auth/ui.js')

const onNewGame = function (event) {
  if (!auth.isAnyoneLoggedIn(0)) {
    ui.newGameFailure()
    return
  }
  event.preventDefault()
  game.playGame()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const addHandlers = () => {
  $('#new-game').on('click', onNewGame)
}

module.exports = {
  addHandlers
}
