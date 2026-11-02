import { motion, useScroll, useSpring } from 'framer-motion'
import { useMotionEnabled } from './MotionSettings.jsx'

export default function ScrollProgress() {
  const motionEnabled = useMotionEnabled()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 30, mass: 0.3 })

  return motionEnabled ? <motion.div className="reading-progress" style={{ scaleX }} aria-hidden="true" /> : null
}
