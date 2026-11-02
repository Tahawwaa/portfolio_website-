import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function FloatingShapes({ active }) {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useFrame((state, delta) => {
    if (!active) return
    const step = Math.min(delta, 0.05)
    leftRef.current.rotation.y += step * 0.16
    rightRef.current.rotation.x -= step * 0.12
  })

  return <>
    <mesh ref={leftRef} position={[-2.75, 0.25, -0.5]} rotation={[0.4, 0.2, 0.7]}><icosahedronGeometry args={[0.28, 0]} /><meshStandardMaterial color="#b7d28b" metalness={0.7} roughness={0.3} wireframe /></mesh>
    <mesh ref={rightRef} position={[2.6, -0.4, -0.5]} rotation={[0.6, 0.2, 0.4]}><octahedronGeometry args={[0.28]} /><meshStandardMaterial color="#d0e7b2" metalness={0.65} roughness={0.35} /></mesh>
  </>
}
