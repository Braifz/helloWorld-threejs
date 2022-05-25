import { Text3D } from "@react-three/drei";
import roboto from "../assets/RobotoBlack_Regular.json";

const Text = ({ position }) => {
  return (
    <Text3D font={roboto} position={position} size={13} height={10}>
      Hello world!
      <meshNormalMaterial />
    </Text3D>
  );
};

export default Text;
