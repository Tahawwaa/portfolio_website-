import { useEffect, useRef } from 'react'
import Icon from './Icon.jsx'
import ProjectArtwork from './ProjectArtwork.jsx'

export default function ProjectDialog({ project, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [])

  function onBackdropClick(event) {
    if (event.target !== dialogRef.current) return
    const bounds = dialogRef.current.getBoundingClientRect()
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose()
  }

  return (
    <dialog ref={dialogRef} className="project-dialog" aria-labelledby="project-dialog-title" aria-describedby="project-dialog-description" onCancel={(event) => { event.preventDefault(); onClose() }} onClick={onBackdropClick}>
      <button className="dialog-close" onClick={onClose} aria-label="Close project details" autoFocus><Icon name="close" /></button>
      <ProjectArtwork type={project.artwork} />
      <div className="dialog-content">
        <p className="eyebrow mono">{project.category} / PROJECT {project.number}</p>
        <h2 id="project-dialog-title">{project.name}</h2>
        <p id="project-dialog-description">{project.description}</p>
        <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <h3>Inside the project</h3>
        <ul className="feature-list">{project.features.map((feature) => <li key={feature}><Icon name="check" size={17} />{feature}</li>)}</ul>
        <a className="button button-primary" href={project.github} target="_blank" rel="noopener noreferrer"><Icon name="github" size={18} /> Explore the source <Icon name="arrow-up-right" size={17} /></a>
        <p className="dialog-note">The artwork is a visual study for this portfolio. Visit the repository for the actual implementation and setup.</p>
      </div>
    </dialog>
  )
}
