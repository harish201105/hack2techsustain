import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import TrimComponent from './TrimComponent';

const VideoTrimmer = () => {
  const [videoFile, setVideoFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setVideoFile(URL.createObjectURL(acceptedFiles[0]));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'video/*'
  });

  const handleTrim = (startTime, endTime, setTrimmedVideo) => {
    console.log(`Trimmed video from ${startTime} to ${endTime}`);
    // Mock trimming process, you need to implement actual trimming logic
    setTrimmedVideo(videoFile);
  };

  return (
    <div>
      <div {...getRootProps()} style={{ border: '1px dashed #ccc', padding: '20px', textAlign: 'center' }}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      {videoFile && <TrimComponent videoFile={videoFile} onTrim={handleTrim} />}
    </div>
  );
};

export default VideoTrimmer;