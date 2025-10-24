import styled from 'styled-components';
import Link from 'next/link';

export const BreadcrumbNav = styled.nav`
  padding: 16px 0;
  
  @media screen and (max-width: 768px) {
    padding: 12px 0;
  }
`;

export const BreadcrumbList = styled.ol`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 8px;
`;

export const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  
  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export const BreadcrumbLink = styled(Link)`
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  
  &:hover {
    color: #01bf71;
  }
  
  @media screen and (max-width: 768px) {
    max-width: 150px;
  }
  
  @media screen and (max-width: 480px) {
    max-width: 100px;
  }
`;

export const BreadcrumbCurrent = styled.span`
  color: #01bf71;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  
  @media screen and (max-width: 768px) {
    max-width: 150px;
  }
  
  @media screen and (max-width: 480px) {
    max-width: 100px;
  }
`;

export const BreadcrumbSeparator = styled.span`
  color: #999;
  margin: 0 4px;
  user-select: none;
  
  &::before {
    content: '/';
  }
`;