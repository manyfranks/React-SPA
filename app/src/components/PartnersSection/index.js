'use client';

import React from 'react';
import {
  PartnersContainer,
  PartnersWrapper,
  PartnersHeading,
  PartnersDescription,
  MarqueeContainer,
  MarqueeTrack,
  PartnerLogo,
  TestimonialsWrapper,
  TestimonialCard,
  TestimonialQuote,
  TestimonialAuthor,
  TestimonialTitle
} from './PartnersElements';
import { partners, testimonials } from '../../lib/partnersData';

const PartnersSection = () => {
  return (
    <PartnersContainer id="partners">
      <PartnersWrapper>
        <PartnersHeading>Our Valued Partners</PartnersHeading>
        <PartnersDescription>
          At Indigenous Iron Construction, we collaborate with industry leaders and organizations committed to environmental stewardship and sustainable development. Together, we deliver exceptional results while honoring our responsibility to the land and communities we serve.
        </PartnersDescription>
        
        <MarqueeContainer>
          <MarqueeTrack>
            <div>
              {partners.map((partner) => (
                <PartnerLogo
                  key={`partner-1-${partner.id}`}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={partner.name}
                >
                  <div className="partner-placeholder">
                    {partner.name}
                  </div>
                </PartnerLogo>
              ))}
            </div>
            <div>
              {partners.map((partner) => (
                <PartnerLogo
                  key={`partner-2-${partner.id}`}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={partner.name}
                >
                  <div className="partner-placeholder">
                    {partner.name}
                  </div>
                </PartnerLogo>
              ))}
            </div>
          </MarqueeTrack>
        </MarqueeContainer>

        <TestimonialsWrapper>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <TestimonialQuote>"{testimonial.quote}"</TestimonialQuote>
              <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
              <TestimonialTitle>
                {testimonial.title} • {testimonial.company}
              </TestimonialTitle>
            </TestimonialCard>
          ))}
        </TestimonialsWrapper>
      </PartnersWrapper>
    </PartnersContainer>
  );
};

export default PartnersSection;