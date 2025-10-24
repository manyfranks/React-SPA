'use client';

import styled from 'styled-components';

const SpacerContainer = styled.div`
  height: ${props => props.height || '80px'};
  background: ${props => props.background || 'transparent'};
  
  @media screen and (max-width: 768px) {
    height: ${props => props.mobileHeight || props.height || '60px'};
  }
`;

const Spacer = ({ height, mobileHeight, background }) => {
  return <SpacerContainer height={height} mobileHeight={mobileHeight} background={background} />;
};

export default Spacer;