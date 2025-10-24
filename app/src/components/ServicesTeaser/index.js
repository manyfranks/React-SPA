'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { servicesData } from '../../lib/servicesData';
import { serviceImageMap, featuredServiceIds } from '../../lib/serviceImageMap';

const ServicesContainer = styled.section`
  padding: 100px 24px;
  background: #101522;
  border-radius: 15px 15px 0 0;
  margin-top: 40px;
  
  @media screen and (max-width: 768px) {
    padding: 60px 16px;
    border-radius: 32px 32px 0 0;
    margin-top: 32px;
  }
  
  @media screen and (max-width: 480px) {
    border-radius: 24px 24px 0 0;
    margin-top: 24px;
  }
`;

const ServicesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ServicesHeader = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr auto;
  gap: 60px;
  margin-bottom: 60px;
  align-items: start;
  
  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 40px;
  }
`;

const LabelColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SectionLabel = styled.div`
  color: #01bf71;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const SubLabel = styled.div`
  color: #f7f8fa;
  font-size: 13px;
  line-height: 1.4;
  opacity: 0.8;
`;

const Heading = styled.h2`
  font-size: 42px;
  font-weight: 700;
  line-height: 1.2;
  color: #f7f8fa;
  grid-column: 2 / 3;
  
  @media screen and (max-width: 968px) {
    font-size: 32px;
    grid-column: 1;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;

const CTAColumn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-column: 3 / 4;
  
  @media screen and (max-width: 968px) {
    grid-column: 1;
    justify-content: flex-start;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: #01bf71;
  color: #010606;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #00a85e;
    transform: translateX(4px);
  }
  
  &:focus {
    outline: 2px solid #01bf71;
    outline-offset: 4px;
  }
  
  @media screen and (max-width: 480px) {
    padding: 12px 24px;
    font-size: 14px;
  }
`;

const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  
  @media screen and (max-width: 768px) {
    gap: 60px;
  }
`;

const ServiceItem = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    
    .service-image-wrapper {
      transform: scale(1.02);
    }
    
    .learn-more {
      color: #01bf71;
      transform: translateX(4px);
    }
  }
  
  &:focus {
    outline: 2px solid #01bf71;
    outline-offset: 4px;
    border-radius: 8px;
  }
  
  &.reverse {
    grid-template-columns: 1fr 1fr;
    
    .service-content {
      order: 2;
    }
    
    .service-image {
      order: 1;
    }
  }
  
  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 24px;
    
    &.reverse {
      grid-template-columns: 1fr;
      
      .service-content {
        order: 1;
      }
      
      .service-image {
        order: 2;
      }
    }
  }
`;

const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ServiceNumber = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #01bf71;
  letter-spacing: 2px;
`;

const ServiceTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
  color: #f7f8fa;
  line-height: 1.2;
  margin: 0;
  
  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #f7f8fa;
  opacity: 0.85;
  margin: 0;
  
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const LearnMore = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #f7f8fa;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.3s ease;
`;

const ServiceImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  
  @media screen and (max-width: 768px) {
    height: 300px;
  }
  
  @media screen and (max-width: 480px) {
    height: 250px;
  }
`;

const ServiceImage = styled(Image)`
  object-fit: cover;
`;

const BottomCTAWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  padding-top: 60px;
  border-top: 1px solid rgba(1, 191, 113, 0.2);
  
  @media screen and (max-width: 768px) {
    margin-top: 60px;
    padding-top: 40px;
  }
`;

const BottomCTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 40px;
  background: transparent;
  color: #01bf71;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  border: 2px solid #01bf71;
  transition: all 0.3s ease;
  
  &:hover {
    background: #01bf71;
    color: #101522;
    transform: scale(1.05);
  }
  
  &:focus {
    outline: 2px solid #01bf71;
    outline-offset: 4px;
  }
  
  @media screen and (max-width: 480px) {
    padding: 14px 32px;
    font-size: 16px;
  }
`;

const ServicesTeaser = () => {
  const featuredServices = featuredServiceIds.map(id => 
    servicesData.find(service => service.id === id)
  ).filter(Boolean);

  return (
    <ServicesContainer>
      <ServicesWrapper>
        <ServicesHeader>
          <LabelColumn>
            <SectionLabel>Our Services</SectionLabel>
            <SubLabel>Innovative Solutions for Modern Construction</SubLabel>
          </LabelColumn>
          <Heading>Comprehensive Services for Every Phase of Your Project</Heading>
          <CTAColumn>
            <CTAButton href="/services">
              View All Services <span>→</span>
            </CTAButton>
          </CTAColumn>
        </ServicesHeader>
        
        <ServicesList>
          {featuredServices.map((service, index) => (
            <ServiceItem
              key={service.id}
              href={`/services/${service.id}`}
              className={index % 2 === 1 ? 'reverse' : ''}
            >
              <ServiceContent className="service-content">
                <ServiceNumber>{String(index + 1).padStart(2, '0')}</ServiceNumber>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.shortDescription}</ServiceDescription>
                <LearnMore className="learn-more">
                  Learn More <span>→</span>
                </LearnMore>
              </ServiceContent>
              
              <ServiceImageWrapper className="service-image-wrapper service-image">
                <ServiceImage
                  src={serviceImageMap[service.id]}
                  alt={`${service.title} - Indigenous Iron Construction`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </ServiceImageWrapper>
            </ServiceItem>
          ))}
        </ServicesList>
        
        {/* Bottom CTA */}
        <BottomCTAWrapper>
          <BottomCTAButton href="/services">
            Explore All Services <span>→</span>
          </BottomCTAButton>
        </BottomCTAWrapper>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default ServicesTeaser;