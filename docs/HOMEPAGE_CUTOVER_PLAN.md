# Homepage Cutover Plan: New Redesign Implementation

## Overview
This document outlines the step-by-step process to replace the current production homepage with the new redesigned landing page that has been developed and tested in `/landingpage-dev`.

## Current State Analysis

### Current Homepage Structure (`app/page.js`)
```javascript
// Old component imports
HeroSection from './src/components/HeroSection'
Services from './src/components/Services'
InfoSection from './src/components/InfoSection' (with Data)
PartnersSection from './src/components/PartnersSection'
ContactForm from './src/components/ContactForm' (with Data)
```

### New Landing Page Structure (`app/landingpage-dev/page.js`)
```javascript
// New component imports (all using .dev versions)
HeroSection from '../src/components/HeroSection/index.dev'
AboutSection from '../src/components/AboutSection/index.dev'
LogoMarquee from '../src/components/LogoMarquee/index.dev'
PartnersSection from '../src/components/PartnersSection/index.dev'
ServicesTeaser from '../src/components/ServicesTeaser/index.dev'
// Footer added automatically via LayoutWrapper
```

## Pre-Cutover Checklist
- [ ] Ensure all dev components are tested and working
- [ ] Verify navbar updates are applied globally
- [ ] Confirm Footer component is already updated to new design
- [ ] Test `/landingpage-dev` one final time
- [ ] Create backup branch or commit current state

## Cutover Process

### Phase 1: Backup Current Production Components
Create `.backup` versions of current production components to preserve rollback capability:

1. **HeroSection**
   - Copy `app/src/components/HeroSection/index.js` → `app/src/components/HeroSection/index.backup.js`
   - Copy `app/src/components/HeroSection/HeroElements.js` → `app/src/components/HeroSection/HeroElements.backup.js`

2. **Services Component** (being replaced by ServicesTeaser)
   - Copy `app/src/components/Services/index.js` → `app/src/components/Services/index.backup.js`
   - Copy `app/src/components/Services/ServicesElements.js` → `app/src/components/Services/ServicesElements.backup.js`

3. **InfoSection** (being replaced by AboutSection)
   - Copy `app/src/components/InfoSection/index.js` → `app/src/components/InfoSection/index.backup.js`
   - Copy `app/src/components/InfoSection/InfoElements.js` → `app/src/components/InfoSection/InfoElements.backup.js`

4. **PartnersSection**
   - Copy `app/src/components/PartnersSection/index.js` → `app/src/components/PartnersSection/index.backup.js`
   - Copy `app/src/components/PartnersSection/PartnersElements.js` → `app/src/components/PartnersSection/PartnersElements.backup.js`

5. **ContactForm** (being removed from homepage)
   - No backup needed as it's still used on /contact page

### Phase 2: Migrate Dev Components to Production

1. **HeroSection Migration**
   ```bash
   # Replace production with dev version
   - Copy content from `index.dev.js` → `index.js`
   - Copy content from `HeroElements.dev.js` → `HeroElements.js`
   ```

2. **AboutSection** (New Component)
   ```bash
   # Create production version from dev
   - Copy `app/src/components/AboutSection/index.dev.js` → `app/src/components/AboutSection/index.js`
   ```

3. **LogoMarquee** (New Component)
   ```bash
   # Create production version from dev
   - Copy `app/src/components/LogoMarquee/index.dev.js` → `app/src/components/LogoMarquee/index.js`
   ```

4. **PartnersSection Migration**
   ```bash
   # Replace production with dev version
   - Copy content from `index.dev.js` → `index.js`
   ```

5. **ServicesTeaser** (New Component)
   ```bash
   # Create production version from dev
   - Copy `app/src/components/ServicesTeaser/index.dev.js` → `app/src/components/ServicesTeaser/index.js`
   ```

### Phase 3: Update Homepage File

Replace `app/page.js` with new component structure:

```javascript
'use client';

import React from 'react';
import HeroSection from './src/components/HeroSection';
import AboutSection from './src/components/AboutSection';
import LogoMarquee from './src/components/LogoMarquee';
import PartnersSection from './src/components/PartnersSection';
import ServicesTeaser from './src/components/ServicesTeaser';
import { companyData } from './src/lib/companyData';

export default function Home() {
  const { sectionLabel, subLabel, heading, testimonials, partners } = companyData.landing.partnersSnapshot;
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Logo Marquee as Section Divider */}
      <LogoMarquee partners={partners} />
      
      {/* Partners Section (Header + Testimonials) */}
      <PartnersSection
        sectionLabel={sectionLabel}
        subLabel={subLabel}
        heading={heading}
        testimonials={testimonials}
      />
      
      {/* Services Teaser */}
      <ServicesTeaser />
      
      {/* Footer is added automatically by global LayoutWrapper */}
    </>
  );
}
```

### Phase 4: Clean Up and Testing

1. **Remove Old Imports**
   - InfoSection Data files can be preserved for other pages if needed
   - ContactForm component remains for /contact page

2. **Test Critical Paths**
   - [ ] Homepage loads without errors
   - [ ] Hero video plays correctly
   - [ ] Logo marquee scrolls smoothly
   - [ ] All sections display properly
   - [ ] Footer appears at bottom
   - [ ] Navbar has frosted glass effect on scroll
   - [ ] All CTAs and links work
   - [ ] Mobile responsive design works

3. **Browser Testing**
   - [ ] Chrome
   - [ ] Firefox
   - [ ] Safari
   - [ ] Edge
   - [ ] Mobile browsers

### Phase 5: Post-Cutover Tasks

1. **Keep Dev Routes for Reference** (temporarily)
   - Keep `/landingpage-dev` active for A/B comparison
   - Keep individual section dev routes for isolated testing

2. **Monitor for Issues**
   - Check browser console for errors
   - Verify all images load
   - Test form submissions if applicable
   - Check performance metrics

3. **Update Other Pages** (Next Phase)
   - `/about` - Apply light mode design
   - `/services` - Update to match new theme
   - `/team` - Modernize layout
   - `/contact` - Ensure consistency

## Rollback Plan

If issues arise, restore from backup files:

1. Restore original `app/page.js` from git or backup
2. Restore component files from `.backup` versions:
   ```bash
   - HeroSection/index.backup.js → index.js
   - HeroSection/HeroElements.backup.js → HeroElements.js
   - Services/index.backup.js → index.js
   - PartnersSection/index.backup.js → index.js
   ```

## Success Criteria

- [ ] Homepage displays new design without errors
- [ ] All interactive elements function correctly
- [ ] Performance is equal or better than before
- [ ] Mobile experience is smooth
- [ ] No broken links or missing assets
- [ ] Navbar and Footer integrate seamlessly

## Notes for Implementation

1. **Component Dependencies**: Ensure all required data from `companyData.js` is properly imported
2. **Image Assets**: All images should already be in place from dev work
3. **Styling**: Global styles and component-specific styles should migrate with components
4. **Performance**: The new design uses modern optimization (Next.js Image, lazy loading)
5. **SEO**: Metadata should be preserved or enhanced

## Timeline Estimate

- Phase 1 (Backup): 5 minutes
- Phase 2 (Migration): 10 minutes
- Phase 3 (Update Homepage): 5 minutes
- Phase 4 (Testing): 15-20 minutes
- Phase 5 (Monitoring): Ongoing

**Total Estimated Time**: 35-40 minutes for careful implementation

## Commands Reference

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Check for build errors
npm run lint
```

---

**Important**: This cutover should be performed during a low-traffic period if the site is live. Always maintain backups and test thoroughly before considering the cutover complete.