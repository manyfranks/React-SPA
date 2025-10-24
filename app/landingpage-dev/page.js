'use client';

import React from 'react';
import HeroSection from '../src/components/HeroSection/index.dev';
import AboutSection from '../src/components/AboutSection/index.dev';
import LogoMarquee from '../src/components/LogoMarquee/index.dev';
import PartnersSection from '../src/components/PartnersSection/index.dev';
import ServicesTeaser from '../src/components/ServicesTeaser/index.dev';
import { companyData } from '../src/lib/companyData';

export default function LandingPageDev() {
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
      
      {/* Footer will be added automatically by global LayoutWrapper */}
    </>
  );
}