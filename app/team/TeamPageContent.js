'use client';

import styled from 'styled-components';
import HeroCarousel from '../src/components/HeroCarousel';
import Breadcrumbs from '../src/components/Breadcrumbs';
import { teamMembers } from '../src/lib/teamData';

// Styled Components
const TeamContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
`;

const ContentSection = styled.section`
  background-color: #f8f9fa;
  padding: 40px 24px 40px;

  @media screen and (max-width: 768px) {
    padding: 30px 20px 30px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px 16px 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: 40px;
  text-align: left;

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #010606;
  margin-bottom: 16px;
  line-height: 1.2;

  @media screen and (max-width: 768px) {
    font-size: 38px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #4a4a4a;
  line-height: 1.6;
  max-width: 800px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const TeamGridSection = styled.section`
  background-color: #f8f9fa;
  padding: 20px 24px 60px;

  @media screen and (max-width: 768px) {
    padding: 15px 20px 40px;
  }

  @media screen and (max-width: 480px) {
    padding: 10px 16px 30px;
  }
`;

const TeamGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;

  @media screen and (max-width: 768px) {
    gap: 24px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const TeamCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }

  @media screen and (max-width: 768px) {
    padding: 24px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #01bf71 0%, #00a85e 100%);
  border-radius: 50%;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(1, 191, 113, 0.3);
  overflow: hidden;

  @media screen and (max-width: 480px) {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }
`;

const AvatarInitials = styled.div`
  color: #fff;
  font-size: 40px;
  font-weight: 600;
  user-select: none;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  text-align: center;
`;

const MemberName = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #010606;
  margin-bottom: 8px;
  line-height: 1.2;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

const MemberTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #01bf71;
  margin-bottom: 24px;
  line-height: 1.3;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const EducationBox = styled.div`
  background-color: #f8f9fa;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 20px;
  text-align: left;

  @media screen and (max-width: 480px) {
    padding: 14px;
  }
`;

const EducationHeading = styled.h4`
  font-size: 12px;
  font-weight: 600;
  color: #01bf71;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
`;

const EducationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const EducationItem = styled.li`
  font-size: 15px;
  color: #4a4a4a;
  line-height: 1.6;
  padding-left: 20px;
  position: relative;
  margin-bottom: 8px;

  &:before {
    content: "▸";
    position: absolute;
    left: 0;
    color: #01bf71;
    font-weight: bold;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Bio = styled.p`
  font-size: 16px;
  color: #4a4a4a;
  line-height: 1.7;
  text-align: left;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

const CTASection = styled.section`
  background-color: #fff;
  padding: 60px 24px;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    padding: 48px 20px;
    margin-top: 30px;
  }

  @media screen and (max-width: 480px) {
    padding: 40px 16px;
    margin-top: 20px;
  }
`;

const CTAWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: #010606;
  margin-bottom: 16px;
  line-height: 1.2;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

const CTADescription = styled.p`
  font-size: 18px;
  color: #4a4a4a;
  line-height: 1.6;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 24px;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 14px 32px;
  background: linear-gradient(135deg, #01bf71 0%, #00a85e 100%);
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(1, 191, 113, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(1, 191, 113, 0.4);
    background: linear-gradient(135deg, #00a85e 0%, #01bf71 100%);
  }

  @media screen and (max-width: 480px) {
    padding: 12px 28px;
    font-size: 15px;
  }
`;

export default function TeamPageContent() {
  // Team hero carousel slides
  const heroSlides = [
    { imageSrc: '/images/hero/team/hero-1.jpg', title: 'Indigenous Iron Construction team' },
    { imageSrc: '/images/hero/team/hero-2.jpg', title: 'Team collaboration and excellence' },
    { imageSrc: '/images/hero/team/hero-3.jpg', title: 'Leadership and dedication' },
    { imageSrc: '/images/hero/team/hero-4.jpg', title: 'Building tomorrow together' }
  ];

  // Helper to generate initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <TeamContainer>
      {/* Hero Carousel */}
      <HeroSection>
        <HeroCarousel
          slides={heroSlides}
          twoUp={true}
          collapseAt={640}
          heightVh={40}
          minHeight={290}
          maxHeight={435}
          showOverlay={false}
          showProgress={false}
        />
      </HeroSection>

      {/* Page Header with Breadcrumbs */}
      <ContentSection>
        <ContentWrapper>
          <Breadcrumbs />
          
          <SectionHeader>
            <Title>Our Leadership Team</Title>
            <Subtitle>
              Meet the experienced professionals leading Indigenous Iron Construction. 
              Our leadership team brings decades of combined expertise in construction, 
              environmental services, and Indigenous business development.
            </Subtitle>
          </SectionHeader>
        </ContentWrapper>
      </ContentSection>

      {/* Team Grid */}
      <TeamGridSection>
        <TeamGrid>
          {teamMembers.map((member) => (
            <TeamCard key={member.id}>
              {/* Avatar with image or initials fallback */}
              <Avatar>
                {member.photoUrl ? (
                  <AvatarImage src={member.photoUrl} alt={member.name} />
                ) : (
                  <AvatarInitials>{getInitials(member.name)}</AvatarInitials>
                )}
              </Avatar>

              <CardContent>
                <MemberName>{member.name}</MemberName>
                <MemberTitle>{member.title}</MemberTitle>

                {/* Education */}
                <EducationBox>
                  <EducationHeading>Education & Credentials</EducationHeading>
                  <EducationList>
                    {member.education.map((edu, index) => (
                      <EducationItem key={index}>{edu}</EducationItem>
                    ))}
                  </EducationList>
                </EducationBox>

                {/* Bio */}
                <Bio>{member.bio}</Bio>
              </CardContent>
            </TeamCard>
          ))}
        </TeamGrid>
      </TeamGridSection>

      {/* Call to Action */}
      <CTASection>
        <CTAWrapper>
          <CTATitle>Work With Our Team</CTATitle>
          <CTADescription>
            Connect with our leadership team to discuss your construction and environmental service needs.
          </CTADescription>
          <CTAButton href="/#contact">
            Get in Touch
          </CTAButton>
        </CTAWrapper>
      </CTASection>
    </TeamContainer>
  );
}