import { motion } from 'framer-motion'
import usePointerParallax from '../hooks/usePointerParallax.js'
import Icon from './Icon.jsx'
import ProjectArtwork from './ProjectArtwork.jsx'
import ScrollReveal from './motion/ScrollReveal.jsx'
import Reveal from './motion/Reveal.jsx'
import { useMotionEnabled } from './motion/MotionSettings.jsx'

export default function ProjectCard({ project, index, onSelect }) {
  const motionEnabled = useMotionEnabled()
  const parallax = usePointerParallax(motionEnabled)

  return (
    <ScrollReveal as="article" className="project-card" distance={index % 2 === 0 ? 85 : 130} tilt={index % 2 === 0 ? -2 : 2}>
      <motion.button className="project-cover-button" onClick={() => onSelect(project)} aria-label={'View ' + project.name + ' details'} style={parallax.style} {...parallax.handlers} whileTap={motionEnabled ? { scale: 0.98 } : undefined}>
        <ProjectArtwork type={project.artwork} />
        <span className="project-open"><Icon name="arrow-up-right" size={21} /></span>
      </motion.button>
      <Reveal className="project-info" delay={0.1} distance={25}>
        <div className="project-title-row"><h3><button onClick={() => onSelect(project)}>{project.name}</button></h3><span className="mono project-number">{project.number} /</span></div>
        <p>{project.type}</p>
        <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </Reveal>
    </ScrollReveal>
  )
}
