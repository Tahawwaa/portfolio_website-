import AnimatedText from './motion/AnimatedText.jsx'
import Reveal from './motion/Reveal.jsx'

export default function SectionHeading({ number, label, title, accent, children }) {
  return (
    <div className="section-heading">
      <div>
        <Reveal as="p" className="eyebrow mono" distance={18}><span>{number} /</span> {label}</Reveal>
        <AnimatedText text={title} accent={accent} />
      </div>
      {children && <Reveal className="section-heading-aside" direction="right" delay={0.15}>{children}</Reveal>}
    </div>
  )
}
