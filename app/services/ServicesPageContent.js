'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import servicesData from '../src/lib/servicesData';
import HeroCarousel from '../src/components/HeroCarousel';
import Breadcrumbs from '../src/components/Breadcrumbs';

// Import service images
import civilservices from '../src/images/services/civilservices.png';
import landsitedev from '../src/images/services/landsitedev.png';
import landremediation from '../src/images/services/landremediation.jpeg';
import contaminatedcleanup from '../src/images/services/contaminatedcleanup.jpg';
import landsurvey from '../src/images/services/landsurvey.jpg';
import marinedivision from '../src/images/services/marinedivision.jpg';
import marinesafety from '../src/images/services/marinesafety.jpg';
import projectmanagement from '../src/images/services/projectmanagement.jpg';
import hydrovac from '../src/images/services/hydrovac.jpg';
import streetsweeper from '../src/images/services/streetsweeper.jpg';
import socialresponsibility from '../src/images/services/socialresponsibility.jpg';

// Service image mapping
const serviceImages = {
  'civil-works': civilservices,
  'land-development': landsitedev,
  'land-remediation': landremediation,
  'contaminated-materials': contaminatedcleanup,
  'land-surveying': landsurvey,
  'marine-division': marinedivision,
  'aquatic-spill-response': marinesafety,
  'project-management': projectmanagement,
  'hydrovac': hydrovac,
  'street-sweeping': streetsweeper,
  'social-responsibility': socialresponsibility,
};

// Styled Components
const ServicesContainer = styled.div`
  background: #f8f9fa;
  min-height: 100vh;
  padding-top: 80px; /* Account for fixed navbar */
`;

const HeroSection = styled.section`
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin: 0;
`;

const BreadcrumbSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  
  @media screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;

const ContentSection = styled.section`
  padding: 40px 24px 10px;
  background: #f8f9fa;
  
  @media screen and (max-width: 768px) {
    padding: 30px 16px 10px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: left;
  margin-bottom: 40px;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 20px 0;
  line-height: 1.2;
  
  @media screen and (max-width: 968px) {
    font-size: 38px;
  }
  
  @media screen and (max-width: 640px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #666;
  max-width: 800px;
  margin: 0;
  
  @media screen and (max-width: 640px) {
    font-size: 16px;
  }
`;

const ServicesSection = styled.section`
  padding: 15px 24px 60px;
  background: #f8f9fa;
  
  @media screen and (max-width: 768px) {
    padding: 10px 16px 40px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ServiceCard = styled(Link)`
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
  
  @media screen and (max-width: 480px) {
    border-radius: 12px;
  }
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #f5f5f5;
  
  img {
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${ServiceCard}:hover & img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  
  @media screen and (max-width: 480px) {
    padding: 24px 20px;
    gap: 12px;
  }
`;

const CardTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.3;
  
  @media screen and (max-width: 640px) {
    font-size: 20px;
  }
`;

const CardDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #666;
  margin: 0;
  flex: 1;
  
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const CardLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #01bf71;
  font-weight: 600;
  font-size: 15px;
  margin-top: 8px;
  
  span {
    transition: transform 0.3s ease;
  }
  
  ${ServiceCard}:hover & span {
    transform: translateX(4px);
  }
`;

const CTASection = styled.section`
  padding: 80px 24px;
  background: #f8f9fa;
  
  @media screen and (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const CTAContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  background: linear-gradient(135deg, #01bf71 0%, #00a860 100%);
  padding: 60px 40px;
  border-radius: 24px;
  
  @media screen and (max-width: 640px) {
    padding: 40px 24px;
    border-radius: 16px;
  }
`;

const CTATitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 16px 0;
  
  @media screen and (max-width: 640px) {
    font-size: 28px;
  }
`;

const CTADescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #ffffff;
  margin: 0 0 32px 0;
  opacity: 0.95;
  
  @media screen and (max-width: 640px) {
    font-size: 16px;
    margin-bottom: 24px;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: #ffffff;
  color: #01bf71;
  padding: 16px 48px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f5f5f5;
    transform: scale(1.05);
  }
  
  @media screen and (max-width: 640px) {
    padding: 14px 36px;
    font-size: 16px;
  }
`;

// Hero carousel slides - optimized images from public/images/hero/services/
const heroSlides = [
  { imageSrc: '/images/hero/services/hero-1.jpg' },
  { imageSrc: '/images/hero/services/hero-2.jpg' },
  { imageSrc: '/images/hero/services/hero-3.jpg' },
  { imageSrc: '/images/hero/services/hero-4.jpg' },
  { imageSrc: '/images/hero/services/hero-5.jpg' },
  { imageSrc: '/images/hero/services/hero-6.jpg' },
  { imageSrc: '/images/hero/services/hero-7.jpg' },
  { imageSrc: '/images/hero/services/hero-8.jpg' },
  { imageSrc: '/images/hero/services/hero-9.jpg' },
  { imageSrc: '/images/hero/services/hero-10.jpg' },
  { imageSrc: '/images/hero/services/hero-11.jpg' },
  { imageSrc: '/images/hero/services/hero-12.jpg' },
  { imageSrc: '/images/hero/services/hero-13.jpg' },
  { imageSrc: '/images/hero/services/hero-14.jpg' },
  { imageSrc: '/images/hero/services/hero-15.jpg' },
];

export default function ServicesPageContent() {
  return (
    <ServicesContainer>
      {/* Hero Carousel - Full Width, Two-Up Layout */}
      <HeroSection>
        <HeroCarousel
          slides={heroSlides}
          interval={6000}
          twoUp={true}
          collapseAt={640}
          showOverlay={false}
          showProgress={false}
          heightVh={42}
          minHeight={290}
          maxHeight={435}
        />
      </HeroSection>
      
      {/* Page Header with Breadcrumbs */}
      <ContentSection>
        <ContentWrapper>
          <Breadcrumbs />
          <SectionHeader>
            <Title>Our Services</Title>
            <Subtitle>
              Indigenous Iron Construction offers comprehensive construction and environmental services
              with a commitment to quality, safety, and Indigenous stewardship. Explore our full range
              of specialized services below.
            </Subtitle>
          </SectionHeader>
        </ContentWrapper>
      </ContentSection>
      
      {/* Services Grid */}
      <ServicesSection>
        <ServicesGrid>
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              href={`/services/${service.id}`}
            >
              {serviceImages[service.id] && (
                <CardImageWrapper>
                  <Image
                    src={serviceImages[service.id]}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 968px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </CardImageWrapper>
              )}
              <CardContent>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.shortDescription}</CardDescription>
                <CardLink>
                  Learn More <span>→</span>
                </CardLink>
              </CardContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesSection>
      
      {/* Call to Action */}
      <CTASection>
        <CTAContainer>
          <CTATitle>Ready to Start Your Project?</CTATitle>
          <CTADescription>
            Contact us today to discuss how our services can support your construction and environmental needs.
          </CTADescription>
          <CTAButton href="/#contact">
            Get in Touch
          </CTAButton>
        </CTAContainer>
      </CTASection>
    </ServicesContainer>
  );
}