import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { skills } from '../../data/portfolio.js'
import Icon from '../Icon.jsx'
import { useMotionEnabled } from './MotionSettings.jsx'

export default function SkillTicker() {
  const tickerRef = useRef(null)
  const inView = useInView(tickerRef)
  const motionEnabled = useMotionEnabled()

  return (
    <div className="skill-ticker" ref={tickerRef} aria-hidden="true">
      <div className="skill-ticker-track" style={{ animationPlayState: motionEnabled && inView ? 'running' : 'paused' }}>
        {[0, 1].map((copy) => <div className="skill-ticker-copy" key={copy}>{skills.map((skill) => <span key={skill.name}><Icon name={skill.icon} size={21} /><span>{skill.name}</span><span className="ticker-spark">✳</span></span>)}</div>)}
      </div>
    </div>
  )
}
