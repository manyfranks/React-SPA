'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '../src/components/Breadcrumbs';
import { serviceImageMap } from '../src/lib/serviceImageMap';

// Main container
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
`;

// Top banner section
const TopBanner = styled.div`
  position: relative;
  width: 100%;
  height: clamp(220px, 33vh, 320px);
  overflow: hidden;
  background-color: #e5e7eb;

  img {
    object-fit: cover;
  }
`;

// Content wrapper
const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px;

  @media screen and (max-width: 768px) {
    padding: 30px 20px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px 16px;
  }
`;

// Header section
const PageHeader = styled.div`
  margin-bottom: 32px;
`;

const CategoryLabel = styled.p`
  font-size: 14px;
  color: #01bf71;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
`;

const PageTitle = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: #010606;
  margin-bottom: 16px;
  line-height: 1.2;

  @media screen and (max-width: 768px) {
    font-size: 34px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

const ShortDescription = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  max-width: 800px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

// Cards
const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 32px;
  margin-bottom: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 768px) {
    padding: 24px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #010606;
  margin-bottom: 20px;
  line-height: 1.3;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.7;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

// Highlights
const HighlightsList = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin: 0;
`;

const HighlightItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const HighlightLabel = styled.dt`
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
`;

const HighlightValue = styled.dd`
  font-size: 15px;
  color: #333;
  font-weight: 500;
  margin: 0;
`;

// Inline image
const InlineImageBlock = styled.div`
  margin-bottom: 32px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: relative;
  width: 100%;
  height: 400px;
  background-color: #e5e7eb;

  @media screen and (max-width: 768px) {
    height: 300px;
  }

  @media screen and (max-width: 480px) {
    height: 240px;
  }

  img {
    object-fit: cover;
  }
`;

// Capabilities
const CapabilitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 12px;
`;

const CapabilityItem = styled.li`
  padding: 12px 16px 12px 40px;
  background-color: #f8f9fa;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  position: relative;
  font-size: 15px;
  color: #333;
  line-height: 1.5;

  &::before {
    content: "✓";
    position: absolute;
    left: 14px;
    color: #01bf71;
    font-weight: bold;
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

// Related services
const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const RelatedCard = styled(Link)`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }

  &:focus {
    outline: 2px solid #01bf71;
    outline-offset: 2px;
  }
`;

const RelatedSection = styled.section`
  margin-bottom: 32px;
`;

const RelatedImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  background-color: #e5e7eb;

  img {
    object-fit: cover;
  }
`;

const RelatedContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const RelatedTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #010606;
  margin-bottom: 8px;
  line-height: 1.3;
`;

const RelatedDescription = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 12px;
`;

const RelatedLinkText = styled.span`
  font-size: 14px;
  color: #01bf71;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
`;

// CTA card
const CTACard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 48px 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 36px 24px;
  }

  @media screen and (max-width: 480px) {
    padding: 28px 20px;
  }
`;

const CTATitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: #010606;
  margin-bottom: 12px;
  line-height: 1.2;

  @media screen and (max-width: 768px) {
    font-size: 26px;
  }

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

const CTADescription = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: linear-gradient(135deg, #01bf71 0%, #00a85e 100%);
  color: #fff;
  padding: 14px 36px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(1, 191, 113, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(1, 191, 113, 0.4);
  }

  &:focus {
    outline: 2px solid #01bf71;
    outline-offset: 3px;
  }

  @media screen and (max-width: 480px) {
    padding: 12px 28px;
    font-size: 15px;
  }
`;

export default function ServiceDetailContent({ service, relatedServices }) {
  const bannerImage = serviceImageMap[service.id];
  const inlineImage = service.images?.[0] || serviceImageMap[service.id];

  return (
    <PageContainer>
      {/* Top Banner */}
      {bannerImage && (
        <TopBanner>
          <Image
            src={bannerImage}
            alt={service.title}
            fill
            priority
            sizes="100vw"
          />
        </TopBanner>
      )}

      <ContentWrapper>
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Page Header */}
        <PageHeader>
          <CategoryLabel>Our Services</CategoryLabel>
          <PageTitle>{service.title}</PageTitle>
          <ShortDescription>{service.shortDescription}</ShortDescription>
        </PageHeader>

        {/* At-a-glance Highlights (optional) */}
        {service.highlights && service.highlights.length > 0 && (
          <Card>
            <SectionTitle>At a Glance</SectionTitle>
            <HighlightsList>
              {service.highlights.map((highlight, index) => (
                <HighlightItem key={index}>
                  <HighlightLabel>{highlight.label}</HighlightLabel>
                  <HighlightValue>{highlight.value}</HighlightValue>
                </HighlightItem>
              ))}
            </HighlightsList>
          </Card>
        )}

        {/* Overview */}
        <Card>
          <SectionTitle>Overview</SectionTitle>
          {service.longDescription.split('\n\n').map((paragraph, index) => (
            <Paragraph key={index}>{paragraph}</Paragraph>
          ))}
        </Card>

        {/* Inline Image */}
        {inlineImage && (
          <InlineImageBlock>
            <Image
              src={inlineImage}
              alt={`${service.title} in action`}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </InlineImageBlock>
        )}

        {/* Key Capabilities */}
        <Card>
          <SectionTitle>Key Capabilities</SectionTitle>
          <CapabilitiesList>
            {service.keyCapabilities.map((capability, index) => (
              <CapabilityItem key={index}>{capability}</CapabilityItem>
            ))}
          </CapabilitiesList>
        </Card>

        {/* Related Services */}
        {relatedServices && relatedServices.length > 0 && (
          <RelatedSection>
            <SectionTitle>Related Services</SectionTitle>
            <RelatedGrid>
              {relatedServices.map((related) => {
                const thumbnail = serviceImageMap[related.id];
                return (
                  <RelatedCard key={related.id} href={`/services/${related.id}`}>
                    {thumbnail && (
                      <RelatedImageWrapper>
                        <Image
                          src={thumbnail}
                          alt={related.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                      </RelatedImageWrapper>
                    )}
                    <RelatedContent>
                      <RelatedTitle>{related.title}</RelatedTitle>
                      <RelatedDescription>{related.shortDescription}</RelatedDescription>
                      <RelatedLinkText>
                        Learn More <span>→</span>
                      </RelatedLinkText>
                    </RelatedContent>
                  </RelatedCard>
                );
              })}
            </RelatedGrid>
          </RelatedSection>
        )}

        {/* CTA */}
        <CTACard>
          <CTATitle>Ready to Get Started?</CTATitle>
          <CTADescription>
            Contact us today to discuss how we can help with your {service.title.toLowerCase()} needs.
          </CTADescription>
          <CTAButton href={`/contact?subject=${encodeURIComponent(service.title)}`}>
            Contact Us
          </CTAButton>
        </CTACard>
      </ContentWrapper>
    </PageContainer>
  );
}