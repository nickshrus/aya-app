import './HomeScreen.css'

function ResultScreen({ onNavigate }) {
  return (
    <div className="home-screen">
      <div className="grain-overlay" aria-hidden="true" />

      <div className="home-screen__content">
        <h1 className="home-screen__title result-screen__title">
          How do you feel now?
        </h1>

        <div className="result-buttons">
          <button onClick={() => onNavigate('home')}>Better</button>
          <button className="active" onClick={() => onNavigate('home')}>
            A little better
          </button>
          <button onClick={() => onNavigate('home')}>Same</button>
        </div>
      </div>
    </div>
  )
}

export default ResultScreen
