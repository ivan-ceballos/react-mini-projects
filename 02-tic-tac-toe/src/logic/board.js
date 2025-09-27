import { WINNING_COMBOS } from "../utils/constants.js"

export const checkWinner = (boardToCheck) => {
  for (const combo of WINNING_COMBOS) {
    const [a, b, c] = combo
    if (boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]) {
      return boardToCheck[a]
    }
  }
  return null
}

export const evaluateBoard = (board) => {
    const winner = checkWinner(board)
    if (winner) return winner
    if (!board.includes(null)) return false
    return null
}