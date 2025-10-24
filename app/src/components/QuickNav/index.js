'use client';

import React, { useState, useEffect } from 'react';
import {
  QuickNavContainer,
  QuickNavWrapper,
  QuickNavList,
  QuickNavItem,
  QuickNavLink,
  QuickNavIcon,
} from './QuickNavElements';

const QuickNav = ({ items = [], sticky = false }) => {
  const [activeSection, setActiveSection] = useState('');

  // Smooth scroll to section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    
    if (element) {
      const offset = sticky ? 160 : 80; // Account for sticky navbar + quicknav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      
      // Update URL hash without jumping
      history.pushState(null, null, `#${sectionId}`);
      setActiveSection(sectionId);
    }
  };

  // Intersection Observer to detect active section
  useEffect(() => {
    if (typeof window === 'undefined' || items.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all section elements
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Set initial active section from URL hash
    if (window.location.hash) {
      const hashId = window.location.hash.substring(1);
      setActiveSection(hashId);
    }

    return () => {
      observer.disconnect();
    };
  }, [items]);

  // Keyboard navigation
  const handleKeyDown = (e, sectionId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(e, sectionId);
    }
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <QuickNavContainer sticky={sticky} role="navigation" aria-label="Quick navigation">
      <QuickNavWrapper>
        <QuickNavList>
          {items.map((item) => (
            <QuickNavItem key={item.id}>
              <QuickNavLink
                href={`#${item.id}`}
                isActive={activeSection === item.id}
                onClick={(e) => scrollToSection(e, item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                tabIndex={0}
                role="link"
                aria-current={activeSection === item.id ? 'true' : undefined}
              >
                {item.icon && <QuickNavIcon aria-hidden="true">{item.icon}</QuickNavIcon>}
                {item.label}
              </QuickNavLink>
            </QuickNavItem>
          ))}
        </QuickNavList>
      </QuickNavWrapper>
    </QuickNavContainer>
  );
};

export default QuickNav;