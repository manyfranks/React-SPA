# Hero Section & Navbar Redesign - Implementation Plan

## Executive Summary

This document provides a comprehensive analysis of the current hero section and navbar implementation for the Indigenous Iron Construction website, along with a detailed plan for redesigning these components to match the reference design.

---

## 1. CURRENT IMPLEMENTATION ANALYSIS

### 1.1 Hero Section - Current State

**File Locations:**
- Component: [`app/src/components/HeroSection/index.js`](app/src/components/HeroSection/index.js:1)
- Styles: [`app/src/components/HeroSection/HeroElements.js`](app/src/components/HeroSection/HeroElements.js:1)

**Current Layout Structure:**
```
HeroContainer (800px height, dark background)
├── HeroBg (full viewport overlay)
│   └── VideoBg (video element with object-fit: cover)
├── :before (gradient overlay for darkening)
└── HeroContent (z-index: 3, centered)
    ├── HeroH1 ("Indigenous Iron Construction")
    ├── HeroP (subheading)
    └── HeroBtnWrapper
        └── Button (CTA)
```

**Current Styling Details:**

- **HeroContainer** (line 4-25):
  - Background: `#0c0c0c`
  - Display: `flex` with `justify-content: center` and `align-items: center`
  - Height: `800px`
  - Gradient overlay via `:before` pseudo-element with z-index 2

- **VideoBg** (line 38-44):
  - Position: absolute, fills entire container
  - Object-fit: `cover`
  - No border or border-radius
  - Background fallback: `#232a34`

- **HeroContent** (line 46-54):
  - Z-index: `3` (above video and gradient)
  - Max-width: `1200px`
  - Display: `flex-direction: column`
  - **Alignment: `align-items: center`** ⚠️ (needs to change to left)

- **HeroH1** (line 56-68):
  - Color: `#fff`
  - Font-size: `48px` (40px tablet, 32px mobile)
  - **Text-align: `center`** ⚠️ (needs to change to left)

- **HeroP** (line 70-84):
  - Margin-top: `24px`
  - Font-size: `24px` (22px tablet, 18px mobile)
  - **Text-align: `center`** ⚠️ (needs to change to left)
  - Max-width: `600px`

**Video Functionality:**
- Implements video carousel with 4 videos ([`index.js:17-23`](app/src/components/HeroSection/index.js:17))
- Auto-plays and switches on video end event
- No loop on individual videos

### 1.2 Navbar - Current State

**File Locations:**
- Component: [`app/src/components/Navbar/index.js`](app/src/components/Navbar/index.js:1)
- Styles: [`app/src/components/Navbar/NavbarElements.js`](app/src/components/Navbar/NavbarElements.js:1)

**Current Layout Structure:**
```
Nav (sticky, transparent → black on scroll)
└── NavbarContainer
    ├── NavLogo (left)
    ├── MobileIcon (hamburger menu)
    ├── NavMenu (center)
    │   ├── NavItem → NavLinks (Services)
    │   ├── NavItem → NavLinks (About)
    │   ├── NavItem → NavLinks (Team)
    │   └── NavItem → NavLinks (Contact)
    └── NavBtn
        └── NavBtnLink ("Call 778-928-4414")
```

**Current Styling Details:**

- **Nav** (line 4-19):
  - Background: Transparent initially, `#000` when scrolled past 80px
  - Height: `80px`
  - Position: `sticky` with `top: 0`
  - Z-index: `10`

- **NavbarContainer** (line 21-29):
  - Display: `flex` with `justify-content: space-between`
  - Max-width: `1100px`
  - Padding: `0 24px`

- **NavMenu** (line 58-71):
  - Display: `flex` with `align-items: center`
  - Centered with `margin: auto`
  - Hidden on mobile (≤768px)

- **NavLinks** (line 77-90):
  - Color: `#fff`
  - Padding: `0 1rem`
  - **No hover effects** ⚠️ (needs growing underline animation)
  - Has `.active` state with green border-bottom (3px, `#01bf71`)

- **NavBtnLink** (line 101-119):
  - Background: `#01bf71` (green)
  - Border-radius: `50px`
  - Has hover effect: background changes to `#fff`

---

## 2. REFERENCE DESIGN ANALYSIS

Based on the provided screenshot, the key differences are:

### 2.1 Hero Section Changes Required

1. **Video Border & Rounded Edges**
   - Video needs visible border (appears to be white/light colored)
   - Border-radius for rounded corners (appears to be ~20-24px)

2. **Text Alignment**
   - Main heading: **Left-aligned** (not centered)
   - Subheading: **Left-aligned** (not centered)
   - CTA button: **Left-aligned** (not centered)

