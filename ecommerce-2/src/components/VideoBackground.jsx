import React from 'react';

const VideoBackground = ({ source }) => {
  return (
    <video autoPlay muted loop id="myVideo">
      <source src={source} type="video/mp4" />
    </video>
  );
};

export default VideoBackground;
