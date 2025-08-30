import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment , Center} from "@react-three/drei";
import Shoe from "./Shoe";
import "./App.css";

export default function App() {
  return (
    <div className="showcase">
      {/* Left Section */}
      <div className="info">
        <h1 className="title">Nike Air Zoom</h1>
        <p className="subtitle">
          Elevate your style and performance with next-gen comfort.
        </p>
        <button className="cta-button">Shop Now</button>
      </div>

      {/* Right Section */}
      <div className="viewer-card">
        <Canvas camera={{ position: [0, 1, 3], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Center>
            <Shoe />
          </Center>
          <OrbitControls enablePan={false} />
          <Environment preset="studio" />
        </Canvas>
      </div>
    </div>
  );
}
