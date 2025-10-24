'use client';

import React from 'react';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

// Keyframe animation for scrolling
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const MarqueeSection = styled.section`
  padding: 80px 0 40px 0;
  background: #ffffff;
  overflow: hidden;
  
  @media screen and (max-width: 768px) {
    padding: 60px 0 30px 0;
  }
`;

const MarqueeContainer = styled.div`
  position: relative;
  overflow: hidden;

  @media (prefers-reduced-motion: reduce) {
    .marquee-track {
      animation: none !important;
    }
  }
`;

const FadeOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 64px;
  z-index: 2;
  pointer-events: none;

  &.fade-left {
    left: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  }

  &.fade-right {
    right: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  }

  @media screen and (max-width: 768px) {
    width: 40px;
  }

  @media screen and (max-width: 480px) {
    width: 24px;
  }
`;

const MarqueeTrack = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 30s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    justify-content: center;
    width: 100%;
    
    > div:last-child {
      display: none;
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: 60px;
    padding: 0 30px;

    @media screen and (max-width: 768px) {
      gap: 40px;
      padding: 0 20px;
    }

    @media screen and (max-width: 480px) {
      gap: 28px;
      padding: 0 14px;
    }
  }
`;

const PartnerLogo = styled.a`
  display: block;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  width: 160px;
  height: 60px;

  @media screen and (max-width: 768px) {
    width: 140px;
    height: 48px;
  }

  @media screen and (max-width: 480px) {
    width: 120px;
    height: 36px;
  }

  img {
    object-fit: contain;
    filter: grayscale(100%) opacity(0.85);
    transition: all 0.3s ease;
  }

  &:hover img,
  &:focus img {
    filter: grayscale(0%) opacity(1);
    transform: scale(1.05);
  }

  &:focus {
    outline: 2px solid #01bf71;
    outline-offset: 4px;
    border-radius: 4px;
  }

  &.no-filter img {
    filter: opacity(0.85);
  }

  &.no-filter:hover img,
  &.no-filter:focus img {
    filter: opacity(1);
  }
`;

const LogoMarquee = ({ partners }) => {
  return (
    <MarqueeSection>
      <MarqueeContainer>
        <FadeOverlay className="fade-left" />
        <FadeOverlay className="fade-right" />
        
        <MarqueeTrack className="marquee-track">
          <div>
            {partners.map((partner) => (
              <PartnerLogo
                key={`partner-1-${partner.id}`}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${partner.name} website`}
                className={partner.noFilter ? 'no-filter' : ''}
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  sizes="(max-width: 480px) 120px, (max-width: 768px) 140px, 160px"
                />
              </PartnerLogo>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div>
            {partners.map((partner) => (
              <PartnerLogo
                key={`partner-2-${partner.id}`}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${partner.name} website`}
                className={partner.noFilter ? 'no-filter' : ''}
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  sizes="(max-width: 480px) 120px, (max-width: 768px) 140px, 160px"
                />
              </PartnerLogo>
            ))}
          </div>
        </MarqueeTrack>
      </MarqueeContainer>
    </MarqueeSection>
  );
};

export default LogoMarquee;