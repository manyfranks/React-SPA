# About Page Implementation Plan - Bird.ca Inspired Layout

## Overview
Create a professional About page for Indigenous Iron Construction inspired by Bird Construction's clean, modern layout with linked content sections.

## Page Structure (Bird.ca Style)

### 1. Hero Section
- **Large Hero Image/Placeholder**
- **Bold Title**: "Building Tomorrow's Infrastructure With Indigenous Values and Excellence"
- **Subtitle**: Optional tagline

### 2. Main Content Section
- **Full-width narrative about the company**
- Multiple paragraphs describing:
  - Company overview and 100% Indigenous ownership
  - Service offerings and expertise
  - Commitment to Indigenous communities
  - Collaborative approach and partnerships

### 3. Content Cards Grid (2x3 Layout)
Six key areas, each with title, description, and "Learn More" link:

#### Card 1: Mission & Vision
- **Title**: "Mission & Vision"
- **Description**: Brief preview of mission/vision
- **Link**: "Learn More About Our Mission & Vision"

#### Card 2: Core Values
- **Title**: "Core Values"
- **Description**: "Our commitment to Indigenous Stewardship, Collaboration, and Integrity guides everything we do."
- **Link**: "Explore Our Core Values"

#### Card 3: Indigenous Stewardship
- **Title**: "Indigenous Stewardship"
- **Description**: "Honoring traditional values while delivering modern construction excellence."
- **Link**: "Learn About Our Indigenous Approach"

#### Card 4: Safety & Compliance
- **Title**: "Safety & Compliance"
- **Description**: "Creating safe workplaces where everyone returns home healthy."
- **Link**: "Our Commitment to Safety"

#### Card 5: Our Founder
- **Title**: "Our Founder"
- **Description**: "Meet Cody LaRock and learn about his vision for Indigenous Iron Construction."
- **Link**: "Meet Cody LaRock"

#### Card 6: Leadership Team
- **Title**: "Leadership Team"
- **Description**: "Experienced professionals dedicated to growth and community impact."
- **Link**: "Meet Our Team"

## Updated Data Structure for companyData.js

```javascript
export const companyData = {
  // Hero Section
  hero: {
    title: "Building Tomorrow's Infrastructure With Indigenous Values and Excellence",
    subtitle: "100% Indigenous-Owned • Community-Focused • Industry Leaders"
  },
  
  // Main narrative content
  mainContent: {
    paragraphs: [
      "Indigenous Iron Construction is a 100% Indigenous-owned company, rapidly expanding within the construction industry. We specialize in delivering high-quality infrastructure projects while honouring Indigenous values and culture. Our expertise includes hydro-vac services, street sweeping, site development, land remediation, fill site management, land surveying, project management, and safety compliance.",
      
      "With a growing workforce and operations across British Columbia, Indigenous Iron serves a diverse cross-section of market sectors with the knowledge, capabilities, and experience to support commercial, institutional, and infrastructure projects for both public and private sector clients.",
      
      "Our model for success is grounded in respect, transparency, and collaboration. We believe in a team approach that values people and thrives on fresh ideas and intelligent solutions. At Indigenous Iron, we know from experience that collaborative projects promote innovation, which leads to better performance and extraordinary results.",
      
      "We are committed to creating meaningful employment opportunities within Indigenous communities while maintaining the highest standards of safety, quality, and environmental stewardship. Our work goes beyond construction – we're building pathways to prosperity for Indigenous peoples and communities across the region."
    ]
  },
  
  // Content cards
  contentSections: [
    {
      id: 'mission-vision',
      title: 'Mission & Vision',
      description: 'Our mission to create meaningful opportunities and our vision for thriving Indigenous communities.',
      linkText: 'Learn More About Our Mission & Vision',
      fullContent: {
        mission: "Our mission is to create meaningful employment opportunities, promote skill development, and drive economic growth within Indigenous communities. We strive to lead the construction industry while advocating for Indigenous rights and interests.",
        vision: "We envision a future where Indigenous communities thrive through sustainable economic development, driven by strong partnerships and an unwavering commitment to cultural values."
      }
    },
    {
      id: 'core-values',
      title: 'Core Values',
      description: 'Our commitment to Indigenous Stewardship, Collaboration, and Integrity guides everything we do.',
      linkText: 'Explore Our Core Values',
      fullContent: {
        intro: "At Indigenous Iron Construction, we are stewards of the land. Our commitment to sustainability ensures we respect and preserve the environment for future generations. Our core values reflect our dedication to:",
        values: [
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
        ]
      }
    },
    {
      id: 'indigenous-stewardship',
      title: 'Indigenous Stewardship',
      description: 'Honoring traditional values while delivering modern construction excellence.',
      linkText: 'Learn About Our Indigenous Approach'
    },
    {
      id: 'safety',
      title: 'Safety & Compliance',
      description: 'Creating safe workplaces where everyone returns home healthy.',
      linkText: 'Our Commitment to Safety'
    },
    {
      id: 'founder',
      title: 'Our Founder',
      description: 'Meet Cody LaRock and learn about his vision for Indigenous Iron Construction.',
      linkText: 'Meet Cody LaRock',
      fullContent: {
        name: "Cody LaRock",
        title: "Founder & Owner",
        bio: "Cody is a Tsleil-Waututh First Nation Community member. He has extensive civil construction project experience, and the last few years have been productive in a senior development management role with KFN Enterprises. He owns and manages several businesses (including Indigenous Iron Construction) and specializes in Indigenous partnerships and maximizing opportunities and benefits for Indigenous businesses through large public sector projects."
      }
    },
    {
      id: 'leadership',
      title: 'Leadership Team',
      description: 'Experienced professionals dedicated to growth and community impact.',
      linkText: 'Meet Our Team',
      linkTo: '/team',
      fullContent: {
        intro: "Indigenous Iron Construction is owned and managed by a team with extensive experience in civil construction projects. Our leadership specializes in Indigenous partnerships and maximizing opportunities for Indigenous businesses through large-scale public sector projects. We are dedicated to creating a positive and lasting impact in the communities we serve."
      }
    }
  ]
};
```

