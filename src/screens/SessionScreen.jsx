import { useEffect, useMemo, useState } from 'react'
import Orb from '../components/Orb/Orb'
import './HomeScreen.css'

function SessionScreen({ onNavigate, durationMinutes = 5 }) {
  const [phase, setPhase] = useState('prepare')
  const [prepareCount, setPrepareCount] = useState(5)
  const [secondsLeft, setSecondsLeft] = useState(durationMinutes * 60)

  useEffect(() => {
    setPhase('prepare')
    setPrepareCount(5)
    setSecondsLeft(durationMinutes * 60)
  }, [durationMinutes])

  useEffect(() => {
    if (phase !== 'prepare') return

    if (prepareCount <= 1) {
      const timer = setTimeout(() => {
        setPhase('running')
      }, 1000)

      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      setPrepareCount((prev) => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [phase, prepareCount])

  useEffect(() => {
    if (phase !== 'running') return

    if (secondsLeft <= 0) {
      onNavigate('result')
      return
    }

    const timer = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [phase, secondsLeft, onNavigate])

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(secondsLeft / 60)
    const seconds = secondsLeft % 60
    return `${minutes}:${String(seconds).padStart(2, '0')}`
  }, [secondsLeft])

  return (
    <div className="home-screen">
      <div className="grain-overlay" aria-hidden="true" />

      <div className="home-screen__content session-screen__content">
        <h1 className="home-screen__title session-screen__title">
          {phase === 'prepare' ? 'Your reset will start...' : 'Breathe slowly'}
        </h1>

        <div className="orb-wrapper">
          <Orb />
          {phase === 'prepare' && (
            <div key={prepareCount} className="countdown">
              {prepareCount}
            </div>
          )}
        </div>

        <div className="time-label">
          {phase === 'prepare' ? `${durationMinutes}:00` : formattedTime}
        </div>
      </div>
    </div>
  )
}

export default SessionScreen
