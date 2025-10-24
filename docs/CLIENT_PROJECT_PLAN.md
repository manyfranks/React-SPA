# Indigenous Iron Construction - Website Redesign Project Plan

**Project Date:** October 22, 2025  
**Client:** Indigenous Iron Construction  
**Contact:** Andrea Aleck (Business Development Specialist)  
**Developer:** Matt  
**Current Status:** Planning & Architecture Phase

---

## Executive Summary

Indigenous Iron Construction requires a comprehensive website overhaul to consolidate two existing websites (.com Next.js and .ca Squarespace), expand from a single-page layout to a multi-page structure, and integrate substantial new content including detailed service descriptions, team bios, partner information, and testimonials.

**Key Objectives:**
1. Consolidate two domains into one production site
2. Migrate from single-page to multi-page architecture
3. Integrate comprehensive new content and imagery
4. Improve SEO and discoverability
5. Create a professional, industry-appropriate design
6. Establish a maintainable platform for future updates

---

## Technical Recommendation: Migrate to Next.js

### Current State
- **Platform:** Create React App (CRA) - Single Page Application
- **Hosting:** Vercel
- **Domain:** .com (primary), .ca (Squarespace)
- **Stack:** React 18, styled-components 5.3.11, react-router-dom 5

### Recommended New Architecture

**Platform:** Next.js 14+ (App Router)

**Why Next.js over Current CRA:**

| Requirement | CRA (Current) | Next.js (Recommended) |
|-------------|---------------|----------------------|
| **SEO Optimization** | ❌ Poor (client-side only) | ✅ Excellent (SSR/SSG) |
| **Page Load Speed** | ⚠️ Slower (JS bundle loads first) | ✅ Fast (pre-rendered HTML) |
| **Multi-Page Structure** | ⚠️ Client-side routing only | ✅ File-based routing |
| **Image Optimization** | ❌ Manual | ✅ Automatic (`next/image`) |
| **Form Handling** | ⚠️ Requires external backend | ✅ Built-in API routes |
| **Content Management** | ❌ Difficult | ✅ Easy (can add CMS later) |
| **Deployment** | ✅ Vercel-ready | ✅ Vercel-optimized |

**SEO Impact:** For a B2B construction company competing for government and corporate contracts, strong search engine visibility is critical. Next.js's server-side rendering ensures Google and other search engines can fully index all content.

---

## Site Architecture & Navigation

### Proposed Site Map

```
indigenousiron.com/
├── / (Home/Landing Page)
│   ├── Hero Section
│   ├── Services Overview (with "Learn More" links)
│   ├── Company Snapshot
│   ├── Featured Partners
│   ├── Testimonials Preview
│   └── Contact CTA
│
├── /services
│   ├── Services Overview
│   └── Links to individual service pages
│
├── /services/civil-works
├── /services/land-development
├── /services/land-remediation
├── /services/contaminated-materials
├── /services/land-surveying (AMR Division)
├── /services/marine-division
├── /services/aquatic-spill-response
├── /services/project-management
├── /services/hydrovac
├── /services/street-sweeping
├── /services/social-responsibility
│
├── /about
│   ├── Company Profile
│   ├── Core Values
│   ├── Mission & Vision
│   └── Link to Team page
│
├── /team
│   ├── Cody LaRock (Founder)
│   ├── Mitch Power (AMR Land Surveying)
│   ├── Josh Power (Field Manager)
│   └── Charles Mwin-Era (Drafter)
│
├── /partners
│   ├── Partner descriptions
│   └── Logo grid with links
│
├── /testimonials (optional standalone page)
│
├── /contact
│   ├── Contact form
│   ├── Contact information
│   └── Multiple contact options
│
└── /projects (Phase 2 - if legal concerns resolved)
    └── Case studies/portfolio
```

### Navigation Structure

**Main Header Navigation:**
- Home
- Services (dropdown/mega menu)
- About
- Team
- Partners
- Contact

