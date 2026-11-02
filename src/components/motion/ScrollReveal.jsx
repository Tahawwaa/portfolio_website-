import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useMotionEnabled } from './MotionSettings.jsx'

export default function ScrollReveal({ as = 'div', children, className, distance = 90, tilt = 0, ...props }) {
  const elementRef = useRef(null)
  const motionEnabled = useMotionEnabled()
  const [focused, setFocused] = useState(false)
  const { scrollYProgress } = useScroll({ target: elementRef, offset: ['start end', 'start 0.55'] })
  const progress = useSpring(scrollYProgress, { stiffness: 170, damping: 30, mass: 0.5 })
  const translateY = useTransform(progress, [0, 1], [distance, 0])
  const scale = useTransform(progress, [0, 1], [0.86, 1])
  const opacity = useTransform(progress, [0, 0.65, 1], [0.15, 0.85, 1])
  const rotate = useTransform(progress, [0, 1], [tilt, 0])
  const rotateX = useTransform(progress, [0, 1], [14, 0])
  const Element = motion[as]
  const style = motionEnabled && !focused ? { y: translateY, scale, opacity, rotate, rotateX, transformPerspective: 1200 } : { y: 0, scale: 1, opacity: 1, rotate: 0, rotateX: 0 }

  return <Element ref={elementRef} className={className} style={style} onFocusCapture={() => setFocused(true)} {...props}>{children}</Element>
}
