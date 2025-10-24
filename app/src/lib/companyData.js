// Company Data for Indigenous Iron Construction
// This data structure supports the About page and other company-related pages

export const companyData = {
  // Landing page sections
  landing: {
    aboutSnapshot: {
      sectionLabel: "About Us",
      subLabel: "Innovative Solutions for Modern Construction",
      heading: "Committed to Redefining Construction Standards with Innovation, Expertise, and Unwavering Dedication to Excellence",
      projectsCard: {
        label: "View Projects",
        imageSrc: "/images/hydrovactruck.png",
        href: "/services"
      },
      stats: [
        {
          value: "5K+",
          title: "Projects Completed",
          description: "Delivering excellence in every build, every time"
        },
        {
          value: "250+",
          title: "Skilled Professionals",
          description: "Experts driven by precision, passion, and experience"
        },
        {
          value: "35+",
          title: "Industry Excellence",
          description: "Leading with innovative solutions that set standards"
        },
        {
          value: "1M+",
          title: "Tons of Materials",
          description: "Providing quality resources to meet all project needs"
        }
      ]
    },
    partnersSnapshot: {
      sectionLabel: "Our Partners",
      subLabel: "Trusted Partners and Industry Collaborations",
      heading: "We collaborate with industry-leading experts who share our commitment to environmental stewardship and Indigenous values",
      testimonials: [
        {
          id: 'bcparks',
          quote: "The boat taxi service was excellent—Tony was very accommodating and knowledgeable about the area...",
          organization: 'Ministry of Environment and Parks',
          author: 'Nicole Phillips',
          role: 'Area Supervisor – Vancouver Area, South Coast Region',
          logo: '/images/partners/bcparks.webp'
        },
        {
          id: 'nevent',
          quote: "I recently had the pleasure of working with Indigenous Iron for water taxi services over several days during an event. From the start, Lauren was incredibly easy to work with—always responsive, flexible, and open to any changes we needed to make throughout the planning process. During the event, their team was consistently supportive and adaptable, especially as we navigated multiple last-minute schedule changes. Communication was seamless, and everyone was approachable and professional. What could have been one of the most stressful parts of the event ended up being one of the smoothest, thanks to their reliability. I highly recommend Indigenous Iron to anyone in need of dependable, well-executed water transport services. I'd work with them again without hesitation.",
          organization: "Naut'sa mawt Event Management",
          author: 'Kayla Suhner',
          logo: '/images/partners/neventmanagement.png'
        }
      ],
      partners: [
        {
          id: 1,
          name: "BC First Nation Environmental Stewardship",
          logo: "/images/partners/bcafn.png",
          website: "#"
        },
        {
          id: 2,
          name: "BC Parks",
          logo: "/images/partners/bcparks.webp",
          website: "https://bcparks.ca"
        },
        {
          id: 3,
          name: "Canadian Landscaping and Civil Services",
          logo: "/images/partners/clcs.png",
          website: "#"
        },
        {
          id: 4,
          name: "Coastal Marine",
          logo: "/images/partners/coastal.png",
          website: "#"
        },
        {
          id: 5,
          name: "Crosby Marine Film Services",
          logo: "/images/partners/crosby.png",
          website: "#"
        },
        {
          id: 6,
          name: "Nucor Environmental Solutions",
          logo: "/images/partners/nucor.jpg",
          website: "#"
        },
        {
          id: 7,
          name: "Sure Span",
          logo: "/images/partners/surespan.png",
          website: "#"
        },
        {
          id: 8,
          name: "Whitewater",
          logo: "/images/partners/whitewater.jpg",
          website: "#"
        }
      ]
    }
  },
  
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
  
  // Content cards for the grid layout
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
  ],

  // Footer data
  footer: {
    brand: {
      name: "Indigenous Iron Construction",
      tagline: "100% Indigenous-Owned",
      description: "Building Tomorrow's Infrastructure With Indigenous Values and Excellence"
    },
    contact: {
      address: {
        line1: "Tsleil-Waututh Nation Territory",
        line2: "North Vancouver, BC",
        country: "Canada"
      },
      phone: {
        display: "(604) 555-0100",
        link: "tel:+16045550100"
      },
      email: {
        display: "info@indigenousiron.ca",
        link: "mailto:info@indigenousiron.ca"
      },
      hours: {
        weekdays: "Monday - Friday",
        time: "7:00 AM - 5:00 PM PST"
      },
      mapLink: "https://maps.google.com/?q=Tsleil-Waututh+Nation+North+Vancouver+BC"
    },
    quickLinks: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Our Team", href: "/team" },
      { label: "Contact", href: "/contact" }
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" }
    ],
    social: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/indigenous-iron-construction",
        icon: "FaLinkedin"
      },
      {
        platform: "Facebook",
        url: "https://www.facebook.com/indigenousironconstruction",
        icon: "FaFacebook"
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/indigenousiron",
        icon: "FaInstagram"
      }
    ]
  }
};

export default companyData;