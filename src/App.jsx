import { useState } from 'react'
import { MotionConfig, useReducedMotion } from 'framer-motion'
import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Toolkit from './components/Toolkit.jsx'
import Contact from './components/Contact.jsx'
import { MotionSettings } from './components/motion/MotionSettings.jsx'
import ScrollProgress from './components/motion/ScrollProgress.jsx'
import CursorEffects from './components/motion/CursorEffects.jsx'

export default function App() {
  const prefersReducedMotion = useReducedMotion()
  const [motionPreference, setMotionPreference] = useState(() => {
    try {
      const saved = window.localStorage.getItem('taha-portfolio-motion')
      return saved === 'on' ? true : saved === 'off' ? false : null
    } catch {
      return null
    }
  })
  const motionEnabled = motionPreference ?? !prefersReducedMotion

  function toggleMotion() {
    const nextPreference = !motionEnabled
    setMotionPreference(nextPreference)
    try {
      window.localStorage.setItem('taha-portfolio-motion', nextPreference ? 'on' : 'off')
    } catch {}
  }

  return (
    <MotionConfig reducedMotion={motionEnabled ? 'never' : 'always'}>
      <MotionSettings.Provider value={motionEnabled}>
      <div className={motionEnabled ? 'portfolio motion-on' : 'portfolio motion-off'}>
        <a className="skip-link" href="#main">Skip to content</a>
        <ScrollProgress />
        <CursorEffects />
        <Navigation motionEnabled={motionEnabled} onToggleMotion={toggleMotion} />
        <main id="main">
          <Hero motionEnabled={motionEnabled} onToggleMotion={toggleMotion} />
          <Toolkit />
          <Projects />
          <About />
          <Contact />
        </main>
      </div>
      </MotionSettings.Provider>
    </MotionConfig>
  )
}
