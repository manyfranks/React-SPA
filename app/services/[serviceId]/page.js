import { notFound } from 'next/navigation';
import { servicesData, getServiceById, getRelatedServices } from '../../src/lib/servicesData';
import ServiceDetailContent from '../ServiceDetailContent';

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
    <ServiceDetailContent 
      service={service} 
      relatedServices={relatedServices}
    />
  );
}