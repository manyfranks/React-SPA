import styled from 'styled-components';
import Link from 'next/link';

export const CardGridContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => {
    switch (columns) {
      case 2:
        return 'repeat(2, 1fr)';
      case 3:
        return 'repeat(3, 1fr)';
      case 4:
        return 'repeat(4, 1fr)';
      default:
        return 'repeat(auto-fit, minmax(300px, 1fr))';
    }
  }};
  gap: 24px;
  
  @media screen and (max-width: 968px) {
    grid-template-columns: ${({ columns }) =>
      columns >= 3 ? 'repeat(2, 1fr)' : '1fr'};
  }
  
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const Card = styled(({ href, ...props }) => 
  href ? <Link href={href} {...props} /> : <div {...props} />
)`
  background: ${({ variant }) => 
    variant === 'primary' ? '#f5f5f5' : '#f8f9fa'};
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: ${({ href }) => (href ? 'pointer' : 'default')};
  
  ${({ href }) => 
    href && `
      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
      }
    `}
  
  @media screen and (max-width: 480px) {
    border-radius: 12px;
  }
`;

export const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${({ height }) => height || '200px'};
  overflow: hidden;
  background: #e8e8e8;
  
  img {
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${Card}:hover & img {
    transform: scale(1.05);
  }
  
  @media screen and (max-width: 640px) {
    height: ${({ height }) => 
      height === '300px' ? '200px' : height === '200px' ? '160px' : height};
  }
`;

export const CardContent = styled.div`
  padding: ${({ compact }) => (compact ? '20px' : '24px')};
  display: flex;
  flex-direction: column;
  gap: ${({ compact }) => (compact ? '8px' : '12px')};
  flex: 1;
  
  @media screen and (max-width: 480px) {
    padding: ${({ compact }) => (compact ? '16px' : '20px')};
  }
`;

export const CardIcon = styled.div`
  font-size: 32px;
  color: #01bf71;
  margin-bottom: 8px;
  
  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const CardTitle = styled.h3`
  font-size: ${({ size }) => {
    switch (size) {
      case 'large':
        return '24px';
      case 'small':
        return '16px';
      default:
        return '20px';
    }
  }};
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.3;
  
  @media screen and (max-width: 640px) {
    font-size: ${({ size }) => {
      switch (size) {
        case 'large':
          return '20px';
        case 'small':
          return '15px';
        default:
          return '18px';
      }
    }};
  }
`;

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #666;
  margin: 0;
  
  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: #999;
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
`;

export const CardBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  background: ${({ variant }) => 
    variant === 'primary' ? '#01bf71' : '#e8e8e8'};
  color: ${({ variant }) => 
    variant === 'primary' ? '#ffffff' : '#1a1a1a'};
  font-size: 12px;
  font-weight: 600;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const CardFooter = styled.div`
  padding: 16px 24px;
  background: rgba(0, 0, 0, 0.02);
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media screen and (max-width: 480px) {
    padding: 14px 20px;
  }
`;