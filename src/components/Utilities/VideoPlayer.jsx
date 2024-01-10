"use client";

import { useState } from "react";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    return setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "200",
  };

  const FrameVideo = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="text-color-primary float-right bg-color-dark px-2"
        >
          X
        </button>
        <Youtube
          videoId={youtubeId}
          onReady={(e) => e.target.pauseVideo}
          opts={option}
          onError={() => alert("Sorry, video has broken, please try another!")}
        />
      </div>
    );
  };

  const ButtonSeeTrailer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed bottom-2 right-2 bg-color-accent hover:bg-color-secondary text-color-primary transition-all p-2 rounded-lg"
      >
        See Trailer
      </button>
    );
  };

  return isOpen ? <FrameVideo /> : <ButtonSeeTrailer />;
};

export default VideoPlayer;
