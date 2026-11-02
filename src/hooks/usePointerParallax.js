import { useRef } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function usePointerParallax(enabled) {
  const pointer = useRef({ x: 0, y: 0 })
  const horizontal = useMotionValue(0)
  const vertical = useMotionValue(0)
  const rotateX = useSpring(useTransform(vertical, [-1, 1], [6, -6]), { stiffness: 100, damping: 25 })
  const rotateY = useSpring(useTransform(horizontal, [-1, 1], [-8, 8]), { stiffness: 100, damping: 25 })

  function onPointerMove(event) {
    if (!enabled || event.pointerType !== 'mouse') return
    const bounds = event.currentTarget.getBoundingClientRect()
    const nextX = ((event.clientX - bounds.left) / bounds.width) * 2 - 1
    const nextY = ((event.clientY - bounds.top) / bounds.height) * 2 - 1
    pointer.current.x = nextX
    pointer.current.y = nextY
    horizontal.set(nextX)
    vertical.set(nextY)
  }

  function onPointerLeave() {
    pointer.current = { x: 0, y: 0 }
    horizontal.set(0)
    vertical.set(0)
  }

  return {
    pointer,
    style: enabled ? { rotateX, rotateY, transformPerspective: 1000 } : {},
    handlers: { onPointerMove, onPointerLeave },
  }
}
