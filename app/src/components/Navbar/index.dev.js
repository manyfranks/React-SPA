import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements.dev';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    //when scroll past 80px, trigger header background
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo href="/" onClick={toggleHome}>
                            <img
                                src="/images/header-logo.png"
                                alt="Indigenous Iron"
                                style={{ height: '60px', width: 'auto' }}
                            />
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
              <NavItem>
                                <NavLinks href="/services">Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks href="/about">About</NavLinks>
                            </NavItem>
              <NavItem>
                                <NavLinks href="/team">Team</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks href="/contact">Contact</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
													<NavBtnLink href="tel:+17789284414">Call 778-928-4414</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;