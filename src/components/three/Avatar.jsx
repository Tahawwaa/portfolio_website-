import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'

export default function Avatar({ mouse }) {
  const groupRef = useRef()
  const innerRef = useRef()

  useFrame((state) => {
    if (!groupRef.current || !innerRef.current) return
    
    const time = state.clock.getElapsedTime()
    groupRef.current.position.y = Math.sin(time * 0.5) * 0.15
    
    groupRef.current.rotation.x = mouse.current.y * 0.1
    groupRef.current.rotation.y = mouse.current.x * 0.1
    
    innerRef.current.rotation.x = time * 0.2
    innerRef.current.rotation.z = time * 0.1
  })

  return (
    <group ref={groupRef} position={[0, 0.5, 0]}>
      <Sphere args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#00d4ff"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          emissive="#00d4ff"
          emissiveIntensity={0.4}
        />
      </Sphere>
      
      <mesh ref={innerRef} scale={1.15}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#a855f7"
          wireframe
          transparent
          opacity={0.2}
          emissive="#a855f7"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      <pointLight position={[0, 0, 0]} intensity={2} color="#00d4ff" distance={5} />
      <pointLight position={[2, 1, 1]} intensity={1.5} color="#a855f7" distance={4} />
    </group>
  )
}
