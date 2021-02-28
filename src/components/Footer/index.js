import React from 'react';
import {animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, 
        FooterWrap, 
        FooterLinksContainer, 
        FooterLinksWrapper, 
        FooterLinkItems, 
        FooterLinkTitle, 
        FooterLink,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        WebsiteRights,
        SocialIcons,
        SocialIconLink,
     } 
        from './FooterElements';

const Footer = () => {

    //function that scrolls to top of page
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer id='footer'>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Footer Col 1</FooterLinkTitle>
                                <FooterLink to="/signin">Working Link</FooterLink>
                                <FooterLink to="/">Footer Link 1</FooterLink>
                                <FooterLink to="/">Footer Link 2</FooterLink>
                                <FooterLink to="/">Footer Link 3</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Footer Col 2</FooterLinkTitle>
                                <FooterLink to="/">Footer Link 1</FooterLink>
                                <FooterLink to="/">Footer Link 2</FooterLink>
                                <FooterLink to="/">Footer Link 3</FooterLink>
                                <FooterLink to="/">Footer Link 4</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                        <FooterLinkTitle>Footer Col 3</FooterLinkTitle>
                                <FooterLink to="/">Footer Link 1</FooterLink>
                                <FooterLink to="/">Footer Link 2</FooterLink>
                                <FooterLink to="/">Footer Link 3</FooterLink>
                                <FooterLink to="/">Footer Link 4</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>Footer Col 4</FooterLinkTitle>
                                <FooterLink to="/">Footer Link 1</FooterLink>
                                <FooterLink to="/">Footer Link 2</FooterLink>
                                <FooterLink to="/">Footer Link 3</FooterLink>
                                <FooterLink to="/">Footer Link 4</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            React SPA
                        </SocialLogo>
                        <WebsiteRights>React SPA © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.twitter.com/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
