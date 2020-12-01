import { OrbitControls } from "drei/controls/OrbitControls";
import Head from "next/head";
import React from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";

interface Props {}

const ThreeScene = () => (
  <Canvas
    tabIndex={-1}
    shadowMap
    onCreated={({ gl }) => {
      gl.shadowMap.enabled = true;
      gl.shadowMap.type = THREE.PCFSoftShadowMap;
    }}
  >
    <OrbitControls
      autoRotate
      autoRotateSpeed={3}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
      enableZoom={false}
    />
    <ambientLight />
    <mesh position={[0, 0, 0]} scale={[0.14, 0.14, 0.14]}>
      <dodecahedronGeometry args={[10, 0]} />
      <meshBasicMaterial color={"#252f3f"} wireframe={true} />
    </mesh>
  </Canvas>
);

const Home = (_props: Props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Nextjs r3f</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThreeScene />
    </React.Fragment>
  );
};

export default Home;
