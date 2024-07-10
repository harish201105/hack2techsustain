// src/components/OutputComponent.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Out from './Out';

const OutputComponent = () => {
  const location = useLocation();
  const { trimmedVideo } = location.state || {};

  return (
    <Out>
      <h1>Trimmed Video Output</h1>
      {trimmedVideo ? (
        <ReactPlayer url={trimmedVideo} controls />
      ) : (
        <p>No trimmed video available.</p>
      )}
    </Out>
  );
};

export default OutputComponent;