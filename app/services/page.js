import Link from 'next/link';
import servicesData from '../src/lib/servicesData';
import PageSection from '../src/components/PageSection';
import './services.css';

export default function ServicesPage() {
  return (
    <PageSection theme="dark">
      <div className="services-page-container">
        <header className="services-header">
          <h1 className="services-title">
            Our Services
          </h1>
          <p className="services-subtitle">
            Indigenous Iron Construction offers comprehensive construction and environmental services 
            with a commitment to quality, safety, and Indigenous stewardship. Explore our full range 
            of specialized services below.
          </p>
        </header>

        <div className="services-grid">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="service-card-link"
            >
              <div className="service-card">
                {/* Icon placeholder */}
                <div className="service-icon-placeholder">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h2 className="service-card-title">
                  {service.title}
                </h2>

                {/* Short Description */}
                <p className="service-card-description">
                  {service.shortDescription}
                </p>

                {/* Learn More Link */}
                <div className="service-card-link-text">
                  Learn More
                  <span className="arrow">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="services-cta">
          <h2 className="services-cta-title">
            Ready to Start Your Project?
          </h2>
          <p className="services-cta-description">
            Contact us today to discuss how our services can support your construction and environmental needs.
          </p>
          <Link
            href="/#contact"
            className="services-cta-button"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </PageSection>
  );
}

// Metadata for SEO
export const metadata = {
  title: 'Our Services | Indigenous Iron Construction',
  description: 'Comprehensive construction and environmental services including civil works, land development, marine services, hydrovac, and more. 100% Indigenous-owned and operated.',
};