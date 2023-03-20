import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SMain } from "./styles";

import Base_map_new from "../../components/Garden/Base_map_new";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import Base_map_new_edit from "../../components/Garden/Base_map_new_edit";
// import Base_map_new_test from "../../components/Garden/Base_map_new_test";

const Scene = () => {
  return (
    <>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        {/* <Base_map_new /> */}
        <Base_map_new_edit />

        {/* <Base_map /> */}
        {/* <EffectComposer multisampling={8}> */}
        {/* <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={1} /> */}
        {/* </EffectComposer> */}
      </Suspense>
      {/* REPLACE THIS LIGHT AS NEEDED IT'S A GOOD START */}
    </>
  );
};

const GardenEdit = () => {
  const canvasRef = useRef<any>();
  console.log(canvasRef);

  const handlePositionUpdate = () => {
    console.log("편집 완료 버튼 클릭");
  };

  return (
    <SMain>
      <Canvas shadows={true} ref={canvasRef}>
        {/* REMOVE ORBIT CONTROLS TO FORCE THE CAMERA VIEW */}
        <OrbitControls
          maxPolarAngle={Math.PI / 2.8}
          minZoom={30}
          maxZoom={200}
          // 쉬프트 마우스 왼쪽 이동 막는 기능
          enablePan={false}
        />
        <Scene></Scene>
      </Canvas>
      <div className="info__wrapper">
        <div className="background" onClick={() => handlePositionUpdate()}>
          <p>완료</p>
        </div>
      </div>
    </SMain>
  );
};

export default GardenEdit;
