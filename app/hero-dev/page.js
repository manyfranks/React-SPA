'use client';

import React from 'react';
import HeroSection from '../src/components/HeroSection/index.dev';
import styled from 'styled-components';

const Spacer = styled.div`
  height: 500px;
  background: #ffffff;
`;

export default function HeroDevPage() {
  return (
    <>
      <HeroSection />
      <Spacer />
    </>
  );
}