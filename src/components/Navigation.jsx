import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Icon from './Icon.jsx'

const links = [{ href: '#toolkit', label: 'Skills' }, { href: '#work', label: 'Work' }, { href: '#about', label: 'About' }]

export default function Navigation({ motionEnabled, onToggleMotion }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const toggleRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection('#' + entry.target.id)
      })
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 })
    document.querySelectorAll('main > section[id]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isOpen) return
    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }
    const media = window.matchMedia('(min-width: 701px)')
    function closeOnDesktop(event) {
      if (event.matches) setIsOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    media.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      media.removeEventListener('change', closeOnDesktop)
    }
  }, [isOpen])

  return (
    <motion.header className="site-header" initial={motionEnabled ? { opacity: 0, y: -18 } : false} animate={{ opacity: 1, y: 0 }} transition={{ duration: motionEnabled ? 0.6 : 0 }}>
      <div className="shell header-inner">
        <a className="wordmark" href="#home" aria-label="Taha — back to top" onClick={() => setIsOpen(false)}>taha<span>✳</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link, index) => <motion.a key={link.href} href={link.href} className={activeSection === link.href ? 'active' : ''} aria-current={activeSection === link.href ? 'location' : undefined} initial={motionEnabled ? { opacity: 0, y: -10 } : false} animate={{ opacity: 1, y: 0 }} transition={{ duration: motionEnabled ? 0.45 : 0, delay: motionEnabled ? 0.1 + index * 0.08 : 0 }}>{link.label}</motion.a>)}
        </nav>
        <a className="header-contact" href="#contact">Let’s connect <Icon name="arrow-up-right" size={17} /></a>
        <button className="header-motion-toggle" onClick={onToggleMotion} aria-pressed={!motionEnabled} aria-label={motionEnabled ? 'Pause animations' : 'Enable animations'} title={motionEnabled ? 'Pause animations' : 'Enable animations'}><Icon name={motionEnabled ? 'pause' : 'play'} size={14} /></button>
        <button ref={toggleRef} className="menu-toggle" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(!isOpen)}><Icon name={isOpen ? 'close' : 'menu'} /></button>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!isOpen}>
        {[...links, { href: '#contact', label: 'Let’s connect' }].map((link) => <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}<Icon name="arrow-up-right" size={18} /></a>)}
      </nav>
    </motion.header>
  )
}
