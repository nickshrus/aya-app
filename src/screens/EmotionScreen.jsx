import './HomeScreen.css'

function EmotionScreen({ onNavigate, selectedEmotion, onSelectEmotion }) {
  const emotions = ['Stress', 'Anxiety', 'Tired', 'Overwhelmed']

  return (
    <div className="home-screen">
      <div className="grain-overlay" aria-hidden="true" />

      <div className="home-screen__content">
        <h1 className="home-screen__title emotion-screen__title">
          What feels closest right now?
        </h1>

        <div className="emotion-buttons">
          {emotions.map((emotion) => (
            <button
              key={emotion}
              className={selectedEmotion === emotion ? 'active' : ''}
              onClick={() => {
                onSelectEmotion(emotion)
                onNavigate('time')
              }}
            >
              {emotion}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmotionScreen