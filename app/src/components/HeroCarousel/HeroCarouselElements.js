import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  ${({ heightVh, minHeight, maxHeight }) =>
    heightVh
      ? `height: clamp(${minHeight}px, ${heightVh}vh, ${maxHeight}px);`
      : 'aspect-ratio: 1 / 1;'
  }
  overflow: hidden;
  background: #f5f5f5;
  
  @media screen and (max-width: 968px) {
    ${({ heightVh }) => !heightVh && 'aspect-ratio: 1 / 1;'}
  }
  
  @media screen and (max-width: 640px) {
    ${({ heightVh }) => !heightVh && 'aspect-ratio: 1 / 1;'}
  }
`;

export const TwoUpRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  width: 100%;
  height: 100%;
  position: relative;
  
  @media screen and (max-width: ${({ collapseAt }) => collapseAt || 640}px) {
    grid-template-columns: 1fr;
  }
`;

export const TwoUpSlide = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  @media screen and (max-width: ${({ collapseAt }) => collapseAt || 640}px) {
    &:nth-child(2) {
      display: none;
    }
  }
`;

export const SlideWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transform: ${({ isActive }) => (isActive ? 'scale(1)' : 'scale(1.1)')};
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  will-change: opacity, transform;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  pointer-events: none;
`;

export const SlideContent = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  right: 40px;
  z-index: 2;
  color: #fff;
  
  @media screen and (max-width: 768px) {
    bottom: 24px;
    left: 24px;
    right: 24px;
  }
  
  @media screen and (max-width: 480px) {
    bottom: 20px;
    left: 20px;
    right: 20px;
  }
`;

export const SlideTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 12px 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  
  @media screen and (max-width: 968px) {
    font-size: 32px;
    margin-bottom: 8px;
  }
  
  @media screen and (max-width: 640px) {
    font-size: 24px;
    margin-bottom: 6px;
  }
`;

export const SlideDescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin: 0;
  max-width: 600px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  
  @media screen and (max-width: 968px) {
    font-size: 16px;
  }
  
  @media screen and (max-width: 640px) {
    font-size: 14px;
  }
`;

export const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  width: 100%;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  background: #01bf71;
  width: ${({ progress }) => progress}%;
  transition: width 0.1s linear;
`;