'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { companyData } from '../../lib/companyData';
import {
  FooterContainer,
  FooterContent,
  FooterTop,
  FooterColumn,
  BrandSection,
  BrandName,
  BrandTagline,
  BrandDescription,
  ContactSection,
  ContactTitle,
  ContactItem,
  ContactIcon,
  ContactText,
  ContactLink,
  MapLink,
  QuickLinksSection,
  LinksTitle,
  LinksList,
  FooterLink,
  FooterBottom,
  BottomContent,
  CopyrightLegalGroup,
  Copyright,
  LegalLinks,
  LegalLink,
  SocialLinks,
  SocialLink
} from './FooterElements';

const Footer = () => {
  const { footer } = companyData;
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Map icon strings to components
  const iconMap = {
    FaLinkedin: FaLinkedin,
    FaFacebook: FaFacebook,
    FaInstagram: FaInstagram
  };

  return (
    <FooterContainer>
      <FooterContent>
        {/* Top Section - 3 Columns */}
        <FooterTop>
          {/* Brand/Company Column */}
          <FooterColumn>
            <BrandSection>
              <BrandName onClick={scrollToTop}>
                {footer.brand.name}
              </BrandName>
              <BrandTagline>{footer.brand.tagline}</BrandTagline>
              <BrandDescription>{footer.brand.description}</BrandDescription>
            </BrandSection>
          </FooterColumn>

          {/* Contact Column */}
          <FooterColumn>
            <ContactSection>
              <ContactTitle>Contact Us</ContactTitle>
              
              <ContactItem>
                <ContactIcon>
                  <FaMapMarkerAlt />
                </ContactIcon>
                <ContactText>
                  {footer.contact.address.line1}<br />
                  {footer.contact.address.line2}
                </ContactText>
              </ContactItem>

              <ContactItem>
                <ContactIcon>
                  <FaPhone />
                </ContactIcon>
                <ContactLink href={footer.contact.phone.link}>
                  {footer.contact.phone.display}
                </ContactLink>
              </ContactItem>

              <ContactItem>
                <ContactIcon>
                  <FaEnvelope />
                </ContactIcon>
                <ContactLink href={footer.contact.email.link}>
                  {footer.contact.email.display}
                </ContactLink>
              </ContactItem>

              <ContactItem>
                <ContactIcon>
                  <FaClock />
                </ContactIcon>
                <ContactText>
                  {footer.contact.hours.weekdays}<br />
                  {footer.contact.hours.time}
                </ContactText>
              </ContactItem>

              <MapLink href={footer.contact.mapLink} target="_blank" rel="noopener noreferrer">
                Get Directions →
              </MapLink>
            </ContactSection>
          </FooterColumn>

          {/* Quick Links Column */}
          <FooterColumn>
            <QuickLinksSection>
              <LinksTitle>Quick Links</LinksTitle>
              <LinksList>
                {footer.quickLinks.map((link, index) => (
                  <li key={index}>
                    <FooterLink href={link.href}>
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </LinksList>
            </QuickLinksSection>
          </FooterColumn>
        </FooterTop>

        {/* Bottom Section - Copyright/Legal & Social */}
        <FooterBottom>
          <BottomContent>
            <CopyrightLegalGroup>
              <Copyright>
                © {new Date().getFullYear()} {footer.brand.name}. All rights reserved.
              </Copyright>
              <LegalLinks>
                {footer.legal.map((link, index) => (
                  <React.Fragment key={index}>
                    <LegalLink href={link.href}>{link.label}</LegalLink>
                    {index < footer.legal.length - 1 && <span>|</span>}
                  </React.Fragment>
                ))}
              </LegalLinks>
            </CopyrightLegalGroup>

            <SocialLinks>
              {footer.social.map((social, index) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <SocialLink
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                  >
                    <IconComponent />
                  </SocialLink>
                );
              })}
            </SocialLinks>
          </BottomContent>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
