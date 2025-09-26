import './App.css'
import InstagramFollowCard from './InstagramFollowCard.jsx'

const users = [
  {
    name: 'San Lorenzo',
    userName: 'sanlorenzo',
    userNameTwitter: 'sanLorenzo',
    commonFollowers: 40
  },
  {
    name: 'River Plate',
    userName: 'riverplate',
    userNameTwitter: 'RiverPlate',
    commonFollowers: 20
  },
  {
    name: 'Boca Juniors',
    userName: 'bocajrs',
    userNameTwitter: 'BocaJrsOficial',
    commonFollowers: 10
  },
  {
    name: 'Independiente',
    userName: 'caindependiente',
    userNameTwitter: 'Independiente',
    commonFollowers: 2
  },
  {
    name: 'Racing Club',
    userName: 'racingclub',
    userNameTwitter: 'RacingClub',
    commonFollowers: 0
  }
]

function App() {
  return (
    <section className='App'>
      <header className="App-header">
        <strong className='App-headerTitle'>Sugerencias para ti</strong>
        <aside className='App-headerAside'>Ver todo</aside>
      </header>
      {users.map(({ name, userName, userNameTwitter, commonFollowers }) => (
        <InstagramFollowCard
          key={userName}
          name={name}
          userName={userName}
          userNameTwitter={userNameTwitter}
          commonFollowers={commonFollowers}
        />
      ))}
    </section>
  )
}

export default App
