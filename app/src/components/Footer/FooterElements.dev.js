import styled from 'styled-components';
import Link from 'next/link';

export const FooterContainer = styled.footer`
  background-color: #101522;
  color: #fff;
  width: 100%;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;

  @media screen and (max-width: 768px) {
    padding: 3rem 1.5rem 1.5rem;
  }
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-bottom: 2rem;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

// Brand Section Styles
export const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const BrandName = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #01bf71;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const BrandTagline = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #01bf71;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const BrandDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  max-width: 350px;
`;

// Contact Section Styles
export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContactTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.5rem 0;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const ContactIcon = styled.div`
  color: #01bf71;
  font-size: 1.1rem;
  margin-top: 0.15rem;
  flex-shrink: 0;
`;

export const ContactText = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
`;

export const ContactLink = styled.a`
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #01bf71;
  }
`;

export const MapLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #01bf71;
  text-decoration: none;
  font-weight: 500;
  margin-top: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #00a85e;
    transform: translateX(4px);
  }
`;

// Quick Links Section Styles
export const QuickLinksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LinksTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.5rem 0;
`;

export const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FooterLink = styled(Link)`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    color: #01bf71;
    transform: translateX(4px);
  }
`;

// Bottom Section Styles
export const FooterBottom = styled.div`
  padding-top: 2rem;
`;

export const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
`;

export const Copyright = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;

  @media screen and (max-width: 768px) {
    order: 3;
  }
`;

export const LegalLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);

  span {
    color: rgba(255, 255, 255, 0.3);
  }

  @media screen and (max-width: 768px) {
    order: 2;
  }
`;

export const LegalLink = styled(Link)`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #01bf71;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: 1;
  }
`;

export const SocialLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #01bf71;
    transform: translateY(-3px);
  }

  &:focus {
    outline: 2px solid #01bf71;
    outline-offset: 4px;
    border-radius: 4px;
  }
`;
