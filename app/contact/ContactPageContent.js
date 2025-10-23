'use client';
import { useState } from 'react';
import styled from 'styled-components';
import { servicesData } from '../src/lib/servicesData';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  color: #01bf71;
  text-align: center;
  margin-bottom: 4rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const IntroText = styled.p`
  color: #fff;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #fff;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.875rem;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #1a1a1a;
  color: #fff;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #01bf71;
  }

  &::placeholder {
    color: #666;
  }
`;

const Select = styled.select`
  padding: 0.875rem;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #1a1a1a;
  color: #fff;
  font-size: 1rem;
  transition: border-color 0.3s;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #01bf71;
  }

  option {
    background-color: #1a1a1a;
    color: #fff;
  }
`;

const TextArea = styled.textarea`
  padding: 0.875rem;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #1a1a1a;
  color: #fff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #01bf71;
  }

  &::placeholder {
    color: #666;
  }
`;

const SubmitButton = styled.button`
  background-color: #01bf71;
  color: #010606;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #00a860;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #666;
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMessage = styled.p`
  color: #ff6b6b;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const SuccessMessage = styled.div`
  background-color: #01bf71;
  color: #010606;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const ContactInfoSection = styled.div`
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #333;
`;

const ContactInfoTitle = styled.h3`
  color: #01bf71;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ContactInfoItem = styled.div`
  margin-bottom: 1rem;
`;

const ContactInfoLabel = styled.p`
  color: #999;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

const ContactInfoValue = styled.p`
  color: #fff;
  font-size: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background-color: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #01bf71;
  font-size: 1.25rem;
  transition: all 0.3s;

  &:hover {
    background-color: #01bf71;
    color: #010606;
    transform: translateY(-3px);
  }
`;

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: '',
        });
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setErrors({ submit: 'Failed to submit form. Please try again.' });
      }
    } catch (error) {
      setErrors({ submit: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Extract main service categories for dropdown
  const serviceCategories = [
    'General Inquiry',
    ...servicesData.map(service => service.title)
  ];

  return (
    <ContactContainer>
      <PageTitle>Let's Build Together</PageTitle>
      <PageSubtitle>Contact Us Today</PageSubtitle>

      <ContentGrid>
        <LeftColumn>
          <IntroText>
            We'd Love to Work with You! Whether you're looking for expert civil construction services, 
            marine division support, or want to learn more about our commitment to Indigenous stewardship, 
            we're here to help. Fill out the form below, and one of our team members will get back to you shortly.
          </IntroText>

          {submitSuccess && (
            <SuccessMessage>
              Thank you for your message! We'll get back to you soon.
            </SuccessMessage>
          )}

          {errors.submit && (
            <ErrorMessage>{errors.submit}</ErrorMessage>
          )}

          <Form onSubmit={handleSubmit} noValidate>
            <FormGroup>
              <Label htmlFor="name">Name *</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email *</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="company">Company</Label>
              <Input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company (Optional)"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Subject *</Label>
              <Select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="">Select a topic...</option>
                {serviceCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Select>
              {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message *</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or inquiry..."
              />
              {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </Form>
        </LeftColumn>

        <RightColumn>
          <ContactInfoSection>
            <ContactInfoTitle>General Inquiries</ContactInfoTitle>
            <ContactInfoItem>
              <ContactInfoLabel>Email</ContactInfoLabel>
              <ContactInfoValue>info@indigenousironconstruction.com</ContactInfoValue>
            </ContactInfoItem>
            <ContactInfoItem>
              <ContactInfoLabel>Phone</ContactInfoLabel>
              <ContactInfoValue>(555) 123-4567</ContactInfoValue>
            </ContactInfoItem>
          </ContactInfoSection>

          <ContactInfoSection>
            <ContactInfoTitle>Careers</ContactInfoTitle>
            <ContactInfoItem>
              <ContactInfoLabel>Email</ContactInfoLabel>
              <ContactInfoValue>careers@indigenousironconstruction.com</ContactInfoValue>
            </ContactInfoItem>
            <ContactInfoItem>
              <ContactInfoLabel>Join Our Team</ContactInfoLabel>
              <ContactInfoValue>
                We're always looking for talented individuals who share our commitment to quality 
                and Indigenous values.
              </ContactInfoValue>
            </ContactInfoItem>
          </ContactInfoSection>

          <ContactInfoSection>
            <ContactInfoTitle>Connect With Us</ContactInfoTitle>
            <SocialLinks>
              <SocialLink href="#" aria-label="LinkedIn">
                <span>in</span>
              </SocialLink>
              <SocialLink href="#" aria-label="Facebook">
                <span>f</span>
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <span>𝕏</span>
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <span>📷</span>
              </SocialLink>
            </SocialLinks>
          </ContactInfoSection>
        </RightColumn>
      </ContentGrid>
    </ContactContainer>
  );
}