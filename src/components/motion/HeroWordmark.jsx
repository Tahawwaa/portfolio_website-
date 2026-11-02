import { motion, useTransform } from 'framer-motion'
import { useMotionEnabled } from './MotionSettings.jsx'

function Letter({ children, index, progress }) {
  const motionEnabled = useMotionEnabled()
  const direction = index < 2 ? -1 : 1
  const translateX = useTransform(progress, [0, 0.8], [0, direction * (160 + index * 30)])
  const translateY = useTransform(progress, [0, 0.8], [0, index % 2 ? 130 : -110])
  const rotate = useTransform(progress, [0, 0.8], [0, direction * 22])
  const opacity = useTransform(progress, [0, 0.65], [1, 0])

  return <motion.span style={motionEnabled ? { x: translateX, y: translateY, rotate, opacity } : { x: 0, y: 0, rotate: 0, opacity: 1 }}>{children}</motion.span>
}

export default function HeroWordmark({ progress }) {
  return <span className="hero-name" aria-hidden="true">{'TAHA'.split('').map((letter, index) => <Letter key={index} index={index} progress={progress}>{letter}</Letter>)}</span>
}
