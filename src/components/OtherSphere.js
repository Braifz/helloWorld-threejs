const OtherSphere = ({ position, args }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={args} />
      <meshNormalMaterial flatShading={true} />
    </mesh>
  );
};

export default OtherSphere;
