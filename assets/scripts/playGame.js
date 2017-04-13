'use strict'

const gameAPI = require('./game/api.js')
const messages = require('./gameUi/messages.js')

let boxes = null
const gameState = {
  moves: 0,
  turn: 1,
  turnLetter: ['o', 'x'],
  board: [],
  init: function () {
    this.moves = 0
    this.turn = 1
    this.board = [-1, -1, -1, -1, -1, -1, -1, -1, -1]
  },
  updateBoard: function (pos) {
    // the value we put in depends on whose turn it is
    this.board[pos] = this.turn ? 1 : 0
  },
  moveOver: function () {
    this.moves++
    this.turn = this.turn ? 0 : 1
  },
  checkForWinner: function () {
    // if the number of moves is less than 5, then no one can have 3 in a row
    if (this.moves < 4) {
      return false
    }

    if (checkForWin(this.board, this.turn)) {
      return true
    } else {
      return false
    }
  } // checkForWinner
}

const onClick = function (event) {
  // okay, we clicked in a square.  which square? it's in the event
  const pos = $(this).attr('pos')

  // update the board data
  gameState.updateBoard(parseInt(pos))
  const val = gameState.turn ? 'x' : 'o'

  // udpate the square with x or o
  boxes[pos].innerText = val
  // removed the eventListener so user cannot click in the box anymore
  boxes[pos].removeEventListener('click', onClick)

  const gameOver = gameState.checkForWinner()
  if (gameOver) {
    // winner!
    messages.sayThis('winner winner chicken dinner')
    // remove ALL the listeners
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].removeEventListener('click', onClick)
    }
  } else {
    // no winner
    gameState.moveOver()
    messages.sayThis(`hey ${gameState.turnLetter[gameState.turn]} - it's your turn!`)
  }
  gameAPI.updateGame(pos, val, gameOver)
} // onClick

const playGame = function (data) {
  // initialize the board and our variables
  gameState.init()

  // get all the squares in the board
  boxes = $('.square')
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerText = 'T'
  }

  // ready to play?  set up the click handlers
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', onClick)
  }
} // playGame

const checkForWin = function (board, who) {
  function checkRow (idx) {
    return (b[idx + 1] && b[idx + 2])
  }

  function checkCol (idx) {
    return (b[idx + 3] && b[idx + 6])
  }

  // let's get the array in a standard state with map!
  const b = board.map(n => n === who)

  // just looking for trues in the board now.
  // check the rows
  for (let i = 0; i < 7; i += 3) {
    if (b[i]) {
      if (checkRow(i)) {
        return true
      }
    }
  } // rows

  // check the columns
  for (let i = 0; i < 3; i++) {
    if (b[i]) {
      if (checkCol(i)) {
        return true
      }
    }
  }

  // check diags
  if (!b[4]) {   // if you don't own the middle square...
    return false
  } else {
    if ((b[0] && b[8]) || (b[2] && b[6])) {
      return true
    }
  }
} // checkForWin

module.exports = {
  playGame,
  checkForWin
}
