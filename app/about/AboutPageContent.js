'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { companyData } from '../src/lib/companyData';
import HeroCarousel from '../src/components/HeroCarousel';
import Breadcrumbs from '../src/components/Breadcrumbs';

// Styled Components
const AboutContainer = styled.div`
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

const MainContentSection = styled.section`
  padding: 15px 24px 40px;
  background: #f8f9fa;
  
  @media screen and (max-width: 768px) {
    padding: 10px 16px 30px;
  }
`;

const ParagraphsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 24px;
  
  @media screen and (max-width: 640px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const CardsSection = styled.section`
  padding: 60px 24px;
  background: #f8f9fa;
  
  @media screen and (max-width: 768px) {
    padding: 40px 16px;
  }
`;

const CardsGrid = styled.div`
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

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 32px 24px;
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
    padding: 24px 20px;
  }
`;

const CardTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 16px 0;
  line-height: 1.3;
  
  @media screen and (max-width: 640px) {
    font-size: 20px;
  }
`;

const CardDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #666;
  margin: 0 0 20px 0;
  flex: 1;
  
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const CardLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #01bf71;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  
  span {
    transition: transform 0.3s ease;
  }
  
  &:hover span {
    transform: translateX(4px);
  }
`;

const CardLinkStatic = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #01bf71;
  font-weight: 600;
  font-size: 15px;
`;

// Hero carousel slides - placeholder, will be replaced with actual images
const heroSlides = [
  {
    imageSrc: '/images/company-logo.png', // Placeholder until about images added
    title: 'About Our Company',
    description: 'Indigenous-owned construction excellence',
  },
];

export default function AboutPageContent() {
  return (
    <AboutContainer>
      {/* Hero Carousel - Single Image */}
      <HeroSection>
        <HeroCarousel 
          slides={heroSlides} 
          interval={6000}
          showOverlay={false}
          showProgress={false}
          heightVh={40}
          minHeight={290}
          maxHeight={435}
        />
      </HeroSection>
      
      {/* Breadcrumbs - Under Hero */}
      <ContentSection>
        <ContentWrapper>
          <Breadcrumbs />
          
          {/* Page Header */}
          <SectionHeader>
            <Title>{companyData.hero.title}</Title>
            <Subtitle>{companyData.hero.subtitle}</Subtitle>
          </SectionHeader>
        </ContentWrapper>
      </ContentSection>
      
      {/* Main Content Paragraphs */}
      <MainContentSection>
        <ParagraphsWrapper>
          {companyData.mainContent.paragraphs.map((paragraph, index) => (
            <Paragraph key={index}>{paragraph}</Paragraph>
          ))}
        </ParagraphsWrapper>
      </MainContentSection>
      
      {/* Content Cards Grid */}
      <CardsSection>
        <CardsGrid>
          {companyData.contentSections.map((section) => (
            <Card key={section.id}>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
              {section.linkTo ? (
                <CardLink href={section.linkTo}>
                  {section.linkText} <span>→</span>
                </CardLink>
              ) : (
                <CardLinkStatic>
                  {section.linkText} <span>→</span>
                </CardLinkStatic>
              )}
            </Card>
          ))}
        </CardsGrid>
      </CardsSection>
    </AboutContainer>
  );
}