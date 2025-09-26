import { useState } from "react"

const InstagramFollowCard = ({ name, userName, userNameTwitter, commonFollowers }) => {
  const followersText = commonFollowers === 0 ? 'Sugerencia para ti' : `${commonFollowers} personas en comun siguen esta cuenta`
  const [isFollowing, setIsFollowing] = useState(false)
  
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const followText = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'ig-followCard-button is-following' : 'ig-followCard-button'

  return (
    <article className='ig-followCard'>
      <header className='ig-followCard-header'>
        <img
          className='ig-followCard-avatar'
          src={`https://unavatar.io/x/${userNameTwitter}`} // Uso imagenes de Twitter porque unavatar no tiene de Instagram
          alt={`El avatar de ${name}`}
        />
        <div className='ig-followCard-info'>
          <strong className="ig-followCard-infoUserName">{userName}</strong>
          <span className="ig-followCard-infoCommonFollowers">{followersText}</span>
        </div>
      </header>
      <aside className="ig-followCard-aside">
        <button className={buttonClassName} onClick={handleClick}>{followText}</button>
      </aside>
    </article>
  )
}

export default InstagramFollowCard

