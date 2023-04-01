/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/park_map.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import CameraAndLight from "./CameraAndLight";
import BaseGrassAndFlowers from "./BaseGrassAndFlowers";
import BassGrassAndFlowersEdit from "./BaseGrassAndFlowersEdit";
import GuestBookModel from "../../GuestBook/GuestBookModel/GuestBook";

type GLTFResult = GLTF & {
  nodes: {
    Water: THREE.Mesh;
    Base_Ground: THREE.Mesh;
    Rock: THREE.Mesh;
    Grass004: THREE.Mesh;
    Bench: THREE.Mesh;
    Vert001: THREE.Mesh;
    Vert002: THREE.Mesh;
    Vert004: THREE.Mesh;
    Vert005: THREE.Mesh;
    Circle001: THREE.Mesh;
    Circle001_1: THREE.Mesh;
    Tree1: THREE.Mesh;
    Cube033: THREE.Mesh;
    Cube035: THREE.Mesh;
    Cube036: THREE.Mesh;
    Cube037: THREE.Mesh;
    Cube038: THREE.Mesh;
    Cube039: THREE.Mesh;
    Cube040: THREE.Mesh;
    Cube041: THREE.Mesh;
    Cube042: THREE.Mesh;
    Cube043: THREE.Mesh;
    Circle001_2: THREE.Mesh;
    Circle001_3: THREE.Mesh;
    Rock004: THREE.Mesh;
    Grass005: THREE.Mesh;
    Grass006: THREE.Mesh;
    Bg: THREE.Mesh;
    Base_Grass: THREE.Mesh;
    Rock006: THREE.Mesh;
    Grass012: THREE.Mesh;
    Grass014: THREE.Mesh;
    Grass015: THREE.Mesh;
    Tree1001: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube012_1: THREE.Mesh;
    Cube013: THREE.Mesh;
    Cube014: THREE.Mesh;
    Cube015: THREE.Mesh;
    Cube016: THREE.Mesh;
    Cube017: THREE.Mesh;
    Cube018: THREE.Mesh;
    Cube019: THREE.Mesh;
    Tree1002: THREE.Mesh;
    Cube020: THREE.Mesh;
    Cube021: THREE.Mesh;
    Cube022: THREE.Mesh;
    Cube023: THREE.Mesh;
    Cube024: THREE.Mesh;
    Cube025: THREE.Mesh;
    Cube026: THREE.Mesh;
    Cube027: THREE.Mesh;
    Cube028: THREE.Mesh;
    Cube029: THREE.Mesh;
    Tree1003: THREE.Mesh;
    Cube030: THREE.Mesh;
    Cube031: THREE.Mesh;
    Cube032: THREE.Mesh;
    Cube034: THREE.Mesh;
    Cube044: THREE.Mesh;
    Cube045: THREE.Mesh;
    Cube046: THREE.Mesh;
    Cube047: THREE.Mesh;
    Cube048: THREE.Mesh;
    Cube049: THREE.Mesh;
    Tree1004: THREE.Mesh;
    Cube050: THREE.Mesh;
    Cube051: THREE.Mesh;
    Cube052: THREE.Mesh;
    Cube053: THREE.Mesh;
    Cube054: THREE.Mesh;
    Cube055: THREE.Mesh;
    Cube056: THREE.Mesh;
    Cube057: THREE.Mesh;
    Cube058: THREE.Mesh;
    Cube059: THREE.Mesh;
    Bench002: THREE.Mesh;
  };
  materials: {
    Water: THREE.MeshStandardMaterial;
    Ground: THREE.MeshStandardMaterial;
    ["Rock.001"]: THREE.MeshStandardMaterial;
    ["Grass.003"]: THREE.MeshStandardMaterial;
    Wood: THREE.MeshStandardMaterial;
    Metal: THREE.MeshStandardMaterial;
    Light: THREE.MeshStandardMaterial;
    Tree: THREE.MeshStandardMaterial;
    leaf2: THREE.MeshStandardMaterial;
    Rock: THREE.MeshStandardMaterial;
    ["Grass.001"]: THREE.MeshStandardMaterial;
    Bg: THREE.MeshStandardMaterial;
    Grass: THREE.MeshStandardMaterial;
  };
};

