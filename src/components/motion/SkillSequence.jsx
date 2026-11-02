import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useTransform } from 'framer-motion'
import ScrollReveal from './ScrollReveal.jsx'

const phases = ['THE EXPERIENCE', 'THE ENGINE', 'THE WORKFLOW']

export function SequenceGuide({ progress }) {
  const [phase, setPhase] = useState(0)
  const phaseRef = useRef(0)
  useMotionValueEvent(progress, 'change', (value) => {
    const nextPhase = value < 0.3 ? 0 : value < 0.62 ? 1 : 2
    if (phaseRef.current !== nextPhase) {
      phaseRef.current = nextPhase
      setPhase(nextPhase)
    }
  })

  return (
    <div className="sequence-guide mono" aria-hidden="true">
      <span className="sequence-prompt"><span className="sequence-scroll-icon" /> SCROLL TO BUILD THE STACK</span>
      <div className="sequence-phases">{phases.map((label, index) => <span key={label} className={phase === index ? 'active' : ''}><b>0{index + 1}</b> {label}</span>)}</div>
      <div className="sequence-progress"><motion.span style={{ scaleX: progress }} /></div>
    </div>
  )
}

function CinematicGroup({ children, className, index, progress }) {
  const start = index * 0.19
  const end = start + 0.32
  const translateY = useTransform(progress, [start, end], [index === 0 ? 65 : 110 + index * 55, 0])
  const translateX = useTransform(progress, [start, end], [(1 - index) * 65, 0])
  const rotateX = useTransform(progress, [start, end], [index === 0 ? 14 : 26, 0])
  const rotateY = useTransform(progress, [start, end], [(1 - index) * 18, 0])
  const rotateZ = useTransform(progress, [start, end], [(index - 1) * 9, 0])
  const scale = useTransform(progress, [start, end], [index === 0 ? 0.9 : 0.8, 1])
  const opacity = useTransform(progress, [start, end], [index === 0 ? 0.65 : 0.22, 1])

  return <motion.article className={className} style={{ x: translateX, y: translateY, rotateX, rotateY, rotateZ, scale, opacity, transformPerspective: 1200, transformOrigin: 'center bottom' }}>{children}</motion.article>
}

export default function SkillSequence({ cinematic, index, progress, ...props }) {
  return cinematic
    ? <CinematicGroup {...props} index={index} progress={progress} />
    : <ScrollReveal as="article" {...props} distance={140 + index * 35} tilt={index % 2 ? 5 : -5} />
}
