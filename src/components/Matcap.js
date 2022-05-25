import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";
import Rock from "../assets/materials/Rock035_1K_NormalDX.jpg";

const Matcap = () => {
  const matcap = useLoader(TextureLoader, Rock);
  return (
    <mesh position={[-120, 0, 0]}>
      <torusBufferGeometry args={[10, 3, 16, 100]} />
      <meshMatcapMaterial matcap={matcap} />
    </mesh>
  );
};

export default Matcap;