**Services Dropdown:**
- Civil Works
- Marine Division
- Land Surveying
- Hydro Vac Services
- Street Sweeping
- View All Services →

---

## Content Mapping

### 1. Home Page (Landing Page)

**Current:** Single page with all content
**New:** Executive summary with links to detail pages

#### Hero Section
- Headline: "Indigenous Iron Construction"
- Subheading: Client's tagline
- CTA: "Get A Free Consultation"
- Background: Hero image/video

#### Services Overview (New Format)
**11 Service Cards with Icons:**

1. **Civil Services** 
   - Icon: Construction site/excavator
   - Brief description (2-3 lines)
   - "Learn More →" button → `/services/civil-works`

2. **Land Site Development**
   - Icon: Construction site/excavator
   - Brief description
   - Link to detail page

3. **Land Remediation & Fill Site Management**
   - Icon: Recycling/soil icon
   - Brief description
   - Link to detail page

4. **Contaminated Material Handling & Remediation**
   - Icon: Hazard symbol/environmental shield
   - Brief description
   - Link to detail page

5. **Land Surveying** (AMR Division)
   - Icon: Compass/map marker
   - Brief description
   - Link to detail page

6. **Marine Division**
   - Icon: Safety boat image
   - Brief description
   - Link to detail page

7. **Aquatic Spill Response**
   - Icon: Water droplet/orca
   - Brief description
   - Link to detail page

8. **Project Management & Safety**
   - Icon: Checklist/hard hat
   - Brief description
   - Link to detail page

9. **Hydro Vac**
   - Icon: Hydro vac truck
   - Brief description
   - Link to detail page

10. **Street Sweeping**
    - Icon: Street sweeper
    - Brief description
    - Link to detail page

11. **Social Responsibility**
    - Icon: Community/hands holding
    - Brief description
    - Link to detail page

#### Company Snapshot
- Brief "About Us" (3-4 sentences)
- Link: "Learn More About Our Story →" → `/about`

#### Featured Partners
- Partner logos (6-8 featured)
- Link: "View All Partners →" → `/partners`

#### Testimonials Preview
- 2-3 featured testimonials
- Link: "Read More Testimonials →" (if standalone page created)

#### Contact CTA
- "Ready to Start Your Project?"
- Contact form or link to `/contact`

---

### 2. Services Pages

#### Main Services Page (`/services`)
- Overview of all 11 services
- Grid/card layout
- Links to individual service detail pages

