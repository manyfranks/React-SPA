'use client';

import React from 'react';
import AboutSection from '../src/components/AboutSection/index.dev';
import styled from 'styled-components';

const Spacer = styled.div`
  height: 500px;
  background: #ffffff;
`;

export default function AboutDevPage() {
  return (
    <>
      <AboutSection />
      <Spacer />
    </>
  );
}