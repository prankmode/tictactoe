'use strict'
const store = require('../store.js')
const gameUi = require('../gameUi/events.js')
const messages = require('../gameUi/messages.js')
const play = require('../playGame.js')

const signUpSuccess = (response) => {
  // if they sign up successfully, just log them in
  store.user = response.user
  gameUi.toggleSignUpButton()
  gameUi.toggleSignInButton()
  gameUi.toggleChangePasswordButton()
  gameUi.toggleStatsButton()
  gameUi.toggleSignOutButton()
}

const signUpFailure = (error) => {
  console.error(error)
  messages.sayThis('sign up failed - try again')
}

const signInSuccess = (response) => {
  // store the user object
  store.user = response.user
  gameUi.toggleSignInButton()
  gameUi.toggleSignUpButton()
  gameUi.toggleChangePasswordButton()
  gameUi.toggleStatsButton()
  gameUi.toggleSignOutButton()
  $('#new-game')[0].innerText = 'new game'
}

const signInFailure = (error) => {
  console.error(error)
  messages.sayThis('sign in failed - try again')
  store.user = null
}

const signOutFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (response) => {
  // clear store.user
  store.user = null
  gameUi.toggleSignUpButton()
  gameUi.toggleSignInButton()
  gameUi.toggleStatsButton()
  gameUi.toggleChangePasswordButton()
  gameUi.toggleSignOutButton()
}

const isAnyoneLoggedIn = () => {
  if (store.user) {
    return true
  } else {
    return false
  }
}

const statsSuccess = (data) => {
  console.table(data.games)
  const finished = data.games.filter(n => n.over === true).length
  let howManyWins = 0
  for (let i = 0; i < data.games.length; i++) {
    if (data.games[i].over) {
      if (play.checkForWin(data.games[i].cells, 'x')) {
        howManyWins++
      }
    }
  }
  $('#num-games-played')[0].innerText = `you played ${data.games.length} games`
  $('#num-games-won')[0].innerText = `you won ${howManyWins} of them`
}

const statsFailure = (error) => {
  console.error(error)
}

module.exports = {
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  isAnyoneLoggedIn,
  statsSuccess,
  statsFailure
}
