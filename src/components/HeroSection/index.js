import React, { useState, useEffect } from 'react';
import Video1 from '../../videos/ironvideo1.mp4';
import Video2 from '../../videos/ironvideo2.mp4';
import Video3 from '../../videos/ironvideo3.mp4';
import Video4 from '../../videos/ironvideo4.mp4';
import {
  HeroContainer,
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
import { animateScroll as scroll } from 'react-scroll';

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [videoSrc, setVideoSrc] = useState(Video1);

  useEffect(() => {
    const videos = [Video1, Video2, Video3, Video4];

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
    scroll.scrollToBottom();
  };

  return (
    <HeroContainer id="home">
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
      <HeroContent>
        <HeroH1>Indigenous Iron Construction</HeroH1>
        <HeroP>
          Bridging Cultures, Strengthening Communities and Providing Quality
          Contracting Services.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggleBottom}
          >
            Get A Free Consultation {hover ? <ArrowRight /> : <ArrowForward />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
