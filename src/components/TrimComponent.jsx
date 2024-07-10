import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.css';
import { useNavigate } from 'react-router-dom';

const TrimComponent = ({ videoFile, onTrim }) => {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [trimmedVideo, setTrimmedVideo] = useState(null);
  const playerRef = useRef(null);
  const navigate = useNavigate();

  const handleSetStartTime = () => {
    const player = playerRef.current;
    if (player) {
      setStartTime(player.getState().player.currentTime);
    }
  };

  const handleSetEndTime = () => {
    const player = playerRef.current;
    if (player) {
      setEndTime(player.getState().player.currentTime);
    }
  };

  const handleTrim = () => {
    if (onTrim) {
      onTrim(startTime, endTime, setTrimmedVideo);
    }
  };

  const handleFinishTrim = () => {
    navigate('/output', { state: { trimmedVideo } });
  };

  return (
    <div>
      <Player ref={playerRef} src={videoFile}>
        <ControlBar autoHide={false} />
      </Player>
      <button onClick={handleSetStartTime}>Set Start Time</button>
      <button onClick={handleSetEndTime}>Set End Time</button>
      <button onClick={handleTrim}>Trim Video</button>
      <div>
        <p>Start Time: {startTime.toFixed(2)}</p>
        <p>End Time: {endTime.toFixed(2)}</p>
      </div>
      {trimmedVideo && (
        <div>
          <h3>Trimmed Video Preview:</h3>
          <ReactPlayer url={trimmedVideo} controls />
          <button onClick={handleFinishTrim}>Finish Trim</button>
        </div>
      )}
    </div>
  );
};

export default TrimComponent;