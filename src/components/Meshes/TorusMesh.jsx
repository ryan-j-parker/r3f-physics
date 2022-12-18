/* eslint-disable react/no-unknown-property */
export default function TorusMesh() {
  return (
    <>
      <mesh



      >
        <meshStandardMaterial />
        <torusGeometry 
          args={[1, 0.35, 16, 100]}
          
        />
      </mesh>
    </>
  );
}
