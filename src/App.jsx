import { useState } from 'react'
import HomeScreen from './screens/HomeScreen'
import EmotionScreen from './screens/EmotionScreen'
import TimeScreen from './screens/TimeScreen'
import SessionScreen from './screens/SessionScreen'
import ResultScreen from './screens/ResultScreen'

function App() {
  const [screen, setScreen] = useState('home')
  const [selectedEmotion, setSelectedEmotion] = useState('Stress')
  const [selectedDuration, setSelectedDuration] = useState(5)

  const onNavigate = (nextScreen) => {
    setScreen(nextScreen)
  }

  return (
    <>
      {screen === 'home' && <HomeScreen onNavigate={onNavigate} />}

      {screen === 'emotion' && (
        <EmotionScreen
          onNavigate={onNavigate}
          selectedEmotion={selectedEmotion}
          onSelectEmotion={setSelectedEmotion}
        />
      )}

      {screen === 'time' && (
        <TimeScreen
          onNavigate={onNavigate}
          selectedDuration={selectedDuration}
          onSelectDuration={setSelectedDuration}
        />
      )}

      {screen === 'session' && (
        <SessionScreen
          onNavigate={onNavigate}
          durationMinutes={selectedDuration}
          emotion={selectedEmotion}
        />
      )}

      {screen === 'result' && <ResultScreen onNavigate={onNavigate} />}
    </>
  )
}

export default App
