/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/flowers/f21.glb -t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    f21_1: THREE.Mesh
    f21_2: THREE.Mesh
  }
  materials: {
    stem: THREE.MeshStandardMaterial
    krukers: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/f21.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[-0.17, 0.25, -72.05]} rotation={[Math.PI, -1.45, Math.PI / 2]} scale={[0.37, 0.14, 0.23]}>
        <mesh geometry={nodes.f21_1.geometry} material={materials.stem} />
        <mesh geometry={nodes.f21_2.geometry} material={materials.krukers} />
      </group>
    </group>
  )
}

useGLTF.preload('/f21.glb')