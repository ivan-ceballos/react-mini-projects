import confetti from 'canvas-confetti'

export const shootConfetti = (winnerSymbol) => {
  const shape = confetti.shapeFromText(winnerSymbol)

  confetti({
    particleCount: 70,
    spread: 35,
    gravity: 0.8,
    decay: 0.93,
    origin: { y: 0.9 },
    shapes: [shape]
  })

  confetti({
    particleCount: 70,
    spread: 65,
    gravity: 0.6,
    decay: 0.94,
    origin: { y: 0.95 },
    shapes: [shape]
  })
}
