import { Square } from './Square'

export const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null

  const winnerText = winner === false ? 'Draw' : 'Winner:'

  return (
    <section className='winner-modal'>
      <div className='winner-modal-content'>
        <h2>{winnerText}</h2>
        <header className='winner-modal-header'>
          {winner && <Square value={winner} />}
        </header>
        <footer>
          <button className='reset' onClick={resetGame}>Reset game</button>
        </footer>
      </div>
    </section>
  )
}
