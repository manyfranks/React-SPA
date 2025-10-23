import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData, getServiceById, getRelatedServices } from '../../src/lib/servicesData';
import PageSection from '../../src/components/PageSection';
import '../services.css';

// Generate static paths for all services at build time
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    serviceId: service.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const service = getServiceById(params.serviceId);
  
  if (!service) {
    return {
      title: 'Service Not Found | Indigenous Iron Construction',
    };
  }
  
  return {
    title: `${service.title} | Indigenous Iron Construction`,
    description: service.shortDescription,
  };
}

// Service Detail Page Component
export default function ServiceDetailPage({ params }) {
  const service = getServiceById(params.serviceId);
  
  // Handle service not found
  if (!service) {
    notFound();
  }
  
  // Get related services (3 suggestions)
  const relatedServices = getRelatedServices(params.serviceId, 3);
  
  return (
    <PageSection theme="dark">
      <div className="service-detail-container">
        {/* Back to Services Link */}
        <div className="back-link-container">
          <Link href="/services" className="back-link">
            ← Back to All Services
          </Link>
        </div>
        
        {/* Service Header */}
        <header className="service-header">
          <h1 className="service-title">{service.title}</h1>
          <p className="service-short-desc">{service.shortDescription}</p>
        </header>
        
        {/* Main Content */}
        <div className="service-content">
          {/* Long Description */}
          <section className="service-description">
            <h2>Overview</h2>
            {service.longDescription.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
          
          {/* Key Capabilities */}
          <section className="service-capabilities">
            <h2>Key Capabilities</h2>
            <ul className="capabilities-list">
              {service.keyCapabilities.map((capability, index) => (
                <li key={index}>{capability}</li>
              ))}
            </ul>
          </section>
          
          {/* Related Services */}
          {relatedServices.length > 0 && (
            <section className="related-services">
              <h2>Related Services</h2>
              <div className="related-services-grid">
                {relatedServices.map((relatedService) => (
                  <Link 
                    key={relatedService.id}
                    href={`/services/${relatedService.id}`}
                    className="related-service-card"
                  >
                    <h3>{relatedService.title}</h3>
                    <p>{relatedService.shortDescription}</p>
                    <span className="read-more">Learn More →</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
        
        {/* Call to Action */}
        <div className="service-cta">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today to discuss how we can help with your project.</p>
          <Link href="/#contact" className="cta-button">
            Contact Us
          </Link>
        </div>
      </div>
    </PageSection>
  );
}