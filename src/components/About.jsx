import portrait from '../../photo_2026-06-21_13-40-33.jpg'
import Icon from './Icon.jsx'

const principles = [
  { icon: 'layers', title: 'From interface to infrastructure', description: 'Connecting what people see with the systems that make it work.' },
  { icon: 'code', title: 'A little obsessive about the details', description: 'Readable code. Responsive layouts. Interactions that feel right.' },
  { icon: 'spark', title: 'Always a work in progress', description: 'Learning through building, experimenting, and asking better questions.' },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="shell about-layout">
        <div className="about-visual">
          <div className="about-image"><img src={portrait} alt="Taha in the city at night" width="1280" height="1280" loading="lazy" decoding="async" /><span className="about-image-overlay" /><span className="about-photo-label mono">A HUMAN BEHIND THE CODE.</span></div>
          <div className="about-sticker"><Icon name="spark" size={24} /><span>Curiosity.<br />Coffee. Code.</span></div>
          <span className="about-coordinate mono">TAHA / IN HIS ELEMENT</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow mono"><span>02 /</span> BEYOND THE CODE</p>
          <h2>A developer.<br /><span className="muted-heading">An endlessly curious mind.</span></h2>
          <p className="about-intro">Hey again. I’m Taha — a full stack developer who enjoys bringing the visual and the logical together.</p>
          <p className="about-description">My toolkit spans React on the frontend and PHP & Laravel on the backend. I care about how a product feels to use just as much as how it’s built. Every project is a chance to connect those two worlds a little better.</p>
          <div className="principles">{principles.map((principle) => <div className="principle" key={principle.title}><span className="principle-icon"><Icon name={principle.icon} size={20} /></span><div><h3>{principle.title}</h3><p>{principle.description}</p></div></div>)}</div>
        </div>
      </div>
    </section>
  )
}
