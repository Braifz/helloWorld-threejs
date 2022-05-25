import { PerspectiveCamera } from "@react-three/drei";

const Camera = () => {
  return <PerspectiveCamera makeDefault position={[230, 50, 250]} fov={25} />;
};

export default Camera;