3. **Layout Structure**
   - Content should stack vertically but aligned to the left side
   - Appears to have more padding/margin on the left

4. **Typography**
   - Main heading appears larger and bolder in reference

### 2.2 Navbar Changes Required

1. **Navigation Link Hover Effects**
   - Need growing underline animation on hover
   - Smooth transition effect
   - Underline should grow from center or left

2. **Layout**
   - Current layout (logo left, links center, CTA right) is correct ✓
   - No changes needed to basic structure

---

## 3. DETAILED IMPLEMENTATION PLAN

### 3.1 Navbar Hover Effects

**File to Modify:** [`app/src/components/Navbar/NavbarElements.js`](app/src/components/Navbar/NavbarElements.js:77)

**Changes Required to NavLinks styled component:**

```javascript
export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    position: relative; // NEW: needed for pseudo-element positioning
    
    // NEW: Underline animation using ::after pseudo-element
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 3px;
        background: #01bf71; // Match the active state color
        transition: width 0.3s ease-in-out;
    }
    
    &:hover::after {
        width: 80%; // Grows to 80% of link width on hover
    }

    // Active state (existing)
    &.active {
        border-bottom: 3px solid #01bf71;
    }
    
    // Alternative: if active state conflicts with ::after
    &.active::after {
        width: 80%;
    }
`;
```

**Alternative Approach - Simpler Border-Bottom Animation:**

```javascript
export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    border-bottom: 3px solid transparent; // NEW: invisible border
    transition: border-bottom-color 0.3s ease-in-out; // NEW: smooth transition
    
    &:hover {
        border-bottom-color: #01bf71; // NEW: show green border on hover
    }

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;
```

### 3.2 Hero Section - Video Border & Rounded Edges

**File to Modify:** [`app/src/components/HeroSection/HeroElements.js`](app/src/components/HeroSection/HeroElements.js:38)

**Changes Required to VideoBg styled component:**

```javascript
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    
    // NEW: Add border and rounded corners
    border: 4px solid rgba(255, 255, 255, 0.3); // Semi-transparent white border
    border-radius: 24px; // Rounded corners
    
    // Optional: add box-shadow for depth
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
`;
```

**Important Considerations:**
- The border will be visible over the video content
- Border-radius may clip the video edges
- Need to ensure the HeroBg container doesn't interfere with rounded corners

**Additional Changes to HeroBg (if needed):**

```javascript
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 20px; // NEW: Add padding to create space for border
`;
```

### 3.3 Hero Section - Left Alignment

**Files to Modify:** 
- [`app/src/components/HeroSection/HeroElements.js`](app/src/components/HeroSection/HeroElements.js:46)
- May need minimal changes to [`app/src/components/HeroSection/index.js`](app/src/components/HeroSection/index.js:65)

**Changes Required:**

**1. HeroContent (line 46-54):**
```javascript
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start; // CHANGED from 'center' to 'flex-start'
    
    // NEW: Add left positioning
    left: 0; // Anchor to left edge
    padding-left: 60px; // More substantial left padding
    
    @media screen and (max-width: 768px) {
        padding-left: 30px; // Reduce on mobile
    }
    
    @media screen and (max-width: 480px) {
        padding-left: 20px;
    }
`;
```

**2. HeroH1 (line 56-68):**
```javascript
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 60px; // INCREASED from 48px for more impact
    text-align: left; // CHANGED from 'center' to 'left'
    font-weight: 700; // NEW: Make bolder
    line-height: 1.1; // NEW: Tighter line height
    margin-bottom: 16px; // NEW: Add spacing below

    @media screen and (max-width: 768px) {
        font-size: 48px; // INCREASED from 40px
    }

    @media screen and (max-width: 480px) {
        font-size: 36px; // INCREASED from 32px
    }
`;
```

**3. HeroP (line 70-84):**
```javascript
export const HeroP = styled.p`
    margin-top: 0; // CHANGED from 24px (using h1's margin-bottom instead)
    color: #fff;
    font-size: 20px; // REDUCED from 24px for better hierarchy
    text-align: left; // CHANGED from 'center' to 'left'
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 18px; // REDUCED from 22px
    }

    @media screen and (max-width: 480px) {
        font-size: 16px; // REDUCED from 18px
    }
`;
```

**4. HeroBtnWrapper (line 86-91):**
```javascript
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start; // CHANGED from 'center' to 'flex-start'
`;
```

---

## 4. DEVELOPMENT & TESTING STRATEGY

### 4.1 Recommended File Structure for Development Page

Create a separate development page to test changes before applying to production:

