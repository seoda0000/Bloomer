/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/beach_map.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import CameraAndLight from "./CameraAndLight";
import BaseGrassAndFlowers from "./BaseGrassAndFlowers";
import BassGrassAndFlowersEdit from "./BaseGrassAndFlowersEdit";
import GuestBookModel from "../../GuestBook/GuestBookModel/GuestBook";
import { useAppSelector } from "../../../redux/store.hooks";
import { Siba } from "../Siba/Siba";

type GLTFResult = GLTF & {
  nodes: {
    Sand: THREE.Mesh;
    Pier: THREE.Mesh;
    Circle: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Plane003: THREE.Mesh;
    Plane004_1: THREE.Mesh;
    Plane013: THREE.Mesh;
    Plane014_1: THREE.Mesh;
    Plane015_1: THREE.Mesh;
    Plane016: THREE.Mesh;
    Plane017: THREE.Mesh;
    Plane018: THREE.Mesh;
    Plane019: THREE.Mesh;
    Plane020: THREE.Mesh;
    Plane021: THREE.Mesh;
    Plane022: THREE.Mesh;
    Plane034: THREE.Mesh;
    Ground: THREE.Mesh;
    Sand001: THREE.Mesh;
    Sand002: THREE.Mesh;
    Sand003: THREE.Mesh;
    Sand004: THREE.Mesh;
    Torch: THREE.Mesh;
    Circle003_1: THREE.Mesh;
    Torch001: THREE.Mesh;
    Circle005: THREE.Mesh;
    Water: THREE.Mesh;
    Plane: THREE.Mesh;
    Cube: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube006: THREE.Mesh;
    Plane029: THREE.Mesh;
    Roundcube: THREE.Mesh;
    Roundcube001: THREE.Mesh;
    Roundcube002: THREE.Mesh;
    Roundcube003: THREE.Mesh;
    Roundcube004: THREE.Mesh;
    Circle001: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Plane030: THREE.Mesh;
  };
  materials: {
    Sand: THREE.MeshStandardMaterial;
    Wood: THREE.MeshStandardMaterial;
    Red: THREE.MeshStandardMaterial;
    White: THREE.MeshStandardMaterial;
    Ground: THREE.MeshStandardMaterial;
    ark: THREE.MeshStandardMaterial;
    Water: THREE.MeshPhysicalMaterial;
    Rocks: THREE.MeshStandardMaterial;
    ["Sand.001"]: THREE.MeshStandardMaterial;
  };
};

