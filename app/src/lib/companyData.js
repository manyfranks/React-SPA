// Company Data for Indigenous Iron Construction
// This data structure supports the About page and other company-related pages

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
  ]
};

export default companyData;