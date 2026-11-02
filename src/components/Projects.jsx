import { useState } from 'react'
import { profile, projects } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'
import ProjectDialog from './ProjectDialog.jsx'
import Icon from './Icon.jsx'
import Reveal from './motion/Reveal.jsx'

const filters = ['All work', 'Full stack', 'Frontend', 'Backend']

export default function Projects() {
  const [filter, setFilter] = useState('All work')
  const [selectedProject, setSelectedProject] = useState(null)
  const visibleProjects = projects.filter((project) => filter === 'All work' || project.category === filter)

  return (
    <section id="work" className="section shell">
      <SectionHeading number="02" label="SELECTED WORK" title="A few things " accent="I’ve built.">
        <p>Ideas made tangible.<br />One considered detail at a time.</p>
      </SectionHeading>
      <Reveal className="work-controls" distance={24}>
        <div className="filter-list" role="group" aria-label="Filter projects">
          {filters.map((item) => <button key={item} aria-pressed={filter === item} className={filter === item ? 'filter-button selected' : 'filter-button'} onClick={() => setFilter(item)}>{item}{item === 'All work' && <span>{projects.length.toString().padStart(2, '0')}</span>}</button>)}
        </div>
        <span className="project-count mono" aria-live="polite">{visibleProjects.length.toString().padStart(2, '0')} PROJECTS</span>
      </Reveal>
      <div className="project-grid">
        {visibleProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.id} onSelect={setSelectedProject} />)}
      </div>
      <Reveal as="a" className="text-link all-repositories" href={profile.github + '?tab=repositories'} target="_blank" rel="noopener noreferrer">There’s more where that came from. <span>All repositories <Icon name="arrow-up-right" size={16} /></span></Reveal>
      {selectedProject && <ProjectDialog key={selectedProject.id} project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}
