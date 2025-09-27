import { useState } from 'react'
import './App.css'

import { Square } from './components/Square'
import { TURNS, WINNING_COMBOS } from './utils/constants'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  
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
                selected={board[index] != null}
              />
            )
          })
        }
      </section>
    </main>
  )
}

export default App
