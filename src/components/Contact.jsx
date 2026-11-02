import { profile } from '../data/portfolio.js'
import Icon from './Icon.jsx'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="shell">
        <div className="contact-main">
          <div><p className="eyebrow mono"><span>04 /</span> WHAT’S NEXT?</p><h2>Good things start<br />with a <span>connection.</span></h2><p>Have an idea, a question, or just a shared love of building?<br className="desktop-break" /> Find me on GitHub. Let’s see what’s possible.</p></div>
          <a className="contact-orbit" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Connect with Taha on GitHub"><Icon name="arrow-up-right" size={48} /><span className="mono">LET’S CONNECT</span></a>
        </div>
        <div className="contact-link-row"><a href={profile.github} target="_blank" rel="noopener noreferrer"><Icon name="github" size={21} /><span>github.com/<strong>Tahawwaa</strong></span><Icon name="arrow-up-right" size={18} /></a><span className="mono">GREAT CODE STARTS WITH CURIOSITY.</span></div>
        <footer className="site-footer"><a className="wordmark" href="#home" aria-label="Taha — back to top">taha<span>✳</span></a><p>© {new Date().getFullYear()} Taha. Built with care & a little curiosity.</p><a className="back-top mono" href="#home">BACK TO TOP <Icon name="arrow-up-right" size={15} /></a></footer>
      </div>
    </section>
  )
}
