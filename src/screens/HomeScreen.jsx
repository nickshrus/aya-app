import Orb from '../components/Orb/Orb'
import './HomeScreen.css'

function HomeScreen({ onNavigate }) {
  return (
    <div className="home-screen">
      <div className="grain-overlay" aria-hidden="true" />

      <div className="home-screen__content home-screen__content--home">
        <h1 className="home-screen__title home-screen__title--home">
          Hello, Victoria
        </h1>

        <div className="orb-wrapper home-orb-wrapper">
          <Orb />
        </div>

        <p className="home-subtext">
          2–5 minutes to reset
          <br />
          your stress
        </p>

        <div className="home-actions">
          <button
            className="home-screen__button home-screen__button--primary"
            onClick={() => onNavigate('emotion')}
          >
            Tap to reset stress
          </button>

          <button
            className="home-screen__button home-screen__button--secondary"
            type="button"
          >
            Emergency button
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
