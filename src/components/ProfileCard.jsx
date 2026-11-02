import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const PROFILE = {
  name: 'Taha',
  title: 'Full Stack Developer',
  bio: 'Crafting immersive digital experiences with modern web technologies. Passionate about clean code, 3D interfaces, and pushing the boundaries of what the browser can do.'
}

export default function ProfileCard() {
  const cardRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 20
  })

  function handleMouseMove(event) {
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      className="glass-effect rounded-2xl px-8 py-6 md:px-12 md:py-8 max-w-xl mx-4 text-center shadow-2xl shadow-cyber-blue/10"
    >
      <motion.h1
        className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2"
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {PROFILE.name}
      </motion.h1>

      <motion.p
        className="font-display text-lg md:text-xl text-cyber-blue tracking-widest uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {PROFILE.title}
      </motion.p>

      <motion.p
        className="text-sm md:text-base text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        {PROFILE.bio}
      </motion.p>

      <motion.div
        className="flex justify-center gap-4 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 212, 255, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple text-white text-sm font-semibold"
        >
          View Work
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, borderColor: 'rgba(0, 212, 255, 0.8)' }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 rounded-full border border-white/20 text-white text-sm font-semibold glass-effect"
        >
          Contact Me
        </motion.a>
      </motion.div>
    </motion.div>
  )
}
