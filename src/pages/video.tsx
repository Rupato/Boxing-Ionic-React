import React from 'react'
import "./video.css";

const Video = () => {
  return (
    <>
      <video muted loop autoPlay>
        <source src={"/assets/videos/Fitness.mp4"} type="video/mp4" />
      </video>
    </>
  );
}

export default Video;