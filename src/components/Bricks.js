import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";
import Color from "../assets/materials/Rock035_1K_Color.jpg";
import NormalDX from "../assets/materials/Rock035_1K_NormalDX.jpg";
import AmbientOcclu from "../assets/materials/Rock035_1K_AmbientOcclusion.jpg";
import Displacement from "../assets/materials/Rock035_1K_Displacement.jpg";
import Roughness from "../assets/materials/Rock035_1K_Roughness.jpg";

const Bricks = () => {
  const baseColor = useLoader(TextureLoader, Color);
  const normalMap = useLoader(TextureLoader, NormalDX);
  const aoMap = useLoader(TextureLoader, AmbientOcclu);
  const displacementMap = useLoader(TextureLoader, Displacement);
  const roughnessMap = useLoader(TextureLoader, Roughness);

  return (
    <mesh position={[-140, 0, 0]}>
      <boxBufferGeometry args={[20, 20, 20, 120, 120, 120]} />
      <meshStandardMaterial
        map={baseColor}
        normalMap={normalMap}
        aoMap={aoMap}
        displacementMap={displacementMap}
        roughnessMap={roughnessMap}
        displacementScale={0.01}
      />
    </mesh>
  );
};

export default Bricks;
