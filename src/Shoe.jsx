import { useGLTF } from "@react-three/drei";

export default function Shoe() {
  const { scene } = useGLTF("/nike_air_zoom_pegasus_36-transformed.glb");
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} rotation={[0, -Math.PI / 1.8, -0.2]} />;
}
