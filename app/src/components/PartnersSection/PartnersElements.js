import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const PartnersContainer = styled.section`
  background: #010606;
  padding: 100px 0;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const PartnersWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const PartnersHeading = styled.h2`
  text-align: center;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 24px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const PartnersDescription = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
  color: #fff;
  max-width: 800px;
  margin: 0 auto 60px;
  opacity: 0.9;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

export const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 60px 0;
  padding: 40px 0;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    margin: 40px 0;
    padding: 30px 0;
  }
`;

export const MarqueeTrack = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 30s linear infinite;

  &:hover {
    animation-play-state: paused;
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
  }
`;

export const PartnerLogo = styled.a`
  display: block;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.3s ease;

  .partner-placeholder {
    height: 60px;
    min-width: 160px;
    max-width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    transition: all 0.3s ease;

    @media screen and (max-width: 768px) {
      height: 50px;
      min-width: 140px;
      max-width: 180px;
      font-size: 13px;
      padding: 10px 20px;
    }

    @media screen and (max-width: 480px) {
      height: 40px;
      min-width: 120px;
      max-width: 160px;
      font-size: 12px;
      padding: 8px 16px;
    }
  }

  &:hover .partner-placeholder {
    background: rgba(1, 177, 169, 0.15);
    border-color: rgba(1, 177, 169, 0.4);
    color: #01b1a9;
    transform: scale(1.05);
  }

  img {
    height: 60px;
    width: auto;
    max-width: 180px;
    object-fit: contain;
    filter: grayscale(100%) brightness(0) invert(1) opacity(0.7);
    transition: all 0.3s ease;

    @media screen and (max-width: 768px) {
      height: 50px;
      max-width: 150px;
    }

    @media screen and (max-width: 480px) {
      height: 40px;
      max-width: 120px;
    }
  }

  &:hover img {
    filter: grayscale(0%) brightness(1) invert(0) opacity(1);
    transform: scale(1.05);
  }
`;

export const TestimonialsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 80px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 60px;
    gap: 24px;
  }
`;

export const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 32px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(1, 177, 169, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(1, 177, 169, 0.15);
  }

  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`;

export const TestimonialQuote = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #fff;
  margin-bottom: 24px;
  font-style: italic;
  opacity: 0.95;

  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

export const TestimonialAuthor = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #01b1a9;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const TestimonialTitle = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;