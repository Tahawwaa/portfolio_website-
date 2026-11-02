import { profile } from '../data/portfolio.js'
import Icon from './Icon.jsx'
import Reveal from './motion/Reveal.jsx'
import AnimatedText from './motion/AnimatedText.jsx'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="shell">
        <div className="contact-main">
          <div><Reveal as="p" className="eyebrow mono" distance={20}><span>04 /</span> WHAT’S NEXT?</Reveal><AnimatedText text="Good things start with a" accent="connection." /><Reveal as="p" delay={0.18}>Have an idea, a question, or just a shared love of building?<br className="desktop-break" /> Find me on GitHub. Let’s see what’s possible.</Reveal></div>
          <Reveal as="a" className="contact-orbit" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Connect with Taha on GitHub" direction="right" delay={0.2}><Icon name="arrow-up-right" size={48} /><span className="mono">LET’S CONNECT</span></Reveal>
        </div>
        <Reveal className="contact-link-row" distance={25}><a href={profile.github} target="_blank" rel="noopener noreferrer"><Icon name="github" size={21} /><span>github.com/<strong>Tahawwaa</strong></span><Icon name="arrow-up-right" size={18} /></a><span className="mono">GREAT CODE STARTS WITH CURIOSITY.</span></Reveal>
        <Reveal as="footer" className="site-footer" distance={20}><a className="wordmark" href="#home" aria-label="Taha — back to top">taha<span>✳</span></a><p>© {new Date().getFullYear()} Taha. Built with care & a little curiosity.</p><a className="back-top mono" href="#home">BACK TO TOP <Icon name="arrow-up-right" size={15} /></a></Reveal>
      </div>
    </section>
  )
}
