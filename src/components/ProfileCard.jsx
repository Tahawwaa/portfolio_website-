import { motion } from 'framer-motion'
import portrait from '../../photo_2026-06-21_13-40-33.jpg'

export default function ProfileCard({ style }) {
  return (
    <motion.div className="portrait-parallax" style={style}>
      <div className="portrait-float">
        <div className="portrait-card">
          <img src={portrait} alt="Taha, full stack developer, photographed on a city street at night" width="1280" height="1280" fetchPriority="high" decoding="async" />
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
