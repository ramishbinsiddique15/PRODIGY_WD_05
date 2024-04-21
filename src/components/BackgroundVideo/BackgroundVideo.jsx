import React from 'react';
import './BackgroundVideo.css'
const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted>
        <source src="/video/bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
