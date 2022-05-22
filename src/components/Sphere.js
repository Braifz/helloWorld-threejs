const Sphere = ({ color, position, args }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={args} />
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
};

export default Sphere;
