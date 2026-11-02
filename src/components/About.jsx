import portrait from '../../photo_2026-06-21_13-40-33.jpg'
import Icon from './Icon.jsx'
import Reveal from './motion/Reveal.jsx'
import ScrollReveal from './motion/ScrollReveal.jsx'
import AnimatedText from './motion/AnimatedText.jsx'

const principles = [
  { icon: 'layers', title: 'From interface to infrastructure', description: 'Connecting what people see with the systems that make it work.' },
  { icon: 'code', title: 'A little obsessive about the details', description: 'Readable code. Responsive layouts. Interactions that feel right.' },
  { icon: 'spark', title: 'Always a work in progress', description: 'Learning through building, experimenting, and asking better questions.' },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="shell about-layout">
        <ScrollReveal className="about-visual" distance={110} tilt={-3}>
          <div className="about-image"><img src={portrait} alt="Taha in the city at night" width="1280" height="1280" loading="lazy" decoding="async" /><span className="about-image-overlay" /><span className="about-photo-label mono">A HUMAN BEHIND THE CODE.</span></div>
          <div className="about-sticker"><Icon name="spark" size={24} /><span>Curiosity.<br />Coffee. Code.</span></div>
          <span className="about-coordinate mono">TAHA / IN HIS ELEMENT</span>
        </ScrollReveal>
        <div className="about-copy">
          <Reveal as="p" className="eyebrow mono" distance={20}><span>03 /</span> BEYOND THE CODE</Reveal>
          <AnimatedText text="A developer." accent="An endlessly curious mind." />
          <Reveal as="p" className="about-intro" delay={0.1}>Hey again. I’m Taha — a full stack developer who enjoys bringing the visual and the logical together.</Reveal>
          <Reveal as="p" className="about-description" delay={0.18}>My toolkit spans React on the frontend and PHP & Laravel on the backend. I care about how a product feels to use just as much as how it’s built. Every project is a chance to connect those two worlds a little better.</Reveal>
          <div className="principles">{principles.map((principle, index) => <Reveal className="principle" key={principle.title} delay={index * 0.12} direction="right" distance={36}><span className="principle-icon"><Icon name={principle.icon} size={20} /></span><div><h3>{principle.title}</h3><p>{principle.description}</p></div></Reveal>)}</div>
        </div>
      </div>
    </section>
  )
}
