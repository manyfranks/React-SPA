# About Page Implementation Plan

## Overview
Create a professional About page for Indigenous Iron Construction that showcases the company's values, mission, vision, and founder information.

## Data Structure for companyData.js

```javascript
export const companyData = {
  companyProfile: {
    title: "Indigenous Iron Construction",
    description: "Indigenous Iron Construction is a 100% Indigenous-owned company, rapidly expanding within the construction industry. We specialize in delivering high-quality infrastructure projects while honouring Indigenous values and culture. Our expertise includes hydro-vac services, street sweeping, site development, land remediation, fill site management, land surveying, project management, and safety compliance."
  },
  
  coreValues: [
    {
      title: "Indigenous Stewardship",
      description: "Responsible management of natural resources and land in alignment with Indigenous traditions and practices."
    },
    {
      title: "Collaboration",
      description: "Building strong partnerships with Indigenous communities and public and private sector organizations to maximize opportunities for Indigenous businesses."
    },
    {
      title: "Integrity",
      description: "Conducting business with transparency and accountability, fostering trust with partners, clients, and stakeholders."
    }
  ],
  
  mission: "Our mission is to create meaningful employment opportunities, promote skill development, and drive economic growth within Indigenous communities. We strive to lead the construction industry while advocating for Indigenous rights and interests.",
  
  vision: "We envision a future where Indigenous communities thrive through sustainable economic development, driven by strong partnerships and an unwavering commitment to cultural values.",
  
  leadershipIntro: "Indigenous Iron Construction is owned and managed by a team with extensive experience in civil construction projects. Our leadership specializes in Indigenous partnerships and maximizing opportunities for Indigenous businesses through large-scale public sector projects. We are dedicated to creating a positive and lasting impact in the communities we serve.",
  
  founder: {
    name: "Cody LaRock",
    title: "Founder & Owner",
    bio: "Cody is a Tsleil-Waututh First Nation Community member. He has extensive civil construction project experience, and the last few years have been productive in a senior development management role with KFN Enterprises. He owns and manages several businesses (including Indigenous Iron Construction) and specializes in Indigenous partnerships and maximizing opportunities and benefits for Indigenous businesses through large public sector projects."
  }
};
```

## Page Layout Structure

### 1. Hero Section
- **Background**: Subtle gradient or image
- **Title**: "About Indigenous Iron Construction"
- **Subtitle**: Brief introduction paragraph

### 2. Company Profile Section
- **Full Width Container**
- **Centered Text Block**
- **Typography**: Large, readable font
- **Styling**: Professional with subtle Indigenous design elements

### 3. Mission & Vision Section (Two-Column Layout)
- **Left Column**: Mission statement with icon/graphic
- **Right Column**: Vision statement with icon/graphic
- **Background**: Light gray or off-white for contrast
- **Responsive**: Stack on mobile devices

### 4. Core Values Section (Three-Column Grid)
- **Grid Layout**: 3 columns on desktop, 1 on mobile
- **Each Value Card**:
  - Icon placeholder at top
  - Title in bold
  - Description text
  - Subtle border or shadow for definition
- **Background**: White or very light color

### 5. Founder's Spotlight Section
- **Layout**: Two-column (image placeholder left, bio right)
- **Image Placeholder**: Styled div with aspect ratio 1:1
- **Bio Content**:
  - Name and title prominently displayed
  - Full biography text
  - Professional styling
- **Background**: Subtle accent color

### 6. Leadership CTA Section
- **Centered Content**
- **Intro Text**: leadershipIntro from data
- **CTA Button**: "Meet the Rest of Our Team"
- **Link**: Points to `/team` (future page)
- **Styling**: Prominent button with hover effects

## Styling Approach

### Color Palette
- **Primary**: Use existing brand colors from the project
- **Accent**: Earth tones reflecting Indigenous heritage
- **Text**: Dark gray (#333) for readability
- **Backgrounds**: Alternating white and light gray sections

### Typography
- **Headings**: Bold, clear hierarchy
- **Body Text**: Line height 1.6 for readability
- **Font Sizes**: Responsive scaling

### Spacing
- **Sections**: Generous padding (3-4rem vertical)
- **Content**: Max-width containers for readability
- **Mobile**: Adjusted padding for smaller screens

## Component Structure

```jsx
// app/about/page.js structure
import { companyData } from '../src/lib/companyData';

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>About Indigenous Iron Construction</h1>
        <p>Leading the way in sustainable construction with Indigenous values</p>
      </section>

      {/* Company Profile */}
      <section className="company-profile">
        <h2>{companyData.companyProfile.title}</h2>
        <p>{companyData.companyProfile.description}</p>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>{companyData.mission}</p>
        </div>
        <div className="vision">
          <h3>Our Vision</h3>
          <p>{companyData.vision}</p>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {companyData.coreValues.map((value) => (
            <div key={value.title} className="value-card">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="founder-spotlight">
        <div className="founder-image">
          {/* Placeholder for image */}
        </div>
        <div className="founder-bio">
          <h2>{companyData.founder.name}</h2>
          <h3>{companyData.founder.title}</h3>
          <p>{companyData.founder.bio}</p>
        </div>
      </section>

      {/* Leadership CTA */}
      <section className="leadership-cta">
        <p>{companyData.leadershipIntro}</p>
        <Link href="/team">
          <button>Meet the Rest of Our Team</button>
        </Link>
      </section>
    </div>
  );
}
```

## SEO Metadata

```javascript
export const metadata = {
  title: 'About Us | Indigenous Iron Construction',
  description: 'Learn about Indigenous Iron Construction - a 100% Indigenous-owned company specializing in high-quality infrastructure projects while honouring Indigenous values and culture.',
  keywords: 'Indigenous construction, civil works, Indigenous-owned business, sustainable construction, British Columbia construction'
};
```

## Implementation Steps

1. **Create companyData.js** in `app/src/lib/`
2. **Create about directory** at `app/about/`
3. **Create page.js** in the about directory
4. **Implement sections** in order:
   - Company Profile
   - Mission & Vision
   - Core Values grid
   - Founder Spotlight
   - Leadership CTA
5. **Add inline styles** following the existing pattern
6. **Test responsiveness** on different screen sizes
7. **Verify navigation** from other pages

## Testing Checklist

- [ ] Page loads at `/about`
- [ ] All content displays correctly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Links work properly (especially team link)
- [ ] SEO metadata appears in page head
- [ ] Styling is consistent with rest of site
- [ ] Content is readable and well-formatted