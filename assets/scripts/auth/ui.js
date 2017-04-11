'use strict'
const store = require('../store.js')

const signUpSuccess = (response) => {
  console.log(response)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (response) => {
  console.log(response)
  // store the user object somehow
  console.log('in signInSuccess1: store is ', store)
  store.user = response.user
  console.log('in signInSuccess2: store is ', store)
}

const signInFailure = (error) => {
  console.error(error)
}

const signOutFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (response) => {
  console.error(response)
  // clear store.user
  store.user = null
}

module.exports = {
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
