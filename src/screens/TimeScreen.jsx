import './HomeScreen.css'

function TimeScreen({ onNavigate, selectedDuration, onSelectDuration }) {
  const options = [2, 5, 10]

  return (
    <div className="home-screen">
      <div className="grain-overlay" aria-hidden="true" />

      <div className="home-screen__content">
        <h1 className="home-screen__title time-screen__title">
          How much time do you have?
        </h1>

        <div className="time-buttons">
          {options.map((minutes) => (
            <button
              key={minutes}
              className={selectedDuration === minutes ? 'active' : ''}
              onClick={() => {
                onSelectDuration(minutes)
                onNavigate('session')
              }}
            >
              {minutes} min
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TimeScreen