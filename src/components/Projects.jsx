import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile, projects } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import ProjectArtwork from './ProjectArtwork.jsx'
import ProjectDialog from './ProjectDialog.jsx'
import Icon from './Icon.jsx'

const filters = ['All work', 'Full stack', 'Frontend', 'Backend']

export default function Projects() {
  const [filter, setFilter] = useState('All work')
  const [selectedProject, setSelectedProject] = useState(null)
  const visibleProjects = projects.filter((project) => filter === 'All work' || project.category === filter)

  return (
    <section id="work" className="section shell">
      <SectionHeading number="01" label="SELECTED WORK" title="A few things " accent="I’ve built.">
        <p>Ideas made tangible.<br />One considered detail at a time.</p>
      </SectionHeading>
      <div className="work-controls">
        <div className="filter-list" role="group" aria-label="Filter projects">
          {filters.map((item) => <button key={item} aria-pressed={filter === item} className={filter === item ? 'filter-button selected' : 'filter-button'} onClick={() => setFilter(item)}>{item}{item === 'All work' && <span>{projects.length.toString().padStart(2, '0')}</span>}</button>)}
        </div>
        <span className="project-count mono" aria-live="polite">{visibleProjects.length.toString().padStart(2, '0')} PROJECTS</span>
      </div>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <motion.article key={project.id} className="project-card" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <button className="project-cover-button" onClick={() => setSelectedProject(project)} aria-label={'View ' + project.name + ' details'}>
              <ProjectArtwork type={project.artwork} />
              <span className="project-open"><Icon name="arrow-up-right" size={21} /></span>
            </button>
            <div className="project-info"><div className="project-title-row"><h3><button onClick={() => setSelectedProject(project)}>{project.name}</button></h3><span className="mono project-number">{project.number} /</span></div><p>{project.type}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
          </motion.article>
        ))}
      </div>
      <a className="text-link all-repositories" href={profile.github + '?tab=repositories'} target="_blank" rel="noopener noreferrer">There’s more where that came from. <span>All repositories <Icon name="arrow-up-right" size={16} /></span></a>
      {selectedProject && <ProjectDialog key={selectedProject.id} project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}
