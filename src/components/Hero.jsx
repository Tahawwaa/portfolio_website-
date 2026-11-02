import { Component, lazy, Suspense, useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ProfileCard from './ProfileCard.jsx'
import Icon from './Icon.jsx'
import usePointerParallax from '../hooks/usePointerParallax.js'
import { profile } from '../data/portfolio.js'
import Reveal from './motion/Reveal.jsx'
import HeroWordmark from './motion/HeroWordmark.jsx'

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
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 0.88])

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
    <section id="home" className="hero" ref={heroRef} style={{ '--ambient-play-state': motionEnabled && isVisible && pageVisible ? 'running' : 'paused' }} {...parallax.handlers}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="shell hero-shell">
        <div className="hero-meta mono"><span>INDEPENDENT MIND. CONNECTED WEB.</span><span>PORTFOLIO <span className="accent">/ 2026</span></span></div>
        <motion.div className="portrait-stage" style={motionEnabled ? { y: portraitY, scale: portraitScale } : { y: 0, scale: 1 }}>
          <HeroWordmark progress={scrollYProgress} />
          <div className="portrait-halo" aria-hidden="true" />
          <div className="orbit-fallback" aria-hidden="true" />
          <div className="hero-scene" aria-hidden="true">
            {sceneReady && <SceneBoundary><Suspense fallback={null}><Scene pointer={parallax.pointer} progress={scrollYProgress} active={motionEnabled && isVisible && pageVisible} /></Suspense></SceneBoundary>}
          </div>
          <div className="side-note side-note-left"><span className="crosshair">+</span><span className="mono">THE FRONTEND</span><p>A feel for the details.</p><span className="note-line" /></div>
          <div className="side-note side-note-right"><span className="crosshair">+</span><span className="mono">THE BACKEND</span><p>A mind for the logic.</p><span className="note-line" /></div>
          <div className="orbit-badge react-badge" aria-hidden="true"><Icon name="react" size={27} /></div>
          <div className="orbit-badge laravel-badge" aria-hidden="true"><Icon name="laravel" size={25} /></div>
          <ProfileCard style={parallax.style} />
          <div className="portrait-caption mono"><span className="status-dot" />{profile.title}</div>
        </motion.div>
        <div className="hero-copy">
          <Reveal as="p" className="hero-intro" delay={0.1} distance={24}>Hey, I’m <span>{profile.name}</span><span className="wave-mark">✳</span></Reveal>
          <h1><Reveal as="span" className="hero-title-line" delay={0.17} distance={42}>Thoughtful code.</Reveal><Reveal as="span" className="hero-title-line accent-line" delay={0.28} distance={42}>Exceptional experiences.</Reveal></h1>
          <Reveal as="p" className="hero-description" delay={0.36} distance={25}>{profile.bio}</Reveal>
          <Reveal className="hero-actions" delay={0.42} distance={25}>
            <a href="#toolkit" className="button button-primary">Discover my skills <Icon name="arrow-down" size={18} /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="button button-secondary"><Icon name="github" size={18} /> GitHub <Icon name="arrow-up-right" size={15} /></a>
          </Reveal>
        </div>
        <div className="hero-bottom mono">
          <a href="#toolkit" className="scroll-cue"><span className="scroll-line" /> THE PERSON. THE SKILLS. THE WORK.</a>
          <button className="motion-toggle" onClick={onToggleMotion} aria-pressed={!motionEnabled} aria-label={motionEnabled ? 'Pause animations' : 'Enable animations'}><Icon name={motionEnabled ? 'pause' : 'play'} size={13} /> MOTION {motionEnabled ? 'ON' : 'OFF'}</button>
        </div>
      </div>
    </section>
  )
}
