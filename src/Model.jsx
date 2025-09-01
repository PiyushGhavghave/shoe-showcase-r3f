import { useGLTF } from "@react-three/drei";

export default function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} rotation={[0, -Math.PI / 1.8, -0.2]} />;
}
