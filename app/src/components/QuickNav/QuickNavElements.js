import styled from 'styled-components';

export const QuickNavContainer = styled.nav`
  position: ${({ sticky }) => (sticky ? 'sticky' : 'relative')};
  top: ${({ sticky }) => (sticky ? '80px' : '0')};
  z-index: 8;
  background: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 16px 0;
  margin-bottom: 32px;
  
  @media screen and (max-width: 768px) {
    padding: 12px 0;
    margin-bottom: 24px;
  }
`;

export const QuickNavWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const QuickNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  min-width: min-content;
`;

export const QuickNavItem = styled.li`
  flex-shrink: 0;
`;

export const QuickNavLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 8px 20px;
  background: ${({ isActive }) => (isActive ? '#01bf71' : '#f5f5f5')};
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#1a1a1a')};
  font-size: 14px;
  font-weight: ${({ isActive }) => (isActive ? '600' : '500')};
  border-radius: 50px;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  
  &:hover {
    background: ${({ isActive }) => (isActive ? '#01a860' : '#e8e8e8')};
    transform: translateY(-2px);
  }
  
  &:focus {
    outline: none;
    border-color: #01bf71;
    box-shadow: 0 0 0 3px rgba(1, 191, 113, 0.1);
  }
  
  @media screen and (max-width: 480px) {
    padding: 7px 16px;
    font-size: 13px;
  }
`;

export const QuickNavIcon = styled.span`
  margin-right: 6px;
  font-size: 16px;
  
  @media screen and (max-width: 480px) {
    font-size: 14px;
    margin-right: 4px;
  }
`;