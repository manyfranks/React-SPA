'use client';

import React from 'react';
import PartnersMarquee from '../src/components/PartnersMarquee/index.dev';
import styled from 'styled-components';

const Spacer = styled.div`
  height: 500px;
  background: #f8f9fa;
`;

export default function PartnersDevPage() {
  return (
    <>
      <PartnersMarquee />
      <Spacer />
    </>
  );
}