## Page Layout Implementation

```jsx
// app/about/page.js structure
import Link from 'next/link';
import { companyData } from '../src/lib/companyData';

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '400px',
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '4rem'
      }}>
        <div style={{ 
          textAlign: 'center', 
          color: '#fff',
          padding: '0 2rem',
          maxWidth: '900px'
        }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            {companyData.hero.title}
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.95 }}>
            {companyData.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem 4rem'
      }}>
        {companyData.mainContent.paragraphs.map((paragraph, index) => (
          <p key={index} style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#333',
            marginBottom: '1.5rem'
          }}>
            {paragraph}
          </p>
        ))}
      </section>

      {/* Content Cards Grid */}
      <section style={{
        backgroundColor: '#f8f9fa',
        padding: '4rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {companyData.contentSections.map((section) => (
            <div key={section.id} style={{
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: '#333'
              }}>
                {section.title}
              </h2>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {section.description}
              </p>
              {section.linkTo ? (
                <Link href={section.linkTo} style={{
                  color: '#0066cc',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}>
                  {section.linkText} →
                </Link>
              ) : (
                <span style={{
                  color: '#0066cc',
                  fontWeight: '500'
                }}>
                  {section.linkText} →
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Metadata for SEO
export const metadata = {
  title: 'About Us | Indigenous Iron Construction',
  description: 'Learn about Indigenous Iron Construction - a 100% Indigenous-owned company specializing in high-quality infrastructure projects while honouring Indigenous values and culture.',
  keywords: 'Indigenous construction, civil works, Indigenous-owned business, sustainable construction, British Columbia construction'
};
```

## Styling Approach

### Visual Design
- **Hero Section**: Gradient background (can be replaced with hero image)
- **Cards**: Clean white cards with subtle shadows
- **Hover Effects**: Subtle lift on card hover
- **Typography**: Clear hierarchy with generous line-height
- **Responsive**: Grid auto-adjusts based on screen size

### Color Scheme
- **Hero Background**: Purple gradient (temporary - can use brand colors)
- **Text**: Dark gray (#333) for headers, medium gray (#666) for body
- **Links**: Blue (#0066cc)
- **Backgrounds**: Light gray (#f8f9fa) for sections

### Spacing
- **Sections**: 4rem padding between major sections
- **Cards**: 2rem internal padding
- **Paragraphs**: 1.5rem bottom margin

## Future Enhancements

1. **Expandable Sections**: Cards could expand to show full content
2. **Hero Image**: Replace gradient with actual company image
3. **Animations**: Smooth scroll-triggered animations
4. **Modal Windows**: Open detailed content in modals instead of navigation
5. **Icons**: Add relevant icons to each card section

## Implementation Priority

1. Create the basic layout with hero and main content
2. Implement the card grid with placeholder content
3. Add hover effects and transitions
4. Ensure responsive design works properly
5. Add actual links where appropriate (team page)
6. Test on different devices

This approach creates a modern, professional About page that follows the clean design pattern of Bird.ca while showcasing Indigenous Iron Construction's unique identity and values.