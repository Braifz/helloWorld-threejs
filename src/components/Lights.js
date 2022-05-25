const Lights = () => {
  return (
    <>
      {/* <spotLight position={[]}/> */}
      <directionalLight
        position={[10, 10, 10]}
        color={"#fff"}
        intensity={1.4}
      />
      {/* <pointLight position={[0, -100, 0]} color={"#ff0000"} intensity={2.5} /> */}
      <ambientLight color={"#fff"} intensity={0.4} />
    </>
  );
};

export default Lights;
