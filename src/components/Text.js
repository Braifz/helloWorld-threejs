import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import roboto from "../assets/Roboto Black_Regular.json";

extend({ TextGeometry });

const Text = ({ position }) => {
  const font = new FontLoader().parse(roboto);
  return (
    <mesh position={position}>
      <textGeometry args={["Hello World!!", { font, size: 12, height: 3 }]} />
      <meshPhysicalMaterial attach="material" color={"white"} />
    </mesh>
  );
};

export default Text;
