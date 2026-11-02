import { useState } from 'react'
import { skills } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import Icon from './Icon.jsx'

const categories = ['All tools', 'Frontend', 'Backend', 'Tools']

export default function Toolkit() {
  const [category, setCategory] = useState('All tools')
  const visibleSkills = skills.filter((skill) => category === 'All tools' || skill.category === category)

  return (
    <section id="toolkit" className="section shell toolkit-section">
      <SectionHeading number="03" label="MY TOOLKIT" title="Good tools. " accent="Better possibilities."><p>The technologies I turn to<br />to make things happen.</p></SectionHeading>
      <div className="filter-list toolkit-filters" role="group" aria-label="Filter skills">{categories.map((item) => <button key={item} className={category === item ? 'filter-button selected' : 'filter-button'} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
      <div className="skills-grid">
        {visibleSkills.map((skill) => <div className="skill-card" key={skill.name}><div className="skill-icon" style={{ color: skill.color }}><Icon name={skill.icon} size={32} /></div><div><h3>{skill.name}</h3><p>{skill.area}</p></div><Icon name="arrow-up-right" size={15} className="skill-arrow" /></div>)}
      </div>
      <p className="toolkit-footnote mono" aria-live="polite"><span className="status-dot" />{visibleSkills.length} TOOLS IN VIEW. ALWAYS ROOM TO LEARN MORE.</p>
    </section>
  )
}
