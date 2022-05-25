import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import MateModel from "../assets/models/mate/scene.gltf";

export default function Mate({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(MateModel);
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-8.64, 0, -31.83]}
            rotation={[-Math.PI / 2, 0, -2.7]}
            scale={0.96}
          >
            <mesh
              geometry={nodes.matero_MATERO_0.geometry}
              material={materials.MATERO}
            />
          </group>
          <group
            position={[-2.91, 11.93, -24.66]}
            rotation={[-1.19, 0.17, 0.4]}
            scale={[1.17, 1.17, 4.14]}
          >
            <mesh
              geometry={nodes.bombilla_BOMBILA_0.geometry}
              material={materials.BOMBILA}
            />
          </group>
          <group
            position={[9.44, -19.34, -82.78]}
            rotation={[-0.23, 1.18, 0.85]}
            scale={[0.29, 0.29, 1.24]}
          >
            <group position={[0, 7.3, -22.08]}>
              <mesh
                geometry={nodes.spoon_SPOON_0.geometry}
                material={materials.SPOON}
              />
            </group>
          </group>
          <group
            position={[10.54, -34.24, -52.61]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[1.3, 1.3, 1]}
          >
            <mesh
              geometry={nodes.ere_BLAT_0.geometry}
              material={materials.BLAT}
            />
          </group>
          <group
            position={[39.65, -24.22, -50.57]}
            rotation={[-Math.PI / 2, 0, 0.3]}
            scale={[1.74, 1.74, 1]}
          >
            <mesh
              geometry={nodes.yerba_ROZSYPANA_0.geometry}
              material={materials.ROZSYPANA}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(MateModel);
