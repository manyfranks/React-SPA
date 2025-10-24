'use client';

import React from 'react';
import HeroSection from './src/components/HeroSection';
import AboutSection from './src/components/AboutSection';
import LogoMarquee from './src/components/LogoMarquee';
import PartnersSection from './src/components/PartnersSection';
import ServicesTeaser from './src/components/ServicesTeaser';
import { companyData } from './src/lib/companyData';

export default function Home() {
  const { sectionLabel, subLabel, heading, testimonials, partners } = companyData.landing.partnersSnapshot;
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Logo Marquee as Section Divider */}
      <LogoMarquee partners={partners} />
      
      {/* Partners Section (Header + Testimonials) */}
      <PartnersSection
        sectionLabel={sectionLabel}
        subLabel={subLabel}
        heading={heading}
        testimonials={testimonials}
      />
      
      {/* Services Teaser */}
      <ServicesTeaser />
      
      {/* Footer is added automatically by global LayoutWrapper */}
    </>
  );
}