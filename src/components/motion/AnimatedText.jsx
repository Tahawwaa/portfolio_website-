import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useMotionEnabled } from './MotionSettings.jsx'

const wordVariants = {
  hidden: { y: '110%', opacity: 0, rotate: 5 },
  visible: { y: '0%', opacity: 1, rotate: 0 },
}

export default function AnimatedText({ as = 'h2', text, accent = '', className = '' }) {
  const textRef = useRef(null)
  const motionEnabled = useMotionEnabled()
  const inView = useInView(textRef, { once: true, amount: 0.25 })
  const Element = motion[as]
  const words = [
    ...text.trim().split(/\s+/).map((word) => ({ word, accent: false })),
    ...accent.trim().split(/\s+/).filter(Boolean).map((word) => ({ word, accent: true })),
  ]

  return (
    <Element ref={textRef} className={className} aria-label={text.trim() + (accent ? ' ' + accent.trim() : '')} initial={motionEnabled ? 'hidden' : false} animate={!motionEnabled || inView ? 'visible' : 'hidden'}>
      {words.map((item, index) => <span className={'word-clip' + (item.accent ? ' muted-heading' : '')} key={index} aria-hidden="true"><motion.span variants={wordVariants} transition={motionEnabled ? { duration: 0.8, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] } : { duration: 0, delay: 0 }}>{item.word}</motion.span>{index < words.length - 1 ? '\u00a0' : ''}</span>)}
    </Element>
  )
}
