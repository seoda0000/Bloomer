/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/flowers/f21.glb -t
*/

import * as THREE from "three"
import React, { useRef, useState, useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"
import { PositionType } from "../../models/garden/gardenType"
import { useLocation } from "react-router-dom"
import { useFrame, useThree } from "@react-three/fiber"
import { useAppDispatch } from "../../redux/store.hooks"
import { positionUpdate } from "../../redux/modules/diary/diary-slice"
import FloatWrapper from "../common/FloatWrapper/FloatWrapper"

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

export function F21(
  props: (JSX.IntrinsicElements["group"] & PositionType) | any
) {
  const { x, y, z } = props.flowerPosition
  const location = useLocation()
  const modelRef = useRef<any>()
  const groupRef = useRef<any>()
  const [position, setPosition] = useState({ x, y, z })
  const [isDragging, setIsDragging] = useState(false)

  const { scene, camera } = useThree()
  const raycaster = new THREE.Raycaster()

  function intersect(pos: THREE.Vector2) {
    raycaster.setFromCamera(pos, camera)
    return raycaster.intersectObjects(scene.children)
  }

  const dispatch = useAppDispatch()
  const handlePositionUpdate = (
    id: number,
    x: string,
    y: string,
    z: string
  ) => {
    dispatch(
      positionUpdate({
        diaryId: id,
        x: x,
        y: y,
        z: z,
      })
    )
  }

  useEffect(() => {
    const handleWindowClick = (e: MouseEvent) => {
      if (isDragging) {
        setIsDragging(false)
      }
    }
    if (location.pathname.includes("garden/edit")) {
      handlePositionUpdate(props.diaryId, position.x, position.y, position.z)
      window.addEventListener("click", handleWindowClick)
    }
    return () => {
      if (location.pathname.includes("garden/edit")) {
        window.removeEventListener("click", handleWindowClick)
      }
    }
  }, [isDragging, location.pathname])

  useFrame(({ mouse }) => {
    if (!location.pathname.includes("garden")) {
      const worldYAxis = new THREE.Vector3(0, 1, 0)
      modelRef.current!.rotateOnWorldAxis(worldYAxis, 0.01)
    }

    if (location.pathname.includes("garden/edit")) {
      if (isDragging) {
        const found = intersect(mouse)
        if (found.length > 0) {
          for (let i = 0; i < found.length; i++) {
            if (!found[i].object.userData.ground) continue

            // 물체가 마우스와 만난 지점으로 위치를 업데이트합니다.
            const newPosition = found[i].point
            setPosition({ x: newPosition.x, y: y, z: newPosition.z })
          }
        }
      }
    }
  })

  const { nodes, materials } = useGLTF(
    `${process.env.PUBLIC_URL}/models/flowers/f21.glb`
  ) as GLTFResult
  const flower = (
    <group {...props} dispose={null}>
      <group
        position={[position.x, position.y, position.z]}
        rotation={[Math.PI, -1.45, Math.PI / 2]}
        scale={
          location.pathname.includes("diary/select")
            ? [0.5, 0.19, 0.31]
            : [0.37, 0.14, 0.23]
        }
        ref={location.pathname.includes("garden") ? groupRef : modelRef}
        userData={{ draggable: true, name: "f21" }}
        onClick={() => {
          setIsDragging(!isDragging)
        }}
      >
        <mesh geometry={nodes.f21_1.geometry} material={materials.stem} />
        <mesh geometry={nodes.f21_2.geometry} material={materials.krukers} />
      </group>
    </group>
  )
  return (
    <>
      {isDragging && props.page !== "other" ? (
        <FloatWrapper>{flower}</FloatWrapper>
      ) : (
        flower
      )}
    </>
  )
}

export default F21
