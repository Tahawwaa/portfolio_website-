import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei/core/Float.js'
import { MathUtils } from 'three'
import ParticleField from './ParticleField.jsx'
import FloatingShapes from './FloatingShapes.jsx'

function OrbitalScene({ pointer, progress, active }) {
  const orbitRef = useRef(null)
  const lightRef = useRef(null)

  useFrame(({ camera }, delta) => {
    if (!active) return
    const step = Math.min(delta, 0.05)
    const scroll = progress.get()
    camera.position.x = MathUtils.damp(camera.position.x, pointer.current.x * 0.8, 3, step)
    camera.position.y = MathUtils.damp(camera.position.y, -pointer.current.y * 0.5 + scroll * 0.8, 3, step)
    camera.position.z = MathUtils.damp(camera.position.z, 7 - scroll * 1.8, 3, step)
    camera.lookAt(0, 0, 0)
    orbitRef.current.rotation.z += step * 0.07
    orbitRef.current.rotation.x = MathUtils.damp(orbitRef.current.rotation.x, scroll * 0.9, 3, step)
    lightRef.current.position.x = pointer.current.x * 4
  })

  return (
    <>
      <ambientLight intensity={1.1} />
      <pointLight ref={lightRef} position={[2, 3, 4]} color="#d6ff8a" intensity={22} />
      <directionalLight position={[-4, 2, 3]} intensity={2} color="#e4f1d7" />
      <group ref={orbitRef}>
        <mesh rotation={[1.13, 0.2, -0.24]}><torusGeometry args={[2.35, 0.009, 5, 100]} /><meshBasicMaterial color="#a8c983" transparent opacity={0.22} /></mesh>
        <mesh rotation={[1.1, -0.25, 0.32]}><torusGeometry args={[2.65, 0.006, 5, 100]} /><meshBasicMaterial color="#c8dcad" transparent opacity={0.12} /></mesh>
      </group>
      <Float speed={active ? 2 : 0} rotationIntensity={active ? 0.5 : 0} floatIntensity={active ? 0.6 : 0}>
        <FloatingShapes active={active} />
      </Float>
      <ParticleField active={active} />
    </>
  )
}

export default function Scene({ pointer, progress, active }) {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 40 }} dpr={[1, 1.5]} frameloop={active ? 'always' : 'demand'} gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }} fallback={null}>
      <OrbitalScene pointer={pointer} progress={progress} active={active} />
    </Canvas>
  )
}
