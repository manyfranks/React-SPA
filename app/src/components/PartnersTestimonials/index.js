'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 60px;

  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 40px;
  }
`;

const TestimonialCard = styled.div`
  background: #f8f9fa;
  padding: 32px;
  border-radius: 12px;
  border-left: 4px solid #01bf71;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`;

const QuoteText = styled.blockquote`
  font-size: 16px;
  line-height: 1.7;
  color: #333;
  font-style: italic;
  margin: 0 0 24px 0;
  position: relative;

  &::before {
    content: '"';
    font-size: 48px;
    color: #01bf71;
    position: absolute;
    left: -12px;
    top: -8px;
    font-family: Georgia, serif;
    opacity: 0.3;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const Attribution = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  background: white;
  border-radius: 8px;
  padding: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  img {
    object-fit: contain;
  }
`;

const AttributionText = styled.div`
  flex: 1;
`;

const Organization = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 4px;
`;

const AuthorInfo = styled.div`
  font-size: 13px;
  color: #666;
  line-height: 1.4;
`;

const PartnersTestimonials = ({ testimonials }) => {
  const [randomizedTestimonials, setRandomizedTestimonials] = useState([]);

  useEffect(() => {
    // Randomize testimonials order on mount
    const shuffled = [...testimonials].sort(() => Math.random() - 0.5);
    setRandomizedTestimonials(shuffled);
  }, [testimonials]);

  // Show original order during SSR, randomized order after hydration
  const displayTestimonials = randomizedTestimonials.length > 0 ? randomizedTestimonials : testimonials;

  return (
    <TestimonialsGrid>
      {displayTestimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id}>
          <QuoteText>{testimonial.quote}</QuoteText>
          <Attribution>
            <LogoWrapper>
              <Image
                src={testimonial.logo}
                alt={`${testimonial.organization} logo`}
                fill
                sizes="48px"
              />
            </LogoWrapper>
            <AttributionText>
              <Organization>{testimonial.organization}</Organization>
              {testimonial.author && (
                <AuthorInfo>
                  {testimonial.author}
                  {testimonial.role && ` • ${testimonial.role}`}
                </AuthorInfo>
              )}
            </AttributionText>
          </Attribution>
        </TestimonialCard>
      ))}
    </TestimonialsGrid>
  );
};

export default PartnersTestimonials;