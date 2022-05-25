import ThreeScene from "./components/ThreeScene";
import Sphere from "./components/Sphere";
import Box from "./components/Box";
import Text from "./components/Text";
import Matcap from "./components/Matcap";
import { OrbitControls, Stars } from "@react-three/drei";
import Torus from "./components/Torus";
import "./App.css";
import Camera from "./components/Camera";
import OtherSphere from "./components/OtherSphere";
import { Suspense } from "react";
import Bricks from "./components/Bricks";
import Lights from "./components/Lights";
import { Environment } from "@react-three/drei";
import HDR from "./assets/OutdoorHDRI015_1K-HDR.exr";
// import Mate from "./components/Mate";

const App = () => {
  return (
    <div className="container-app">
      <ThreeScene>
        <Camera />
        <Lights />
        <color attach="background" args={["#161c24"]} />
        <Sphere color="#00ff00" position={[-50, 0, 0]} args={[15, 32, 16]} />
        <Sphere color="#00ff" position={[-50, 0, 0]} />
        <OtherSphere position={[100, 0, 0]} args={[15, 32, 16]} />
        <Torus position={[-90, 0, 0]} />
        <Text position={[-20, -6, 0]} />
        <Bricks />
        <Suspense fallback={null}>
          <Environment files={HDR} />
          {/* <Mate /> */}
        </Suspense>
        <OrbitControls autoRotate />
        <Stars />
      </ThreeScene>
    </div>
  );
};

export default App;
