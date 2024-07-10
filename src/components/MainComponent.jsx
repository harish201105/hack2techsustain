// src/components/MainComponent.jsx
import React, { useState } from 'react';
import UploadComponent from './UploadComponent';
import TrimComponent from './TrimComponent';
import Login from './Login'; // Import the Login component

const MainComponent = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); // State to track authentication

  const handleFileUpload = (file) => {
    setVideoFile(file);
  };

  const handleLogin = () => {
    // Implement authentication logic here (e.g., API call, validation)
    // For now, simulate authentication success
    setLoggedIn(true);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Video Upload and Trim</h1>
      {!loggedIn ? (
        <Login onLogin={handleLogin} /> // Render login form if not logged in
      ) : !videoFile ? (
        <UploadComponent onFileUpload={handleFileUpload} />
      ) : (
        <TrimComponent videoFile={videoFile} />
      )}
    </div>
  );
};

export default MainComponent;