import { useState } from 'react'
import './App.css'

import { Square } from './components/Square'
import { TURNS } from './utils/constants'
import { evaluateBoard } from './utils/board'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  // null = no hay ganador - false = empate
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    // No actualizar si ya hay algo en la posición
    if (board[index]) return

    // Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Chequear si hay un ganador
    const newWinner = evaluateBoard(newBoard)
    if (newWinner !== null) setWinner(newWinner)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((value, index) => {
            return (
              <Square
                key={index}
                value={value}
                index={index}
                updateBoard={updateBoard}
              />
            )
          })
        }
      </section>
      <section className='turn'>
        <Square value={TURNS.X} selected={turn === TURNS.X}></Square>
        <Square value={TURNS.O} selected={turn === TURNS.O}></Square>
      </section>
    </main>
  )
}

export default App
