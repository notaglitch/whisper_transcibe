import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file || !email) {
      alert("Please provide both an audio file and an email.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", email);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully! You'll receive an email when it's ready.");
      } else {
        alert("Error uploading file.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold mb-6">Upload an Audio File</h2>

      <div
        className="w-96 h-40 border-2 border-dashed border-gray-400 flex items-center justify-center rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {file ? (
          <p className="text-green-500">{file.name}</p>
        ) : (
          <p className="text-gray-500">Drag & Drop your file here or click to upload</p>
        )}
      </div>

      <input
        type="file"
        className="hidden"
        id="fileInput"
        accept="audio/*"
        onChange={handleFileChange}
      />
      <label
        htmlFor="fileInput"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700"
      >
        Select File
      </label>

      <input
        type="email"
        placeholder="Enter your email"
        className="mt-4 px-4 py-2 border rounded-md w-80"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Submit
      </button>
    </div>
  );
};

export default FileUpload;
