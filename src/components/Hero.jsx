import profilePhoto from '../assets/profile.jpeg'
import './Hero.css'

function Hero({ name, tagline }) {
  return (
    <div className="hero">
      <img src={profilePhoto} alt="Suhanee Gupta" className="hero-photo" />
      <div className="hero-text">
        <h1 className="hero-name">{name}</h1>
        <p className="hero-tagline">{tagline}</p>
      </div>
    </div>
  )
}

export default Hero