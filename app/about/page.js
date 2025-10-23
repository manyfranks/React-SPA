import Link from 'next/link';
import { companyData } from '../src/lib/companyData';
import PageSection from '../src/components/PageSection';
import './about.css';

export default function AboutPage() {
  return (
    <PageSection theme="dark">
      <div className="about-page-wrapper">
        {/* Hero Section */}
        <section className="about-hero-section">
          <div className="about-hero-content">
            <h1 className="about-hero-title">
              {companyData.hero.title}
            </h1>
            <p className="about-hero-subtitle">
              {companyData.hero.subtitle}
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="about-main-content">
          {companyData.mainContent.paragraphs.map((paragraph, index) => (
            <p key={index} className="about-paragraph">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Content Cards Grid */}
        <section className="about-cards-section">
          <div className="about-cards-grid">
            {companyData.contentSections.map((section) => (
              <div 
                key={section.id} 
                className="about-content-card"
              >
                <h2 className="about-card-title">
                  {section.title}
                </h2>
                <p className="about-card-description">
                  {section.description}
                </p>
                {section.linkTo ? (
                  <Link href={section.linkTo} className="about-card-link">
                    {section.linkText} <span className="about-arrow">→</span>
                  </Link>
                ) : (
                  <span className="about-card-link-static">
                    {section.linkText} <span className="about-arrow">→</span>
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageSection>
  );
}

// Metadata for SEO
export const metadata = {
  title: 'About Us | Indigenous Iron Construction',
  description: 'Learn about Indigenous Iron Construction - a 100% Indigenous-owned company specializing in high-quality infrastructure projects while honouring Indigenous values and culture.',
  keywords: 'Indigenous construction, civil works, Indigenous-owned business, sustainable construction, British Columbia construction'
};