const Torus = ({ position }) => {
  return (
    <mesh position={position}>
      <torusBufferGeometry args={[10, 3, 16, 100]} />
      <meshMatcapMaterial />
    </mesh>
  );
};

export default Torus;
