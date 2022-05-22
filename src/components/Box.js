const Box = ({ color, position, args }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={args} />
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
};

export default Box;
