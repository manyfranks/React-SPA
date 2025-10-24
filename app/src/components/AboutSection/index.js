'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { companyData } from '../../lib/companyData';

const AboutSectionContainer = styled.section`
  padding: 100px 24px;
  background: #ffffff;
  
  @media screen and (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const AboutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutHeader = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
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
  color: #666;
  font-size: 13px;
  line-height: 1.4;
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

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 24px;
  
  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
  
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectsCard = styled(Link)`
  grid-row: span 2;
  background: #f5f5f5;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
  
  @media screen and (max-width: 968px) {
    grid-row: span 1;
    grid-column: span 2;
    min-height: 300px;
  }
  
  @media screen and (max-width: 640px) {
    grid-column: span 1;
    min-height: 250px;
  }
`;

const ProjectsImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  
  img {
    object-fit: cover;
    filter: brightness(0.7);
  }
`;

const ProjectsLabel = styled.div`
  position: relative;
  z-index: 2;
  background: #01bf71;
  color: #1a1a1a;
  font-weight: 400;
  font-size: 18px;
  padding: 16px 32px;
  border-radius: 50px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const StatCard = styled.div`
  background: #f8f9fa;
  border-radius: 16px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  
  @media screen and (max-width: 480px) {
    padding: 24px 20px;
  }
`;

const StatValue = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1;
  
  @media screen and (max-width: 480px) {
    font-size: 36px;
  }
`;

const StatIcon = styled.div`
  font-size: 32px;
  color: #01bf71;
  margin-bottom: 4px;
`;

const StatTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin-top: 8px;
`;

const StatDescription = styled.div`
  font-size: 13px;
  color: #666;
  line-height: 1.5;
`;

// Icon components for stats
const iconMap = {
  "Projects Completed": "🏗️",
  "Skilled Professionals": "👷",
  "Industry Excellence": "🏆",
  "Tons of Materials": "📦"
};

const AboutSection = () => {
  const { sectionLabel, subLabel, heading, projectsCard, stats } = companyData.landing.aboutSnapshot;
  
  return (
    <AboutSectionContainer>
      <AboutWrapper>
        <AboutHeader>
          <LabelColumn>
            <SectionLabel>{sectionLabel}</SectionLabel>
            <SubLabel>{subLabel}</SubLabel>
          </LabelColumn>
          <Heading>{heading}</Heading>
        </AboutHeader>
        
        <CardsGrid>
          <ProjectsCard href={projectsCard.href}>
            <ProjectsImageWrapper>
              <Image
                src={projectsCard.imageSrc}
                alt="View Projects"
                fill
                sizes="(max-width: 968px) 100vw, 50vw"
              />
            </ProjectsImageWrapper>
            <ProjectsLabel>{projectsCard.label}</ProjectsLabel>
          </ProjectsCard>
          
          {stats.map((stat, index) => (
            <StatCard key={index}>
              <StatIcon>{iconMap[stat.title] || "📊"}</StatIcon>
              <StatValue>{stat.value}</StatValue>
              <StatTitle>{stat.title}</StatTitle>
              <StatDescription>{stat.description}</StatDescription>
            </StatCard>
          ))}
        </CardsGrid>
      </AboutWrapper>
    </AboutSectionContainer>
  );
};

export default AboutSection;