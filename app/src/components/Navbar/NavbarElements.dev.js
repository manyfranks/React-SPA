import styled from 'styled-components';
import Link from 'next/link';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? 'rgba(16, 21, 34, 0.85)' : 'transparent')};
    backdrop-filter: ${({ scrollNav }) => (scrollNav ? 'blur(12px)' : 'none')};
    -webkit-backdrop-filter: ${({ scrollNav }) => (scrollNav ? 'blur(12px)' : 'none')};
    border-bottom: ${({ scrollNav }) => (scrollNav ? '1px solid rgba(1, 191, 113, 0.1)' : 'none')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: ${({ scrollNav }) => (scrollNav ? '0' : '20px')};
    z-index: 10;
    transition: all 0.3s ease;
    box-shadow: ${({ scrollNav }) => (scrollNav ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none')};

    @media screen and (max-width: 960px) {
        transition: 0.8s all-ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 12px;
    max-width: 1100px;
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    // mobile only display
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    text-align: center;
    flex: 1;
    gap: 0.5rem;

    // not shown on mobile
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%);
        width: 0%;
        height: 2px;
        background-color: #01bf71;
        transition: width 0.3s ease;
    }

    @media (hover: hover) {
        &:hover::after {
            width: 80%;
        }
    }

    //bottom green bar when selected
    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled.a`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #ffffff;
    font-size: 16px;
    outline: none;
    border: none;
		cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;