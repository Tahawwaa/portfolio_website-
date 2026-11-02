import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 2000

export default function ParticleField({ mouse }) {
  const pointsRef = useRef()

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    const col = new Float32Array(PARTICLE_COUNT * 3)
    const colorA = new THREE.Color('#00d4ff')
    const colorB = new THREE.Color('#a855f7')

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = 8 + Math.random() * 12
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = radius * Math.cos(phi) - 5

      const mixed = colorA.clone().lerp(colorB, Math.random())
      col[i * 3] = mixed.r
      col[i * 3 + 1] = mixed.g
      col[i * 3 + 2] = mixed.b
    }
    return [pos, col]
  }, [])

  useFrame((state, delta) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y += delta * 0.03
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(
      pointsRef.current.rotation.x,
      mouse.current.y * 0.15,
      0.02
    )
    pointsRef.current.rotation.z = THREE.MathUtils.lerp(
      pointsRef.current.rotation.z,
      mouse.current.x * 0.1,
      0.02
    )
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
