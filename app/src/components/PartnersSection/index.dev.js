'use client';

import React from 'react';
import styled from 'styled-components';
import PartnersTestimonials from '../PartnersTestimonials/index.dev';

const PartnersContainer = styled.section`
  padding: 40px 24px 100px 24px;
  background: #ffffff;
  
  @media screen and (max-width: 768px) {
    padding: 30px 16px 60px 16px;
  }
`;

const PartnersWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PartnersHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 60px;
  margin-bottom: 60px;
  align-items: start;
  
  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 40px;
  }
`;

const Heading = styled.h2`
  font-size: 42px;
  font-weight: 700;
  line-height: 1.2;
  color: #1a1a1a;
  
  @media screen and (max-width: 968px) {
    font-size: 32px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;

const LabelColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  @media screen and (max-width: 968px) {
    order: -1;
  }
`;

const SectionLabel = styled.div`
  color: #01bf71;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const SubLabel = styled.div`
  color: #666;
  font-size: 13px;
  line-height: 1.4;
`;

const PartnersSection = ({ sectionLabel, subLabel, heading, testimonials }) => {
  return (
    <PartnersContainer>
      <PartnersWrapper>
        <PartnersHeader>
          <Heading>{heading}</Heading>
          <LabelColumn>
            <SectionLabel>{sectionLabel}</SectionLabel>
            <SubLabel>{subLabel}</SubLabel>
          </LabelColumn>
        </PartnersHeader>
        
        {/* Testimonials Grid */}
        {testimonials && testimonials.length > 0 && (
          <PartnersTestimonials testimonials={testimonials} />
        )}
      </PartnersWrapper>
    </PartnersContainer>
  );
};

export default PartnersSection;