#### Individual Service Pages
Each service gets a dedicated page with:
- **Service Title**
- **Detailed Description** (from client's documents)
- **Key Capabilities/Sub-services** (bulleted list)
- **Relevant Images** (equipment, projects, team)
- **Call-to-Action:** "Interested in [Service]? Contact Us"
- **Related Services** (cross-linking)

**Example: `/services/civil-works`**
```
# Civil Works

[Detailed description from client docs]

## Our Civil Services Include:
- Bulk Earthworks
- Site Preparation
- Stormwater Management
- Excavation
- Infrastructure Installation
- Site Safety & Environmental Stewardship

[Image gallery]

[Contact CTA]

## Related Services
- Land Site Development
- Project Management & Safety
```

---

### 3. About Page (`/about`)

**Content Structure:**
1. **Company Profile**
   - History and overview
   - 100% Indigenous-owned emphasis

2. **Core Values**
   - Indigenous Stewardship
   - Collaboration
   - Integrity

3. **Mission Statement**

4. **Vision Statement**

5. **Leadership Intro**
   - Brief overview
   - Link: "Meet Our Team →" → `/team`

6. **About the Founder - Cody LaRock**
   - Full bio from client docs
   - Photo
   - Professional background
   - Cultural connections

---

### 4. Team Page (`/team`)

**Team Member Profiles:**

1. **Cody LaRock** - Founder & Owner
   - Photo
   - Full bio (from About page or extended version)
   - Role & responsibilities

2. **Mitch Power, B.C.L.S, C.L.S** - AMR Land Surveying
   - Photo
   - Education & certifications
   - Experience (30+ years)
   - Specializations

3. **Josh Power** - Crew Field Manager
   - Photo
   - Education (Survey Theory & Calculations)
   - Role & responsibilities

4. **Charles Mwin-Era** - Drafter
   - Photo
   - Education (Architecture Design & Civil 3D)
   - Specializations

**Layout:** Professional grid with photos, names, titles, and expandable bios

---

### 5. Partners Page (`/partners`)

**Content:**
- Introduction paragraph (from client docs)
- Partner logo grid (clickable, links to partner websites)

**Partners to Include:**
- BC First Nation Environmental Stewardship
- BC Parks
- Marine Habitat Restoration
- Nucor Environmental Solutions
- Canadian Landscaping and Civil Services
- Crosby Marine Film Services
- Sure Span (if client confirms)

**Optional:** Brief description for each partner explaining the nature of the partnership

---

### 6. Testimonials Page (Optional)

**If Creating Standalone Page:**
- Full testimonials (currently 2 provided)
- Structured with:
  - Quote
  - Author name & title
  - Company/organization
  - Photo (if available)

**Alternative:** Keep testimonials only on landing page

**Current Testimonials:**
1. Nicole Phillips - BC Ministry of Environment and Parks (boat taxi service)
2. Kayla Suhner - Nauťsa mawt Event Management (water taxi services)

---

### 7. Contact Page (`/contact`)

**Content Sections:**

1. **Header**
   - "We'd Love to Work with You!"
   - Brief intro about services

2. **Contact Form**
   - Name
   - Email
   - Company (optional)
   - Subject dropdown (pre-populated with service types)
   - Message
   - Submit button

3. **Contact Information**
   - **Question to Client:** Multiple contacts or single point?
     - General inquiries: [Contact name & info]
     - Hydro Vac bookings: Josh [info]
     - Land Surveying: Mitch [info]
     - Marine Division: [Contact name & info]
   
4. **Office Location** (if applicable)

5. **Social Media Links** (if applicable)

**Form Backend:** Use Next.js API route to handle submissions (email notification, store in database, or forward to CRM)

---

## Design & UX Guidelines

### Industry Considerations

**Construction Industry Expectations:**
- Professional, trustworthy aesthetic
- Clear hierarchy and easy navigation
- Emphasis on credentials, certifications, and experience
- High-quality project imagery
- Mobile-friendly (for on-site access)
- Fast loading (field teams often have limited bandwidth)

**Target Audience:**
- Government agencies (BC Parks, Ministry of Environment)
- Large contractors (for subcontracting)
- First Nations communities
- Private developers

### Design Principles

1. **Color Palette**
   - Keep existing brand colors
   - Earth tones to reflect Indigenous values and environmental stewardship
   - Professional blues/greens for trust and reliability

2. **Typography**
   - Clean, readable sans-serif fonts
   - Hierarchical heading structure
   - Good contrast for accessibility

3. **Imagery**
   - High-quality photos of equipment, projects, and team
   - Indigenous cultural imagery (respectfully integrated)
   - Before/after project photos
   - Team photos (professional headshots)

4. **Layout**
   - Clean, grid-based layouts
   - Ample white space
   - Card-based design for services/team/partners
   - Sticky navigation for easy access
   - Mobile-first responsive design

5. **Components**
   - Icon integration for services
   - Image carousels/galleries for projects
   - Testimonial cards
   - Partner logo grid
   - Contact forms with validation
   - "Back to Top" button for long pages

---

## Technical Implementation Plan

### Phase 1: Architecture & Setup (Week 1)

#### 1.1 Next.js Migration
- [x] Current React 18 + CRA setup
- [ ] Install Next.js 14 (App Router)
- [ ] Set up project structure
- [ ] Configure `next.config.js`
- [ ] Update `package.json` dependencies
- [ ] Set up TypeScript (optional but recommended)

#### 1.2 Preserve Existing Components
- [ ] Migrate styled-components setup
- [ ] Move existing components to Next.js structure
- [ ] Update import paths
- [ ] Preserve current styling

#### 1.3 File Structure
```
/
├── app/
│   ├── layout.js          # Root layout with header/footer
│   ├── page.js            # Home page
│   ├── services/
│   │   ├── page.js        # Services overview
│   │   ├── civil-works/page.js
│   │   ├── marine-division/page.js
│   │   └── [...other services]
│   ├── about/page.js
│   ├── team/page.js
│   ├── partners/page.js
│   ├── contact/page.js
│   └── api/
│       └── contact/route.js  # Contact form handler
│
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── ServiceCard/
│   ├── TestimonialCard/
│   ├── TeamMemberCard/
│   └── [...existing components]
│
├── public/
│   ├── images/
│   ├── videos/
│   └── icons/
│
└── styles/
    └── global.css
```

#### 1.4 Routing & Navigation
- [ ] Implement file-based routing
- [ ] Create navigation component
- [ ] Add dropdown/mega menu for services
- [ ] Mobile hamburger menu
- [ ] Active page highlighting

---

### Phase 2: Content Integration & New Pages (Week 2-3)

#### 2.1 Home Page Restructure
- [ ] Simplify to executive summary format
- [ ] Create 11 service cards with icons
- [ ] Add "Learn More" CTAs
- [ ] Integrate partner logo section
- [ ] Add testimonials preview
- [ ] Update hero section

#### 2.2 Services Pages
- [ ] Create main `/services` page
- [ ] Create 11 individual service pages:
  - [ ] Civil Works
  - [ ] Land Development
  - [ ] Land Remediation
  - [ ] Contaminated Materials
  - [ ] Land Surveying (AMR)
  - [ ] Marine Division
  - [ ] Aquatic Spill Response
  - [ ] Project Management
  - [ ] Hydro Vac
  - [ ] Street Sweeping
  - [ ] Social Responsibility

#### 2.3 Company Pages
- [ ] Create `/about` page
- [ ] Create `/team` page with 4 profiles
- [ ] Create `/partners` page
- [ ] Create `/contact` page

#### 2.4 Forms & Interactions
- [ ] Build contact form
- [ ] Implement form validation
- [ ] Create API route for form submission
- [ ] Email notification setup
- [ ] Success/error messaging

---

### Phase 3: Media & Assets (Week 3-4)

#### 3.1 Image Integration
- [ ] Receive and organize client images
- [ ] Optimize images (Next.js Image component)
- [ ] Create image galleries for services
- [ ] Add team photos
- [ ] Integrate partner logos

#### 3.2 Icons
- [ ] Source or create 11 service icons
- [ ] Ensure consistent style
- [ ] Optimize for web (SVG preferred)

#### 3.3 Content Population
- [ ] Populate all service page content
- [ ] Add all team bios
- [ ] Insert testimonials
- [ ] Update company information
- [ ] Add partner descriptions

---

### Phase 4: Domain Consolidation (Week 4)

#### 4.1 DNS & Redirects
- [ ] Re-purchase/reconnect .com domain
- [ ] Set up 301 redirect from .ca to .com
- [ ] Update DNS settings
- [ ] Verify SSL certificates
- [ ] Test all redirects

#### 4.2 SEO Implementation
- [ ] Add meta titles and descriptions (all pages)
- [ ] Implement Open Graph tags
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Set up Google Search Console
- [ ] Implement schema.org markup (Organization, LocalBusiness)

---

### Phase 5: Testing & Launch (Week 5)

#### 5.1 Quality Assurance
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness testing (iOS, Android)
- [ ] Form testing
- [ ] Link validation (internal and external)
- [ ] Image loading verification
- [ ] Performance testing (Lighthouse)

#### 5.2 Performance Optimization
- [ ] Image optimization audit
- [ ] Code splitting review
- [ ] Lazy loading implementation
- [ ] Font optimization
- [ ] Target Lighthouse score: 90+

#### 5.3 Deployment
- [ ] Deploy to Vercel
- [ ] Configure production domain
- [ ] Set up environment variables
- [ ] Enable analytics (optional)
- [ ] Final production testing

#### 5.4 Post-Launch
- [ ] 7-day bug fix window
- [ ] Monitor performance
- [ ] Gather client feedback
- [ ] Documentation for future updates

---

## Cost Breakdown

Based on the initial estimate provided to the client:

### Estimated Hours by Phase

| Phase | Task | Hours | Cost (@$75/hr) |
|-------|------|-------|----------------|
| **Phase 1** | Next.js migration & setup | 10-12 | $750-$900 |
| **Phase 1** | Component preservation | 4-6 | $300-$450 |
| **Phase 2** | Home page restructure | 6-8 | $450-$600 |
| **Phase 2** | 11 service pages | 16-20 | $1,200-$1,500 |
| **Phase 2** | About/Team/Partners/Contact pages | 8-12 | $600-$900 |
| **Phase 2** | Forms & API routes | 4-6 | $300-$450 |
| **Phase 3** | Image integration | 6-10 | $450-$750 |
| **Phase 3** | Content population | 6-8 | $450-$600 |
| **Phase 4** | Domain consolidation | 4-6 | $300-$450 |
| **Phase 4** | SEO implementation | 4-6 | $300-$450 |
| **Phase 5** | Testing & QA | 6-8 | $450-$600 |
| **Phase 5** | Deployment & launch | 3-4 | $225-$300 |
| | | | |
| **Total** | | **77-106 hrs** | **$5,775-$7,950** |

**Note:** This is higher than the initial 31-52 hour estimate because it includes the Next.js migration. The additional 20-30 hours are for the architectural upgrade.

### Revised Estimate Options

**Option A: Full Next.js Migration (Recommended)**
- **Hours:** 77-106
- **Cost:** $5,775-$7,950
- **Benefits:** Best SEO, performance, scalability, maintainability

**Option B: Stay with CRA + Add Pages**
- **Hours:** 55-75
- **Cost:** $4,125-$5,625
- **Benefits:** Lower upfront cost
- **Drawbacks:** Poor SEO, slower performance, harder to maintain long-term

**Recommendation:** Option A. The additional investment in Next.js will pay off through better search rankings, faster load times, and easier content management. For a B2B company targeting government contracts, SEO is not optional.

---

## Timeline

### Proposed 5-Week Timeline

**Week 1:** Architecture & Setup
- Next.js migration
- Project scaffolding
- Component preservation

**Week 2:** Content Integration Part 1
- Home page restructure
- Service pages (6 of 11)

**Week 3:** Content Integration Part 2
- Service pages (remaining 5)
- About/Team/Partners/Contact pages

**Week 4:** Media, SEO & Domain
- Image integration
- Content population
- Domain consolidation
- SEO implementation

**Week 5:** Testing & Launch
- QA across devices
- Performance optimization
- Deployment
- Post-launch support

**Dependencies:**
- Client asset delivery (images, logos, finalized copy)
- Domain access/credentials
- Content approval at key milestones

---

## Client Deliverables

### Required from Client

1. **Content Assets**
   - High-resolution images (equipment, projects, team photos)
   - Partner logos (vector format preferred)
   - Team headshots (Cody, Mitch, Josh, Charles)
   - Finalized copy for all pages

2. **Access & Credentials**
   - Domain registrar access (.com and .ca)
   - Current hosting credentials
   - Google Workspace/email setup info (if applicable)

3. **Decisions**
   - Contact information structure (single vs. multiple contacts)
   - Projects/case studies inclusion (legal clearance)
   - Additional testimonials
   - Social media links

4. **Approval Points**
   - Design mockups (optional, or build and iterate)
   - Content structure
   - Final content review
   - Pre-launch approval

---

## Risk Mitigation

### Potential Challenges

1. **Content Volume**
   - **Risk:** Underestimation of content population time
   - **Mitigation:** Client provides content in structured format; use content templates

2. **Domain Transfer Issues**
   - **Risk:** Delays in domain access or DNS propagation
   - **Mitigation:** Start domain process early; have client initiate domain unlock

3. **Scope Creep**
   - **Risk:** Additional requests beyond initial scope
   - **Mitigation:** Clear SOW; change order process for additions

4. **Image Availability**
   - **Risk:** Client doesn't have high-quality images
   - **Mitigation:** Stock photo budget, or photo shoot coordination

5. **Legal Constraints (Projects Page)**
   - **Risk:** Cannot showcase certain projects due to NDAs
   - **Mitigation:** Phase 2 addition; clear legal review before content goes live

---

## Success Metrics

### Key Performance Indicators (KPIs)

1. **Performance**
   - Lighthouse Score: 90+ (all categories)
   - Page Load Time: < 2 seconds
   - Time to Interactive: < 3 seconds

2. **SEO**
   - All pages indexed by Google within 2 weeks
   - Improved search rankings for key terms (track over 3-6 months)
   - Zero crawl errors in Search Console

3. **User Experience**
   - Mobile-friendly test: Pass
   - Accessible (WCAG 2.1 AA compliance)
   - Form submission success rate: 95%+

4. **Business Goals**
   - Increased contact form submissions
   - Longer average session duration
   - Lower bounce rate on landing page

---

## Post-Launch Support

### Included (7 Days Post-Launch)
- Bug fixes for functionality issues
- Minor content corrections
- Performance troubleshooting

### Future Maintenance (Optional)
- Monthly content updates
- Image gallery additions
- New service page creation
- Analytics review and reporting
- SEO monitoring and optimization

**Rate:** $75/hour for ongoing maintenance

---

## Recommendations for Future Phases

### Phase 6 (Future): Content Management System (CMS)
- Integrate headless CMS (Sanity, Contentful, or Strapi)
- Allow client to update content without developer
- Useful for: News/blog, project updates, new testimonials

### Phase 7 (Future): Projects/Case Studies
- Once legal constraints resolved
- Detailed project pages with before/after photos
- Categories by service type
- Client testimonials tied to specific projects

### Phase 8 (Future): Advanced Features
- Employee portal/login
- Client portal for project tracking
- Online quote request system
- Live chat integration
- Multi-language support (if working with diverse communities)

---

## Conclusion & Next Steps

This comprehensive plan transforms Indigenous Iron Construction's web presence from a single-page site to a robust, multi-page platform that properly showcases their extensive services, team expertise, and Indigenous values.

### Immediate Next Steps

1. **Client Review:** Andrea reviews this plan and provides feedback
2. **Kickoff Meeting:** 30-45 minute call to:
   - Finalize page list
   - Review content structure
   - Confirm timeline
   - Discuss any questions
3. **SOW Signature:** Formalize scope and cost
4. **Asset Collection:** Client shares images, logos, and finalized copy
5. **Development Begins:** Start Phase 1 within 3-5 business days

### Questions for Client

1. Do you prefer Option A (Next.js migration) or Option B (stay with CRA)?
2. What is the primary contact structure for the Contact page?
3. Can we proceed with the Projects/Case Studies page, or should it be Phase 2?
4. Do you have professional photos, or do we need to allocate budget for stock images?
5. Are there any specific design preferences or competitor sites you admire?

---

**Prepared by:** Matt  
**Date:** October 22, 2025  
**Contact:** [Your contact information]