import { useState } from 'react'
import './App.css'

import { Square } from './components/Square'

const TURNS = {
  X: 'x',
  O: 'o'
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  


  const updateBoard = (index) => {
    if (board[index]) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

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
