'use strict'

const store = require('../store.js')
const messages = require('../gameUi/messages.js')

const newGameSuccess = (response) => {
  store.game = response.game
  messages.sayThis('hey player x - it\'s your turn')
}

const newGameFailure = (response) => {
  if (!store.user) {
    messages.sayThis('sign in first!')
  } else {
    messages.sayThis('uh oh')
  }
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
