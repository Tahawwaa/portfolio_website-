import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useMotionEnabled } from './MotionSettings.jsx'

const visible = { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }

export default function Reveal({ as = 'div', children, className, delay = 0, direction = 'up', distance = 48, ...props }) {
  const elementRef = useRef(null)
  const motionEnabled = useMotionEnabled()
  const inView = useInView(elementRef, { once: true, amount: 0.08, margin: '0px 0px -24px 0px' })
  const [focused, setFocused] = useState(false)
  const Element = motion[as]
  const hidden = {
    opacity: 0,
    y: direction === 'up' ? distance : 0,
    x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
    scale: 0.98,
    rotate: 0,
  }

  return <Element ref={elementRef} className={className} initial={motionEnabled ? hidden : false} animate={!motionEnabled || inView || focused ? visible : hidden} transition={motionEnabled ? { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] } : { duration: 0, delay: 0 }} onFocusCapture={() => setFocused(true)} {...props}>{children}</Element>
}
