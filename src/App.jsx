import { useState } from 'react'
import { MotionConfig, useReducedMotion } from 'framer-motion'
import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Toolkit from './components/Toolkit.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const prefersReducedMotion = useReducedMotion()
  const [motionPreference, setMotionPreference] = useState(null)
  const motionEnabled = motionPreference ?? !prefersReducedMotion

  return (
    <MotionConfig reducedMotion={motionEnabled ? 'never' : 'always'}>
      <div className={motionEnabled ? 'portfolio' : 'portfolio motion-off'}>
        <a className="skip-link" href="#main">Skip to content</a>
        <Navigation />
        <main id="main">
          <Hero motionEnabled={motionEnabled} onToggleMotion={() => setMotionPreference(!motionEnabled)} />
          <Projects />
          <About />
          <Toolkit />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  )
}
