'use client';

import React from 'react';
import Footer from '../src/components/Footer/index.dev';
import styled from 'styled-components';

const DummyContent = styled.div`
  min-height: 60vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`;

const ContentBox = styled.div`
  max-width: 800px;
  text-align: center;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #01bf71;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
`;

const Badge = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(1, 191, 113, 0.1);
  border: 1px solid #01bf71;
  border-radius: 4px;
  color: #01bf71;
  font-size: 0.9rem;
  font-weight: 600;
`;

export default function FooterDevPage() {
  return (
    <>
      <DummyContent>
        <ContentBox>
          <Title>Footer Development Preview</Title>
          <Description>
            This is a development page for testing the new footer design. 
            Scroll down to see the redesigned footer with contact information, 
            quick links, and social media integration.
          </Description>
          <Badge>Isolated Testing Environment</Badge>
        </ContentBox>
      </DummyContent>
      <Footer />
    </>
  );
}