```
/Users/matt/Desktop/Orio/iic/React-SPA/
├── app/
│   ├── hero-dev/                          # NEW: Development page
│   │   └── page.js                        # NEW: Dev page component
│   └── src/
│       └── components/
│           ├── HeroSection/
│           │   ├── index.js               # Current production
│           │   ├── index.dev.js           # NEW: Development version
│           │   ├── HeroElements.js        # Current production
│           │   └── HeroElements.dev.js    # NEW: Development styles
│           └── Navbar/
│               ├── index.js               # Current production
│               ├── index.dev.js           # NEW: Development version
│               ├── NavbarElements.js      # Current production
│               └── NavbarElements.dev.js  # NEW: Development styles
```

### 4.2 Development Page Component Example

**File: `app/hero-dev/page.js`**

```javascript
'use client';

import React, { useState } from 'react';
import HeroSection from '../src/components/HeroSection/index.dev';
import Navbar from '../src/components/Navbar/index.dev';
import Sidebar from '../src/components/Sidebar';

export default function HeroDevPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      
      {/* Development Controls */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        zIndex: 1000
      }}>
        <h3>Development Mode</h3>
        <p>Testing hero section and navbar redesign</p>
        <a href="/" style={{ color: '#01bf71' }}>← Back to Production</a>
      </div>
    </>
  );
}
```

### 4.3 Step-by-Step Implementation Approach

**Phase 1: Setup Development Environment**
1. Create `/app/hero-dev/page.js` for isolated testing
2. Create `.dev.js` versions of components
3. Test that development page loads correctly

**Phase 2: Implement Navbar Hover Effects**
1. Create `NavbarElements.dev.js` with hover animation code
2. Update `index.dev.js` to import dev styles
3. Test hover effects on development page
4. Verify responsiveness on mobile/tablet
5. Once approved, merge changes to production files

**Phase 3: Implement Hero Video Border**
1. Update `HeroElements.dev.js` with border and border-radius
2. Test video playback and carousel functionality
3. Verify border appearance on different screen sizes
4. Adjust padding/spacing if border clips content
5. Once approved, merge to production

**Phase 4: Implement Hero Content Left-Alignment**
1. Update all hero content styles for left alignment
2. Test layout at different viewport sizes
3. Verify button alignment and spacing
4. Ensure text doesn't overflow on mobile
5. Once approved, merge to production

**Phase 5: Final Integration Testing**
1. Test all changes together on development page
2. Verify scroll behavior and sticky navbar
3. Test video carousel transitions
4. Check all responsive breakpoints
5. Performance audit (video loading, animations)
6. Cross-browser testing (Chrome, Firefox, Safari)

**Phase 6: Production Deployment**
1. Merge all `.dev.js` changes to production files
2. Remove development page (or keep for future testing)
3. Deploy to staging environment
4. Final QA testing
5. Deploy to production

---

## 5. CODE EXAMPLES

### 5.1 Complete NavbarElements.dev.js Example

```javascript
import styled from 'styled-components';
import Link from 'next/link';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

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
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

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
    margin: auto;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

// UPDATED: NavLinks with hover animation
export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    position: relative;
    
    // Growing underline animation
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 3px;
        background: #01bf71;
        transition: width 0.3s ease-in-out;
    }
    
    &:hover::after {
        width: 80%;
    }

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
    color: #010606;
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
```

### 5.2 Complete HeroElements.dev.js Example

```javascript
import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), 
                    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 80%);
        z-index: 2;
    }
`;

// UPDATED: HeroBg with padding for video border
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 20px;
    
    @media screen and (max-width: 768px) {
        padding: 15px;
    }
    
    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

// UPDATED: VideoBg with border and rounded corners
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-radius: 24px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    
    @media screen and (max-width: 768px) {
        border-width: 3px;
        border-radius: 16px;
    }
    
    @media screen and (max-width: 480px) {
        border-width: 2px;
        border-radius: 12px;
    }
`;

// UPDATED: HeroContent with left alignment
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    left: 0;
    padding-left: 60px;
    
    @media screen and (max-width: 768px) {
        padding-left: 30px;
    }
    
    @media screen and (max-width: 480px) {
        padding-left: 20px;
    }
`;

// UPDATED: HeroH1 with left alignment and larger size
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 60px;
    text-align: left;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 16px;

    @media screen and (max-width: 768px) {
        font-size: 48px;
    }

    @media screen and (max-width: 480px) {
        font-size: 36px;
    }
`;

// UPDATED: HeroP with left alignment
export const HeroP = styled.p`
    margin-top: 0;
    color: #fff;
    font-size: 20px;
    text-align: left;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;