export function Model_edit(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    `${process.env.PUBLIC_URL}/models/beach_map.glb`
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Pier.geometry} material={materials.Wood}>
        <mesh
          geometry={nodes.Circle.geometry}
          material={materials.Wood}
          position={[2.65, 0.66, 2.65]}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[2.65, 0.66, 2.65]}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Plane003.geometry}
          material={materials.Red}
          position={[2.65, 2.22, 2.65]}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Plane004_1.geometry}
          material={materials.Wood}
          position={[2.65, 3.1, 2.65]}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Plane013.geometry}
          material={materials.Red}
          position={[3.49, 2.86, 3.06]}
          rotation={[0, 0, -0.8]}
          scale={0.58}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Plane014_1.geometry}
          material={materials.Red}
          position={[3.56, 2.79, 2.86]}
          rotation={[0, 0, -0.8]}
          scale={0.58}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Plane015_1.geometry}
          material={materials.Red}
          position={[3.48, 2.88, 2.65]}
          rotation={[0, 0, -0.8]}
          scale={0.58}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Plane016.geometry}
          material={materials.Red}
          position={[3.69, 2.66, 2.06]}
          rotation={[0, 0, -0.8]}
          scale={0.58}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Plane017.geometry}
          material={materials.Red}
          position={[3.77, 2.57, 2.27]}
          rotation={[0, 0, -0.8]}
          scale={0.58}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Plane018.geometry}
          material={materials.Red}
          position={[2.73, 2.7, 3.64]}
          rotation={[0.8, -Math.PI / 2, 0]}
          scale={0.58}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Plane019.geometry}
          material={materials.Red}
          position={[2.96, 2.61, 3.73]}
          rotation={[0.8, -Math.PI / 2, 0]}
          scale={0.58}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Plane020.geometry}
          material={materials.Red}
          position={[2.97, 2.85, 3.5]}
          rotation={[0.8, -Math.PI / 2, 0]}
          scale={0.58}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Plane021.geometry}
          material={materials.Red}
          position={[2.01, 2.7, 3.64]}
          rotation={[0.8, -Math.PI / 2, 0]}
          scale={0.58}
        />
        <mesh
          geometry={nodes.Plane022.geometry}
          material={materials.Red}
          position={[2.26, 2.79, 3.55]}
          rotation={[0.8, -Math.PI / 2, 0]}
          scale={0.58}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Plane034.geometry}
          material={materials.White}
          position={[2.65, 2.22, 2.65]}
          castShadow={true}
          receiveShadow={true}
        />
      </mesh>
      <mesh geometry={nodes.Ground.geometry} material={materials.Ground} />
      <mesh
        geometry={nodes.Sand001.geometry}
        material={materials.Sand}
        position={[-1.17, -0.24, 1.61]}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Sand002.geometry}
        material={materials.Sand}
        position={[-2.85, -0.13, 2.97]}
        scale={0.76}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Sand003.geometry}
        material={materials.Sand}
        position={[-0.73, -0.2, -0.78]}
        scale={[1.55, 0.76, 1.55]}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Sand004.geometry}
        material={materials.Sand}
        position={[0.9, 0.06, -1.98]}
        scale={[0.77, 0.76, 0.77]}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Torch.geometry}
        material={materials.Wood}
        position={[3.72, 0.47, -3.55]}
        castShadow={true}
        receiveShadow={true}
      >
        <mesh
          geometry={nodes.Circle003_1.geometry}
          material={materials.ark}
          castShadow={true}
          receiveShadow={true}
        />
      </mesh>
      <mesh
        geometry={nodes.Torch001.geometry}
        material={materials.Wood}
        position={[1.58, 0.47, -3.55]}
        castShadow={true}
        receiveShadow={true}
      >
        <mesh
          geometry={nodes.Circle005.geometry}
          material={materials.ark}
          castShadow={true}
          receiveShadow={true}
        />
      </mesh>
      <mesh
        geometry={nodes.Water.geometry}
        material={materials.Water}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[0, -0.11, 0]}
        scale={[150.15, 1, 150.15]}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Rocks}
        position={[0.43, 0.47, -2.5]}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials.Rocks}
        position={[1.2, 0.47, -2.32]}
        scale={0.81}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials.Rocks}
        position={[-3.09, 0.47, 0.13]}
        scale={0.81}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials.Rocks}
        position={[-1.85, 0.15, 3.13]}
        scale={1.88}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials.Rocks}
        position={[-1.43, -0.05, 2.66]}
        scale={1.88}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Plane029.geometry}
        material={materials["Sand.001"]}
        position={[-2.54, 0.47, 1.83]}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Roundcube.geometry}
        material={nodes.Roundcube.material}
        position={[-2.16, 1.01, 2]}
        scale={0.6}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Roundcube001.geometry}
        material={nodes.Roundcube001.material}
        position={[-2.16, 0.87, 1.61]}
        scale={0.5}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Roundcube002.geometry}
        material={nodes.Roundcube002.material}
        position={[-2.11, 0.72, 2.02]}
        scale={0.54}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Roundcube003.geometry}
        material={nodes.Roundcube003.material}
        position={[-2.63, 0.77, 2.24]}
        scale={0.54}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Roundcube004.geometry}
        material={nodes.Roundcube004.material}
        position={[-2.37, 1.03, 2.2]}
        scale={0.54}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Circle001.geometry}
        material={materials["Sand.001"]}
        position={[-3.32, 0.47, 1.58]}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[-2.97, 1.78, 1.58]}
        scale={[1.02, 0.78, 0.78]}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials["Sand.001"]}
        position={[-3.37, 0.47, 2.42]}
        scale={1.25}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Plane030.geometry}
        material={materials.Red}
        position={[-1.88, 0.62, 1.33]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.64}
        castShadow={true}
        receiveShadow={true}
      />
    </group>
  );
}

function Beach_map_edit() {
  const userId = useAppSelector((state) => state.user.userData.userId);

  return (
    <>
      {/* 카메라, 빛 */}
      <CameraAndLight />
      {/* Base Grass와 Flowers */}
      <BassGrassAndFlowersEdit />
      {/* Base Grass와 Flowers를 제외한 나머지 objects */}
      <Model_edit />
      {/* 방명록 */}
      <GuestBookModel />
      {/* 시바 */}
      {userId <= 100 && <Siba />}
    </>
  );
}

export default Beach_map_edit;
