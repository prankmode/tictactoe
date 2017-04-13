'use strict'

const sayThis = function (sayWhat) {
  $('#new-game')[0].innerText = sayWhat
}

module.exports = {
  sayThis
}
