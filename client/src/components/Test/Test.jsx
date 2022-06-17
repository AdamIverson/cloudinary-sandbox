import React, { useState, useEffect } from "react";

function Test() {
  const [fileInputState, setFileInputState] = useState("");
  // const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    }
  }

  const uploadImage = async (jazz) => {
     try {
      await fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify({data: jazz}),
        headers: {'Content-type': 'application/json'}
      }
      )
     } catch (error) {
      console.error(error);

     }
  }

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if(!previewSource) return;
    uploadImage(previewSource);
  }
  return (
    <div>
      <h1>test</h1>
      <form onSubmit={handleSubmitFile}>
        <input
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
        />
        <button type="submit">BUTTON</button>
      </form>
      {previewSource && (
        <img 
        src={previewSource}
        alt="chosen"
        />
      )}
    </div>
  );
}

export default Test;
