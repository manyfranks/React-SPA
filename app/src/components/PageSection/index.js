'use client';
import styled from 'styled-components';

const SectionContainer = styled.div`
  background-color: ${({ theme }) => (theme === 'dark' ? '#010606' : '#f9f9f9')};
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#010606')};
  min-height: 100vh;
  width: 100%;
  padding-top: 80px;
`;

export default function PageSection({ theme = 'dark', children }) {
  return (
    <SectionContainer theme={theme}>
      {children}
    </SectionContainer>
  );
}