/* eslint-disable react/no-unknown-property */
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import TorusMesh from '../Meshes/TorusMesh';

export default function Experience() {
  // const rectLight = () => {
  //     return (
  //         <rectAreaLight args={['#03ccda', 3, 2, 2]} />
  //     );
  // };

  return (
    <Canvas>
      {/* <ambientLight /> */}
      <rectAreaLight 
        args={['#03ccda', 3, 2, 2]} 
        position={[2, 2, 2]}
      />;
      <OrbitControls />
      <TorusMesh />
    </Canvas>
  );
}
