import { motion } from 'framer-motion'
import portrait from '../../photo_2026-06-21_13-40-33.jpg'
import { useMotionEnabled } from './motion/MotionSettings.jsx'

export default function ProfileCard({ style }) {
  const motionEnabled = useMotionEnabled()
  return (
    <motion.div className="portrait-parallax" style={style} initial={motionEnabled ? { opacity: 0, scale: 0.86, y: 35 } : false} animate={{ opacity: 1, scale: 1, y: 0 }} transition={motionEnabled ? { duration: 1.1, ease: [0.16, 1, 0.3, 1] } : { duration: 0 }}>
      <div className="portrait-float">
        <div className="portrait-card">
          <img src={portrait} alt="Taha, full stack developer, photographed on a city street at night" width="1280" height="1280" fetchpriority="high" decoding="async" />
          <div className="portrait-shade" />
          <span className="portrait-corner corner-top" aria-hidden="true" />
          <span className="portrait-corner corner-bottom" aria-hidden="true" />
          <div className="portrait-footer"><span className="mono">@TAHAWWAA</span><span className="portrait-asterisk" aria-hidden="true">✳</span></div>
        </div>
        <span className="portrait-index mono" aria-hidden="true">DEVELOPER / CREATOR</span>
      </div>
    </motion.div>
  )
}
