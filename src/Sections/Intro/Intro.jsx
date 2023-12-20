
import React, { useState, useRef } from 'react';
import poster from '../../Assets/Images/Video.png';
import style1 from '../../Assets/Images/intro-style.png';
import style2 from '../../Assets/Images/intro-style1.png';
import video from '../../Assets/Images/video.mp4'

export default function Intro() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    videoRef.current.pause();
  };

  const handleVideoClick = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  return (
    <section className="intro py-5">
      <div className="sec-title">
        <h3 className="mb-5">الفيديو التعريفي</h3>
      </div>
      <div className="container">
        <div className="intro-video wow fadeInUp">
          <div className={`overlay ${
            isPlaying ? '' : 'show'
          }`} onClick={handleVideoClick}>
            {
              isPlaying ? (
                <i className={`fas fa-pause pause`}></i>
              ) : (
                <i className={`fas fa-play play`}></i>
              )
            }
          </div>
          {
            isPlaying ? '' : <img src={poster} alt="" id="poster" />
          }
          <video
            src={video}
            id="my-video"
            ref={videoRef}
            onClick={handleVideoClick}
          ></video>
        </div>
      </div>
      <img src={style1} alt="" className="intro-style" />
      <img src={style2} alt="" className="intro-style1" />
    </section>
  );
}
