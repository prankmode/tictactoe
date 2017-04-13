'use strict'

const config = require('../config.js')
const store = require('../store.js')

const allMyGames = () => {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: data
    // can just say "data" (shorthand for "data: data")
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data: data
    // can just say "data" (shorthand for "data: data")
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
    // can just say "data" (shorthand for "data: data")
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  allMyGames
}
