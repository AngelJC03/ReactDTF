import React, { useRef, useEffect } from "react";
import videoSrc from "../../assets/images/home-page-video/foundationMovie.mp4";
import "./LazyPlayVideo.css";

const LazyPlayVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.3 } // starts playing when ~30% visible
    );

    if (video) observer.observe(video);
    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);

  return (
    <div className="video-wrapper">
      <video
        ref={videoRef}
        className="homepage-video"
        playsInline
        muted
        preload="none"
        controls
        controlsList="nodownload noplaybackrate"
        disablePictureInPicture
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LazyPlayVideo;
