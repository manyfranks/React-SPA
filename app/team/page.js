import { teamMembers } from '../src/lib/teamData';
import PageSection from '../src/components/PageSection';
import './team.css';

export default function TeamPage() {
  return (
    <PageSection theme="dark">
      <div className="team-page-container">
        <header className="team-header">
          <h1 className="team-title">
            Our Leadership Team
          </h1>
          <p className="team-subtitle">
            Meet the experienced professionals leading Indigenous Iron Construction. 
            Our leadership team brings decades of combined expertise in construction, 
            environmental services, and Indigenous business development.
          </p>
        </header>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              {/* Member Photo */}
              <div className="team-photo-placeholder">
                <div className="photo-initials">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>

              {/* Member Info */}
              <div className="team-card-content">
                <h2 className="team-member-name">
                  {member.name}
                </h2>
                
                <h3 className="team-member-title">
                  {member.title}
                </h3>

                {/* Education */}
                <div className="team-education">
                  <h4 className="education-heading">Education & Credentials</h4>
                  <ul className="education-list">
                    {member.education.map((edu, index) => (
                      <li key={index}>{edu}</li>
                    ))}
                  </ul>
                </div>

                {/* Bio */}
                <p className="team-bio">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="team-cta">
          <h2 className="team-cta-title">
            Work With Our Team
          </h2>
          <p className="team-cta-description">
            Connect with our leadership team to discuss your construction and environmental service needs.
          </p>
          <a
            href="/#contact"
            className="team-cta-button"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </PageSection>
  );
}

// Metadata for SEO
export const metadata = {
  title: 'Our Leadership Team | Indigenous Iron Construction',
  description: 'Meet the experienced leadership team at Indigenous Iron Construction. Our executives bring decades of expertise in construction, environmental services, and Indigenous business development.',
};