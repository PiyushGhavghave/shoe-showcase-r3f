import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment , Center} from "@react-three/drei";
import Model from "./Model";

import "./App.css";
import { UploadModel } from "./UploadModel";
import { useState } from "react";

export default function App() {
  const [modelUrl, setModelUrl] = useState("/nike_air_zoom_pegasus_36-transformed.glb");
  return (
    <div className="showcase">
      {/* Left Section */}
      <div className="info">
        <h1 className="title">3D Model Viewer</h1>
        <p className="subtitle">Upload your own .glb or .gltf file to preview in 3D.</p>
        <UploadModel onUpload={setModelUrl} />
      </div>

      {/* Right Section */}
      <div className="viewer-card">
        <Canvas camera={{ position: [0, 1, 3], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Center>
            <Model url={modelUrl} />
          </Center>
          <OrbitControls enablePan={false} />
          <Environment preset="studio" />
        </Canvas>
      </div>
    </div>
  );
}
