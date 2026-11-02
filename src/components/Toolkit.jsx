import { useRef, useState } from 'react'
import { useScroll, useSpring } from 'framer-motion'
import { skills } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import Icon from './Icon.jsx'
import Reveal from './motion/Reveal.jsx'
import SkillSequence, { SequenceGuide } from './motion/SkillSequence.jsx'
import SkillTicker from './motion/SkillTicker.jsx'
import { useMotionEnabled } from './motion/MotionSettings.jsx'
import useMediaQuery from '../hooks/useMediaQuery.js'

const categories = ['All tools', 'Frontend', 'Backend', 'Tools']

const groups = [
  { category: 'Frontend', number: '01', icon: 'layers', title: 'The experience.', description: 'Responsive interfaces. Thoughtful interactions. Every pixel with a purpose.', className: 'frontend-group', footer: 'WHERE IDEAS BECOME INTERFACES' },
  { category: 'Backend', number: '02', icon: 'terminal', title: 'The engine.', description: 'Application logic and APIs that bring the experience to life.', className: 'backend-group', footer: 'THE LOGIC BEHIND THE MAGIC' },
  { category: 'Tools', number: '03', icon: 'git', title: 'The workflow.', description: 'Versioned code and consistent environments, from local to launch.', className: 'workflow-group', footer: 'BUILT TO KEEP BUILDING' },
]

export default function Toolkit() {
  const motionEnabled = useMotionEnabled()
  const [category, setCategory] = useState('All tools')
  const sequenceRef = useRef(null)
  const hasSpace = useMediaQuery('(min-width: 1100px) and (min-height: 720px) and (pointer: fine)')
  const cinematic = motionEnabled && hasSpace && category === 'All tools'
  const { scrollYProgress } = useScroll({ target: sequenceRef, offset: ['start 0.2', 'end end'] })
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 24, mass: 0.5 })
  const visibleSkills = skills.filter((skill) => category === 'All tools' || skill.category === category)
  const visibleGroups = groups.filter((group) => category === 'All tools' || group.category === category)

  return (
    <section id="toolkit" className="toolkit-section">
      <SkillTicker />
      <div className="shell section">
      <SectionHeading number="01" label="THE SKILL SET" title="One developer. " accent="The full stack."><p>From what you see<br />to everything underneath.</p></SectionHeading>
      <Reveal className="filter-list toolkit-filters" role="group" aria-label="Filter skills" delay={0.12} distance={24}>{categories.map((item) => <button key={item} className={category === item ? 'filter-button selected' : 'filter-button'} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</Reveal>
      <div ref={sequenceRef} className={'skill-sequence-track' + (cinematic ? ' is-cinematic' : '')}>
      <div className="skill-sequence-stage">
      {cinematic && <SequenceGuide progress={progress} />}
      <div className={category === 'All tools' ? 'skill-groups' : 'skill-groups skill-groups-filtered'}>
        {visibleGroups.map((group, groupIndex) => (
          <SkillSequence className={'skill-group ' + group.className} key={category + group.category} cinematic={cinematic} index={groupIndex} progress={progress}>
            <div className="skill-group-top"><span className="group-symbol"><Icon name={group.icon} size={21} /></span><span className="mono">{group.category.toUpperCase()} / {group.number}</span></div>
            <h3>{group.title}</h3>
            <p className="skill-group-description">{group.description}</p>
            <div className="skills-grid">
              {skills.filter((skill) => skill.category === group.category).map((skill, skillIndex) => <Reveal className={'skill-card skill-' + skill.icon} key={skill.name} delay={skillIndex * 0.11} distance={55} whileHover={motionEnabled ? { y: -7, scale: 1.035, transition: { duration: 0.22 } } : undefined}><div className="skill-icon" style={{ color: skill.color }}><Icon name={skill.icon} size={30} /></div><div><h4>{skill.name}</h4><p>{skill.area}</p></div></Reveal>)}
            </div>
            <div className="skill-group-footer mono"><span className="status-dot" />{group.footer}</div>
          </SkillSequence>
        ))}
      </div>
      <p className="toolkit-footnote mono" aria-live="polite"><span className="status-dot" />{visibleSkills.length} TOOLS IN VIEW. ALWAYS ROOM TO LEARN MORE.</p>
      </div>
      </div>
      </div>
    </section>
  )
}
