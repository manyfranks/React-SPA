'use client';

import React from 'react';
import ServicesTeaser from '../src/components/ServicesTeaser/index.dev';
import styled from 'styled-components';

const Spacer = styled.div`
  height: 500px;
  background: #ffffff;
`;

export default function ServicesDevPage() {
  return (
    <>
      <ServicesTeaser />
      <Spacer />
    </>
  );
}