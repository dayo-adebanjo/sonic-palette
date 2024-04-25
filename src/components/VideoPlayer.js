import React, { useState } from 'react';

const VideoPlayer = ({ video, audio }) => {
  return (
    <div className="video-player">
      {video && (
        <video controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {audio && (
        <audio controls>
          <source src={audio} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
      )}
    </div>
  );
};

export default VideoPlayer;