import ThreeScene from "./components/ThreeScene";
import Sphere from "./components/Sphere";
import Box from "./components/Box";
import Text from "./components/Text";
import { OrbitControls, Stars } from "@react-three/drei";

import "./App.css";

const App = () => {
  return (
    <div className="container-app">
      <ThreeScene>
        <color attach="background" args={["#161c24"]} />
        <Sphere color="#00ff00" position={[-50, 0, 0]} args={[15, 32, 16]} />
        <Sphere color="#00ff" position={[-50, 0, 0]} />
        <Text position={[-20, -6, 0]} />
        <ambientLight />
        <OrbitControls />
        <Stars />
      </ThreeScene>
    </div>
  );
};

export default App;