export function Model_edit(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    `${process.env.PUBLIC_URL}/models/park_map.glb`
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Water.geometry}
        material={materials.Water}
        position={[-0.39, 0.23, 5.45]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Base_Ground.geometry}
        material={materials.Ground}
        position={[-0.3, 0.15, 0.19]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Rock.geometry}
        material={materials["Rock.001"]}
        position={[-3.48, 0.15, 1.53]}
        scale={1.19}
      />
      <mesh
        geometry={nodes.Grass004.geometry}
        material={materials["Grass.003"]}
        position={[-2.84, 0, 1.48]}
        scale={1.6}
      />
      <mesh
        geometry={nodes.Bench.geometry}
        material={materials.Wood}
        position={[-1.05, -0.02, -2.01]}
        scale={0.76}
        castShadow={true}
        receiveShadow={true}
      >
        <mesh geometry={nodes.Vert001.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Vert002.geometry} material={materials.Metal} />
        <mesh
          geometry={nodes.Vert004.geometry}
          material={materials.Metal}
          position={[1.96, 0, 0.04]}
          rotation={[0, -0.01, 0]}
        />
        <mesh
          geometry={nodes.Vert005.geometry}
          material={materials.Metal}
          position={[1.96, 0, 0.04]}
          rotation={[0, -0.01, 0]}
        />
      </mesh>
      <group
        position={[3.1, 0, -1.97]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.96}
      >
        <mesh
          geometry={nodes.Circle001.geometry}
          material={materials.Metal}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Circle001_1.geometry}
          material={materials.Light}
          castShadow={true}
          receiveShadow={true}
        />
      </group>
      <mesh
        geometry={nodes.Tree1.geometry}
        material={materials.Tree}
        position={[-3.8, 0.2, -3.4]}
        rotation={[0, -0.12, 0]}
        scale={1.12}
        castShadow={true}
        receiveShadow={true}
      >
        <mesh
          geometry={nodes.Cube033.geometry}
          material={materials.leaf2}
          position={[-0.07, 2.27, 0.05]}
          rotation={[0.16, 0.01, 0.03]}
          scale={0.65}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube035.geometry}
          material={materials.leaf2}
          position={[0.57, 2.04, 0.04]}
          rotation={[3.11, 0.12, -1.32]}
          scale={0.6}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube036.geometry}
          material={materials.leaf2}
          position={[0.7, 1.35, 0]}
          rotation={[-3.11, 1.18, -1.45]}
          scale={0.81}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube037.geometry}
          material={materials.leaf2}
          position={[-0.28, 1.94, -0.49]}
          rotation={[-3.11, 1.18, -1.45]}
          scale={0.68}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube038.geometry}
          material={materials.leaf2}
          position={[-0.45, 1.41, 0.66]}
          rotation={[0.67, 0.67, 1.01]}
          scale={0.5}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube039.geometry}
          material={materials.leaf2}
          position={[-0.24, 1.83, 0.45]}
          rotation={[0.15, 0.01, 1.56]}
          scale={0.45}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube040.geometry}
          material={materials.leaf2}
          position={[-0.59, 1.43, -0.06]}
          rotation={[0.35, -0.27, 1.53]}
          scale={0.63}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube041.geometry}
          material={materials.leaf2}
          position={[0.16, 1.28, 0.6]}
          rotation={[2.51, -0.88, 3]}
          scale={0.81}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube042.geometry}
          material={materials.leaf2}
          position={[0.2, 1.39, -0.47]}
          rotation={[1.38, -0.51, 1.28]}
          scale={0.74}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube043.geometry}
          material={materials.leaf2}
          position={[0.17, 1.8, 0.33]}
          rotation={[-0.32, 0.62, 1.81]}
          scale={0.53}
          castShadow={true}
          receiveShadow={true}
        />
      </mesh>
      <group
        position={[-3.88, -0.01, -1.85]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.97}
      >
        <mesh
          geometry={nodes.Circle001_2.geometry}
          material={materials.Metal}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Circle001_3.geometry}
          material={materials.Light}
          castShadow={true}
          receiveShadow={true}
        />
      </group>
      <mesh
        geometry={nodes.Rock004.geometry}
        material={materials.Rock}
        position={[3.07, 0.08, 1.63]}
        rotation={[-Math.PI, 0, 0]}
        scale={[1.34, 0.69, 1.03]}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Grass005.geometry}
        material={materials["Grass.001"]}
        position={[2.4, 0.03, 2.27]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={1.27}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Grass006.geometry}
        material={materials["Grass.001"]}
        position={[-3.67, -0.09, -1.62]}
        rotation={[Math.PI, -0.68, Math.PI]}
        scale={1.8}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Bg.geometry}
        material={materials.Bg}
        position={[0, -0.94, -0.01]}
        scale={[-109.05, -24.88, -109.05]}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Base_Grass.geometry}
        material={materials.Grass}
        position={[-0.31, -0.15, 4.52]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 2.09]}
        // castShadow={true}
        receiveShadow={true}
        userData={{ ground: true }}
      />
      <mesh
        geometry={nodes.Rock006.geometry}
        material={materials.Rock}
        position={[-2.44, 0.03, 3.6]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.86}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Grass012.geometry}
        material={materials["Grass.001"]}
        position={[0.11, -0.01, -0.06]}
        rotation={[-Math.PI, 0.94, -Math.PI]}
        scale={1.27}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Grass014.geometry}
        material={materials["Grass.001"]}
        position={[3.4, 0, 0.93]}
        rotation={[Math.PI, -0.8, Math.PI]}
        scale={1.77}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Grass015.geometry}
        material={materials["Grass.001"]}
        position={[-3.94, -0.01, -1.51]}
        rotation={[0, -1.11, 0]}
        scale={1.35}
        castShadow={true}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Tree1001.geometry}
        material={materials.Tree}
        position={[-1.9, 0.11, -3.47]}
        rotation={[0, -0.12, 0]}
        scale={0.98}
        castShadow={true}
        receiveShadow={true}
      >
        <mesh
          geometry={nodes.Cube011.geometry}
          material={materials.leaf2}
          position={[-0.07, 2.27, 0.05]}
          rotation={[0.16, 0.01, 0.03]}
          scale={0.65}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube011.geometry}
          material={materials.leaf2}
          position={[0.57, 2.04, 0.04]}
          rotation={[3.11, 0.12, -1.32]}
          scale={0.6}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube012_1.geometry}
          material={materials.leaf2}
          position={[0.7, 1.35, 0]}
          rotation={[-3.11, 1.18, -1.45]}
          scale={0.81}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube013.geometry}
          material={materials.leaf2}
          position={[-0.28, 1.94, -0.49]}
          rotation={[-3.11, 1.18, -1.45]}
          scale={0.68}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube014.geometry}
          material={materials.leaf2}
          position={[-0.45, 1.41, 0.66]}
          rotation={[0.67, 0.67, 1.01]}
          scale={0.5}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube015.geometry}
          material={materials.leaf2}
          position={[-0.24, 1.83, 0.45]}
          rotation={[0.15, 0.01, 1.56]}
          scale={0.45}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube016.geometry}
          material={materials.leaf2}
          position={[-0.59, 1.43, -0.06]}
          rotation={[0.35, -0.27, 1.53]}
          scale={0.63}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube017.geometry}
          material={materials.leaf2}
          position={[0.16, 1.28, 0.6]}
          rotation={[2.51, -0.88, 3]}
          scale={0.81}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube018.geometry}
          material={materials.leaf2}
          position={[0.2, 1.39, -0.47]}
          rotation={[1.38, -0.51, 1.28]}
          scale={0.74}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube019.geometry}
          material={materials.leaf2}
          position={[0.17, 1.8, 0.33]}
          rotation={[-0.32, 0.62, 1.81]}
          scale={0.53}
          castShadow={true}
          receiveShadow={true}
        />
      </mesh>
      <mesh
        geometry={nodes.Tree1002.geometry}
        material={materials.Tree}
        position={[-0.22, 0.11, -3.47]}
        rotation={[0, 0.18, 0]}
        scale={0.88}
        castShadow={true}
        receiveShadow={true}
      >
        <mesh
          geometry={nodes.Cube020.geometry}
          material={materials.leaf2}
          position={[-0.07, 2.27, 0.05]}
          rotation={[0.16, 0.01, 0.03]}
          scale={0.65}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube021.geometry}
          material={materials.leaf2}
          position={[0.57, 2.04, 0.04]}
          rotation={[3.11, 0.12, -1.32]}
          scale={0.6}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube022.geometry}
          material={materials.leaf2}
          position={[0.7, 1.35, 0]}
          rotation={[-3.11, 1.18, -1.45]}
          scale={0.81}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube023.geometry}
          material={materials.leaf2}
          position={[-0.28, 1.94, -0.49]}
          rotation={[-3.11, 1.18, -1.45]}
          scale={0.68}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube024.geometry}
          material={materials.leaf2}
          position={[-0.45, 1.41, 0.66]}
          rotation={[0.67, 0.67, 1.01]}
          scale={0.5}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube025.geometry}
          material={materials.leaf2}
          position={[-0.24, 1.83, 0.45]}
          rotation={[0.15, 0.01, 1.56]}
          scale={0.45}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube026.geometry}
          material={materials.leaf2}
          position={[-0.59, 1.43, -0.06]}
          rotation={[0.35, -0.27, 1.53]}
          scale={0.63}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube027.geometry}
          material={materials.leaf2}
          position={[0.16, 1.28, 0.6]}
          rotation={[2.51, -0.88, 3]}
          scale={0.81}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube028.geometry}
          material={materials.leaf2}
          position={[0.2, 1.39, -0.47]}
          rotation={[1.38, -0.51, 1.28]}
          scale={0.74}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube029.geometry}
          material={materials.leaf2}
          position={[0.17, 1.8, 0.33]}
          rotation={[-0.32, 0.62, 1.81]}
          scale={0.53}
          castShadow={true}
          receiveShadow={true}
        />
      </mesh>
      <mesh
        geometry={nodes.Tree1003.geometry}
        material={materials.Tree}
        position={[3.04, 0.21, -3.47]}
        rotation={[0, -0.12, 0]}
        scale={1.23}
        castShadow={true}
        receiveShadow={true}
      >
        <mesh
          geometry={nodes.Cube030.geometry}
          material={materials.leaf2}
          position={[-0.07, 2.27, 0.05]}
          rotation={[0.16, 0.01, 0.03]}
          scale={0.65}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube031.geometry}
          material={materials.leaf2}
          position={[0.57, 2.04, 0.04]}
          rotation={[3.11, 0.12, -1.32]}
          scale={0.6}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube032.geometry}
          material={materials.leaf2}
          position={[0.7, 1.35, 0]}
          rotation={[-3.11, 1.18, -1.45]}
          scale={0.81}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube034.geometry}
          material={materials.leaf2}
          position={[-0.28, 1.94, -0.49]}
          rotation={[-3.11, 1.18, -1.45]}
          scale={0.68}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube044.geometry}
          material={materials.leaf2}
          position={[-0.45, 1.41, 0.66]}
          rotation={[0.67, 0.67, 1.01]}
          scale={0.5}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube045.geometry}
          material={materials.leaf2}
          position={[-0.24, 1.83, 0.45]}
          rotation={[0.15, 0.01, 1.56]}
          scale={0.45}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube046.geometry}
          material={materials.leaf2}
          position={[-0.59, 1.43, -0.06]}
          rotation={[0.35, -0.27, 1.53]}
          scale={0.63}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube047.geometry}
          material={materials.leaf2}
          position={[0.16, 1.28, 0.6]}
          rotation={[2.51, -0.88, 3]}
          scale={0.81}
        />
        <mesh
          geometry={nodes.Cube048.geometry}
          material={materials.leaf2}
          position={[0.2, 1.39, -0.47]}
          rotation={[1.38, -0.51, 1.28]}
          scale={0.74}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube049.geometry}
          material={materials.leaf2}
          position={[0.17, 1.8, 0.33]}
          rotation={[-0.32, 0.62, 1.81]}
          scale={0.53}
          castShadow={true}
          receiveShadow={true}
        />
      </mesh>
      <mesh
        geometry={nodes.Tree1004.geometry}
        material={materials.Tree}
        position={[1.45, 0.06, -3.47]}
        rotation={[0, -0.12, 0]}
        scale={0.8}
        castShadow={true}
        receiveShadow={true}
      >
        <mesh
          geometry={nodes.Cube050.geometry}
          material={materials.leaf2}
          position={[-0.07, 2.27, 0.05]}
          rotation={[0.16, 0.01, 0.03]}
          scale={0.65}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube051.geometry}
          material={materials.leaf2}
          position={[0.57, 2.04, 0.04]}
          rotation={[3.11, 0.12, -1.32]}
          scale={0.6}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube052.geometry}
          material={materials.leaf2}
          position={[0.7, 1.35, 0]}
          rotation={[-3.11, 1.18, -1.45]}
          scale={0.81}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube053.geometry}
          material={materials.leaf2}
          position={[-0.28, 1.94, -0.49]}
          rotation={[-3.11, 1.18, -1.45]}
          scale={0.68}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube054.geometry}
          material={materials.leaf2}
          position={[-0.45, 1.41, 0.66]}
          rotation={[0.67, 0.67, 1.01]}
          scale={0.5}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube055.geometry}
          material={materials.leaf2}
          position={[-0.24, 1.83, 0.45]}
          rotation={[0.15, 0.01, 1.56]}
          scale={0.45}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube056.geometry}
          material={materials.leaf2}
          position={[-0.59, 1.43, -0.06]}
          rotation={[0.35, -0.27, 1.53]}
          scale={0.63}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube057.geometry}
          material={materials.leaf2}
          position={[0.16, 1.28, 0.6]}
          rotation={[2.51, -0.88, 3]}
          scale={0.81}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube058.geometry}
          material={materials.leaf2}
          position={[0.2, 1.39, -0.47]}
          rotation={[1.38, -0.51, 1.28]}
          scale={0.74}
          castShadow={true}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes.Cube059.geometry}
          material={materials.leaf2}
          position={[0.17, 1.8, 0.33]}
          rotation={[-0.32, 0.62, 1.81]}
          scale={0.53}
          castShadow={true}
          receiveShadow={true}
        />
      </mesh>
      <mesh
        geometry={nodes.Bench002.geometry}
        material={materials.Wood}
        position={[0.43, -0.02, -1.99]}
        rotation={[0, 0.01, 0]}
        scale={0.76}
        castShadow={true}
        receiveShadow={true}
      />
    </group>
  );
}

function Park_map_edit() {
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
    </>
  );
}

export default Park_map_edit;
