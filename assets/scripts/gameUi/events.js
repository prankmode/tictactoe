'use strict'

const store = require('../store.js')

const toggleSignUpButton = function () {
  $('#sign-up-button').toggleClass('hidden')
}

const toggleSignInButton = function () {
  $('#sign-in-button').toggleClass('hidden')
}
const toggleSignOutButton = function () {
  $('#sign-out-button').toggleClass('hidden')
}

const toggleChangePasswordButton = function () {
  $('#change-password-button').toggleClass('hidden')
}

const toggleStatsButton = function () {
  $('#stats-button').toggleClass('hidden')
}

const addHandlers = () => {
}

module.exports = {
  addHandlers,
  toggleSignInButton,
  toggleSignUpButton,
  toggleSignOutButton,
  toggleChangePasswordButton,
  toggleStatsButton
}
