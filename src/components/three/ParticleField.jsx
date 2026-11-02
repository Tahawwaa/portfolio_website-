import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function ParticleField({ active }) {
  const pointsRef = useRef(null)
  const positions = useMemo(() => {
    const values = new Float32Array(110 * 3)
    for (let index = 0; index < 110; index += 1) {
      const angle = index * 2.39996
      const radius = 1.6 + (index % 29) * 0.13
      values[index * 3] = Math.cos(angle) * radius
      values[index * 3 + 1] = Math.sin(angle) * radius * 0.7
      values[index * 3 + 2] = -1.5 - (index % 7) * 0.3
    }
    return values
  }, [])

  useFrame((state, delta) => {
    if (active && pointsRef.current) pointsRef.current.rotation.z += Math.min(delta, 0.05) * 0.012
  })

  return <points ref={pointsRef}><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry><pointsMaterial color="#d0ecb3" size={0.018} transparent opacity={0.4} depthWrite={false} /></points>
}
