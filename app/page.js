'use client';

import React from 'react';
import HeroSection from './src/components/HeroSection';
import InfoSection from './src/components/InfoSection';
import { homeObjOne, homeObjTwo } from './src/components/InfoSection/Data';
import Services from './src/components/Services';
import PartnersSection from './src/components/PartnersSection';
import ContactForm from './src/components/ContactForm';
import { contactForm } from './src/components/ContactForm/Data'

export default function Home() {
    return (
        <>
            <HeroSection />
            <Services />
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjOne}/>
            <PartnersSection />
            <ContactForm {...contactForm}/>
        </>
    );
}