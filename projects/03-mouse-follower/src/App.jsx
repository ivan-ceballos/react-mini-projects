import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [enable, setEnable] = useState(false)
  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2
  const [position, setPosition] = useState({ x: centerX, y: centerY })

  useEffect(() => {
    const handleMove = (event) => {
      const newEvent = event
      setPosition({ x: newEvent.clientX, y: newEvent.clientY })
    }

    if (enable) {
      window.addEventListener('pointermove', handleMove)
      console.log('effect', enable)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
      console.log('cleanup', enable)
    }
  }, [enable])

  useEffect(() => {
    if (enable) {
      document.body.classList.add('no-cursor')
    } else {
      document.body.classList.remove('no-cursor')
    }
  }, [enable])

  return (
    <main>
      <div
        className='follower'
        style={{ left: position.x, top: position.y }}
      />
      <button
        onClick={() => setEnable(!enable)}
        className='toggle-button'
      >
        {enable ? 'Disable' : 'Enable'} Mouse Follow
      </button>
    </main>
  )
}

export default App
