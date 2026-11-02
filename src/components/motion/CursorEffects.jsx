import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import useMediaQuery from '../../hooks/useMediaQuery.js'
import { useMotionEnabled } from './MotionSettings.jsx'

function PointerLayer() {
  const pointerX = useMotionValue(-500)
  const pointerY = useMotionValue(-500)
  const opacity = useMotionValue(0)
  const hoverScale = useMotionValue(1)
  const ringX = useSpring(pointerX, { stiffness: 240, damping: 24, mass: 0.45 })
  const ringY = useSpring(pointerY, { stiffness: 240, damping: 24, mass: 0.45 })
  const auraX = useSpring(pointerX, { stiffness: 65, damping: 28 })
  const auraY = useSpring(pointerY, { stiffness: 65, damping: 28 })
  const scale = useSpring(hoverScale, { stiffness: 260, damping: 22 })
  const [ripples, setRipples] = useState([])
  const rippleId = useRef(0)

  useEffect(() => {
    function move(event) {
      if (event.pointerType !== 'mouse') return
      pointerX.set(event.clientX)
      pointerY.set(event.clientY)
      opacity.set(1)
    }
    function hover(event) {
      hoverScale.set(event.target instanceof Element && event.target.closest('a, button') ? 1.9 : 1)
    }
    function leave() { opacity.set(0) }
    function click(event) {
      if (event.pointerType !== 'mouse' || event.button !== 0) return
      const ripple = { id: ++rippleId.current, x: event.clientX, y: event.clientY }
      setRipples((current) => [...current.slice(-3), ripple])
    }
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerover', hover, { passive: true })
    window.addEventListener('pointerdown', click, { passive: true })
    window.addEventListener('blur', leave)
    document.documentElement.addEventListener('pointerleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', hover)
      window.removeEventListener('pointerdown', click)
      window.removeEventListener('blur', leave)
      document.documentElement.removeEventListener('pointerleave', leave)
    }
  }, [pointerX, pointerY, opacity, hoverScale])

  return (
    <div className="pointer-effects" aria-hidden="true">
      <motion.div className="cursor-aura" style={{ x: auraX, y: auraY, opacity }} />
      <motion.div className="cursor-ring" style={{ x: ringX, y: ringY, scale, opacity }} />
      {ripples.map((ripple) => <motion.div key={ripple.id} className="click-ripple" style={{ left: ripple.x, top: ripple.y }} initial={{ scale: 0.2, opacity: 0.75 }} animate={{ scale: 3.5, opacity: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }} onAnimationComplete={() => setRipples((current) => current.filter((item) => item.id !== ripple.id))} />)}
    </div>
  )
}

export default function CursorEffects() {
  const motionEnabled = useMotionEnabled()
  const hasPointer = useMediaQuery('(hover: hover) and (pointer: fine)')
  return motionEnabled && hasPointer ? <PointerLayer /> : null
}
