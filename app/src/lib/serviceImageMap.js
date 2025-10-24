// Service Image Mapping for Landing Page Services Teaser
// Maps service IDs to their image paths for the featured 6 services

import civilservices from '../images/services/civilservices.png';
import landsitedev from '../images/services/landsitedev.png';
import marinesafety from '../images/services/marinesafety.jpg';
import landsurvey from '../images/services/landsurvey.jpg';
import contaminatedcleanup from '../images/services/contaminatedcleanup.jpg';
import hydrovac from '../images/services/hydrovac.jpg';

export const serviceImageMap = {
  'civil-works': civilservices,
  'land-development': landsitedev,
  'marine-division': marinesafety,
  'land-surveying': landsurvey,
  'contaminated-materials': contaminatedcleanup,
  'hydrovac': hydrovac
};

// Featured services for landing page teaser (in display order)
export const featuredServiceIds = [
  'civil-works',
  'land-development',
  'marine-division',
  'land-surveying',
  'contaminated-materials',
  'hydrovac'
];

export default serviceImageMap;