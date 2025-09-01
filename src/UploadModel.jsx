import { useState } from "react";

export const UploadModel = ({ onUpload }) => {
    const [fileName, setFileName] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setFileName(file.name);
          const url = URL.createObjectURL(file);
          onUpload(url); // pass blob URL to parent
        }
    };

    return (
    <div className="upload-container">
      <label className="upload-label">
        <input type="file" accept=".glb,.gltf" onChange={handleFileChange} />
        <span>Upload 3D Model</span>
      </label>
      {fileName && <p className="file-name">{fileName}</p>}
    </div>
  );
}