import PageSection from '../src/components/PageSection';
import ContactPageContent from './ContactPageContent';

export function generateMetadata() {
  return {
    title: 'Contact Us | Indigenous Iron Construction',
    description: 'Get in touch with Indigenous Iron Construction. Contact us for civil works, marine services, or general inquiries. We\'d love to work with you on your next project.',
  };
}

export default function ContactPage() {
  return (
    <PageSection theme="dark">
      <ContactPageContent />
    </PageSection>
  );
}