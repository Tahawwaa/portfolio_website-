import { Component, lazy, Suspense, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ProfileCard from './ProfileCard.jsx'
import Icon from './Icon.jsx'
import usePointerParallax from '../hooks/usePointerParallax.js'
import { profile, skills } from '../data/portfolio.js'

const Scene = lazy(() => import('./three/Scene.jsx'))

class SceneBoundary extends Component {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() { return this.state.failed ? null : this.props.children }
}

export default function Hero({ motionEnabled, onToggleMotion }) {
  const heroRef = useRef(null)
  const [sceneReady, setSceneReady] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [pageVisible, setPageVisible] = useState(true)
  const parallax = usePointerParallax(motionEnabled)

  useEffect(() => {
    const timer = window.setTimeout(() => setSceneReady(true), 350)
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting))
    observer.observe(heroRef.current)
    function onVisibilityChange() { setPageVisible(!document.hidden) }
    document.addEventListener('visibilitychange', onVisibilityChange)
    onVisibilityChange()
    return () => {
      window.clearTimeout(timer)
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  return (
    <section id="home" className="hero" ref={heroRef} {...parallax.handlers}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="shell hero-shell">
        <div className="hero-meta mono"><span>INDEPENDENT MIND. CONNECTED WEB.</span><span>PORTFOLIO <span className="accent">/ 2026</span></span></div>
        <div className="portrait-stage">
          <div className="orbit-fallback" aria-hidden="true" />
          <div className="hero-scene" aria-hidden="true">
            {sceneReady && <SceneBoundary><Suspense fallback={null}><Scene pointer={parallax.pointer} active={motionEnabled && isVisible && pageVisible} /></Suspense></SceneBoundary>}
          </div>
          <div className="side-note side-note-left"><span className="crosshair">+</span><span className="mono">THE FRONTEND</span><p>A feel for the details.</p><span className="note-line" /></div>
          <div className="side-note side-note-right"><span className="crosshair">+</span><span className="mono">THE BACKEND</span><p>A mind for the logic.</p><span className="note-line" /></div>
          <div className="orbit-badge react-badge" aria-hidden="true"><Icon name="react" size={27} /></div>
          <div className="orbit-badge laravel-badge" aria-hidden="true"><Icon name="laravel" size={25} /></div>
          <ProfileCard style={parallax.style} />
          <div className="portrait-caption mono"><span className="status-dot" />{profile.title}</div>
        </div>
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <p className="hero-intro">Hey, I’m <span>{profile.name}</span><span className="wave-mark">✳</span></p>
          <h1>Thoughtful code.<br /><span>Exceptional experiences.</span></h1>
          <p className="hero-description">{profile.bio}</p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">Explore my work <Icon name="arrow-down" size={18} /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="button button-secondary"><Icon name="github" size={18} /> GitHub <Icon name="arrow-up-right" size={15} /></a>
          </div>
        </motion.div>
        <div className="hero-bottom mono">
          <a href="#work" className="scroll-cue"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
          <button className="motion-toggle" onClick={onToggleMotion} aria-pressed={!motionEnabled} aria-label={motionEnabled ? 'Pause animations' : 'Enable animations'}><Icon name={motionEnabled ? 'pause' : 'play'} size={13} /> MOTION {motionEnabled ? 'ON' : 'OFF'}</button>
        </div>
      </div>
      <div className="stack-strip"><div className="shell stack-strip-inner"><span className="mono strip-label">BUILT WITH INTENTION.<br /><span>POWERED BY</span></span><div className="strip-skills">{skills.map((skill) => <span key={skill.name}><Icon name={skill.icon} size={21} />{skill.name}</span>)}</div></div></div>
    </section>
  )
}
