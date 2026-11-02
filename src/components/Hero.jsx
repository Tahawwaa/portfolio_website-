import { motion } from 'framer-motion'
import Scene from './three/Scene.jsx'
import ProfileCard from './ProfileCard.jsx'

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 3D background scene */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* Gradient vignette for readability */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-cyber-dark/80" />

      {/* UI overlay */}
      <div className="relative z-20 flex flex-col items-center justify-end h-full pb-16 md:pb-24 pointer-events-none">
        <div className="pointer-events-auto">
          <ProfileCard />
        </div>

        {/* Scroll hint */}
        <motion.div
          className="mt-8 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-5 h-9 rounded-full border-2 border-white/30 flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-cyber-blue" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
