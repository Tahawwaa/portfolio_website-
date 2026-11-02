import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import * as THREE from 'three'
import Avatar from './Avatar.jsx'
import ParticleField from './ParticleField.jsx'
import FloatingShapes from './FloatingShapes.jsx'

function CameraRig({ mouse }) {
  const { camera } = useThree()

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.current.x * 0.8, 0.03)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.current.y * 0.5, 0.03)
    camera.lookAt(0, 0, 0)
  })

  return null
}

function DynamicLight({ mouse }) {
  const lightRef = useRef()

  useFrame(() => {
    if (!lightRef.current) return
    lightRef.current.position.x = THREE.MathUtils.lerp(
      lightRef.current.position.x,
      mouse.current.x * 6,
      0.05
    )
    lightRef.current.position.y = THREE.MathUtils.lerp(
      lightRef.current.position.y,
      mouse.current.y * 4 + 2,
      0.05
    )
  })

  return <pointLight ref={lightRef} position={[0, 2, 3]} intensity={1.5} color="#ec4899" distance={15} />
}

export default function Scene() {
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    function handleMove(event) {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      className="absolute inset-0"
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <DynamicLight mouse={mouse} />
      <CameraRig mouse={mouse} />

      <Avatar mouse={mouse} />
      <ParticleField mouse={mouse} />
      <FloatingShapes />

      <fog attach="fog" args={['#0a0a1a', 8, 25]} />
      <Preload all />
    </Canvas>
  )
}
