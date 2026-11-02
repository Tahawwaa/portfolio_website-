import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

const SHAPES = [
  { position: [-4.5, 2, -3], color: '#00d4ff', type: 'icosahedron', scale: 0.6 },
  { position: [4.5, -1.5, -4], color: '#a855f7', type: 'octahedron', scale: 0.8 },
  { position: [-3.5, -2.5, -2], color: '#ec4899', type: 'torus', scale: 0.5 },
  { position: [3.8, 2.5, -3], color: '#00d4ff', type: 'dodecahedron', scale: 0.5 },
  { position: [0, 3.5, -5], color: '#a855f7', type: 'torusKnot', scale: 0.4 },
  { position: [-5.5, 0, -6], color: '#ec4899', type: 'octahedron', scale: 0.7 }
]

function Shape({ position, color, type, scale }) {
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * 0.2
    meshRef.current.rotation.y += delta * 0.3
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {type === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
        {type === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
        {type === 'dodecahedron' && <dodecahedronGeometry args={[1, 0]} />}
        {type === 'torus' && <torusGeometry args={[0.7, 0.25, 16, 32]} />}
        {type === 'torusKnot' && <torusKnotGeometry args={[0.6, 0.2, 64, 8]} />}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </mesh>
    </Float>
  )
}

export default function FloatingShapes() {
  return (
    <group>
      {SHAPES.map((shape, index) => (
        <Shape key={index} {...shape} />
      ))}
    </group>
  )
}
