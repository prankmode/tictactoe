'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: data
    // can just say "data" (shorthand for "data: data")
  })
}

const signIn = (data) => {
  console.log('in api/signIn')
  console.log('data is', data)
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
  console.log('inside api:changePassword. data is', data)
  console.log('store is ', store)
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
  changePassword
}