// UPDATED: HeroBtnWrapper with left alignment
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 30px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 30px;
`;
```

---

## 6. RESPONSIVE DESIGN CONSIDERATIONS

### 6.1 Breakpoints Used in Current Implementation

- **Desktop**: > 960px
- **Tablet**: 768px - 960px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

### 6.2 Responsive Adjustments for New Design

**Navbar:**
- Hover effects should be disabled on mobile (touch devices)
- Consider adding `@media (hover: hover)` query to prevent issues on touch screens

```javascript
export const NavLinks = styled(Link)`
    // ... existing styles ...
    
    // Only enable hover animation on devices with hover capability
    @media (hover: hover) {
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 3px;
            background: #01bf71;
            transition: width 0.3s ease-in-out;
        }
        
        &:hover::after {
            width: 80%;
        }
    }
`;
```

**Hero Section:**
- Video border width should decrease on smaller screens
- Border-radius should scale down proportionally
- Left padding should reduce on mobile to prevent content overflow
- Font sizes already have responsive scaling but may need adjustment

**Testing Checklist:**
- [ ] iPhone SE (375px width)
- [ ] iPhone 12/13 (390px width)
- [ ] iPad (768px width)
- [ ] Desktop 1920px
- [ ] Desktop 4K (2560px width)

---

## 7. POTENTIAL ISSUES & SOLUTIONS

### 7.1 Video Border Implementation

**Issue**: Border and border-radius on video element may clip content or cause rendering issues.

**Solutions**:
1. Apply border to parent container (HeroBg) instead of video element
2. Use pseudo-element overlay for border effect
3. Ensure adequate padding to prevent clipping

**Recommended Approach**:
Use HeroBg padding + VideoBg border as shown in code examples above.

### 7.2 Left-Aligned Content on Small Screens

**Issue**: Left-aligned content may touch screen edge on mobile devices.

**Solution**:
Implement responsive padding that increases on larger screens:
```javascript
padding-left: 20px;  // Mobile (480px)
padding-left: 30px;  // Tablet (768px)
padding-left: 60px;  // Desktop (>960px)
```

### 7.3 Navbar Hover Conflicts with Active State

**Issue**: The active state uses border-bottom, which may conflict with hover ::after animation.

**Solutions**:
1. Make active state also use ::after for consistency
2. Use different visual indicator for active state (background color, font weight)
3. Disable hover animation on active links

**Recommended Approach**:
```javascript
&.active::after {
    width: 80%;  // Show full underline for active state
}

&:not(.active):hover::after {
    width: 80%;  // Only animate on non-active links
}
```

### 7.4 Video Performance with Border Effects

**Issue**: Border-radius and box-shadow may impact video rendering performance.

**Solution**:
- Use `will-change: transform` to hint browser about animations
- Consider using simpler border without shadow on mobile
- Test on lower-end devices

---

## 8. NEXT STEPS FOR IMPLEMENTATION

### 8.1 Immediate Actions (Architect Mode)

1. ✅ **Completed**: Document current implementation
2. ✅ **Completed**: Analyze reference design requirements
3. ✅ **Completed**: Create detailed implementation plan
4. ⏭️ **Next**: Get user approval on this plan

### 8.2 Implementation Phase (Code Mode)

Once this plan is approved, switch to Code mode to:

1. Create development page structure
2. Implement navbar hover effects
3. Implement hero video border and rounded edges
4. Implement hero content left-alignment
5. Test all responsive breakpoints
6. Merge to production after approval

### 8.3 Testing Phase

1. Create test checklist
2. Test on multiple devices and browsers
3. Performance testing
4. Accessibility audit
5. User acceptance testing

---

## 9. SUMMARY

This implementation plan provides:

✅ **Complete analysis** of current hero section and navbar code  
✅ **Detailed comparison** with reference design  
✅ **Specific CSS changes** needed for all requirements  
✅ **Code examples** for all major changes  
✅ **Development strategy** with separate testing environment  
✅ **Step-by-step roadmap** for implementation  
✅ **Responsive design** considerations  
✅ **Risk mitigation** for potential issues  

**Estimated Implementation Time**: 4-6 hours
- Setup & Dev Page: 30 minutes
- Navbar Hover Effects: 1 hour
- Hero Video Border: 1 hour
- Hero Content Alignment: 1.5 hours
- Testing & Refinement: 1-2 hours

**Key Deliverables**:
1. Enhanced navbar with animated hover effects
2. Hero section with bordered video and rounded edges
3. Left-aligned hero content matching reference design
4. Fully responsive implementation across all breakpoints
5. Development page for isolated testing

**Next Step**: Get user approval to proceed with implementation in Code mode.