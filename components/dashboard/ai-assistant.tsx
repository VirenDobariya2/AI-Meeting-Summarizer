"use client"

import { useMemo } from "react"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment } from "@react-three/drei"
import * as THREE from "three"


function Model({ isProcessing = false }) {
  const { scene } = useGLTF("/duck.glb")
  const modelRef = useRef<THREE.Group>(null)
  const [hoverState, setHoverState] = useState(0)

  // Clone the scene to avoid modifying the original
  const clonedScene = useMemo(() => scene.clone(), [scene])

  // Apply materials to the model
  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color("#FFD700"),
          roughness: 0.3,
          metalness: 0.2,
        })
      }
    })
  }, [clonedScene])

  // Animation
  useFrame((state) => {
    if (!modelRef.current) return

    // Hover animation
    modelRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 0.1

    // Rotation animation when processing
    if (isProcessing) {
      modelRef.current.rotation.y += 0.02
    }

    // Pulse effect when processing
    if (isProcessing) {
      const pulse = Math.sin(state.clock.elapsedTime * 5) * 0.05 + 1
      modelRef.current.scale.set(pulse, pulse, pulse)
    }

    // Hover state animation
    if (hoverState > 0) {
      setHoverState(hoverState - 0.01)
      modelRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 10) * 0.1 * hoverState
    }
  })

  return (
    <group ref={modelRef} scale={[0.8, 0.8, 0.8]} position={[0, 0, 0]} onClick={() => setHoverState(1)}>
      <primitive object={clonedScene} />
    </group>
  )
}

export function AiAssistant({ isProcessing = false }) {
  return (
    <div className="relative h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Environment preset="studio" />
        <Model isProcessing={isProcessing} />
        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} />
      </Canvas>

      {isProcessing && (
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <p className="text-sm font-medium animate-pulse">Processing your request...</p>
        </div>
      )}
    </div>
  )
}
