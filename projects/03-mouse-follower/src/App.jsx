import { useEffect, useState } from 'react'

function App () {
  const [enable, setEnable] = useState(false)

  useEffect(() => {
    const handleMove = (event) => {
      const evento = event
      console.log(evento)
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

  return (
    <button onClick={() => setEnable(!enable)}>
      {enable ? 'Disable' : 'Enable'} Mouse Follow
    </button>
  )
}

export default App
