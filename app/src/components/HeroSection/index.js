import React, { useState, useEffect } from 'react';
import {
  HeroContainer,
  VideoWrapper,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';
import { Button } from '../ButtonElement';

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const videos = [
    '/videos/ironvideo1.mp4',
    '/videos/ironvideo2.mp4',
    '/videos/ironvideo3.mp4',
    '/videos/ironvideo4.mp4'
  ];
  const [videoSrc, setVideoSrc] = useState(videos[0]);

  useEffect(() => {

    const videoElement = document.getElementById('heroVideo');

    const handleVideoEnd = () => {
      const currentVideoIndex = videos.indexOf(videoSrc);
      const newIndex = (currentVideoIndex + 1) % videos.length;
      setVideoSrc(videos[newIndex]);
    };

    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
    }
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [videoSrc]);

  const onHover = () => {
    setHover(!hover);
  };

  const toggleBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <HeroContainer id="home">
      <VideoWrapper>
        <HeroBg>
          <VideoBg
            autoPlay
            loop={false}
            muted
            id="heroVideo"
            src={videoSrc}
            type="video/mp4"
          />
        </HeroBg>
      </VideoWrapper>
      <HeroContent>
        <HeroH1>Indigenous Iron Construction</HeroH1>
        <HeroP>
          Bridging Cultures, Strengthening Communities and Providing Quality
          Contracting Services.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            href="/contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get A Free Consultation {hover ? <ArrowRight /> : <ArrowForward />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
